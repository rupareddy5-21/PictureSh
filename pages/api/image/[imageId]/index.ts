import prisma from "../../../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const { imageId } = req.query;
  if (!session) {
    res.status(401).json({
      error: "Unauthenticated",
    });
    return;
  }
  if (req.method === "GET") {
    try {
      const image = await prisma.image.findUnique({
        where: {
          id: parseInt(imageId as string),
        },
        include: {
          likes: true,
          comments: {
            include: { user: true },
            orderBy: {
              createdAt: "desc",
            },
          },
          author: true,
          saves: true,
        },
      });
      res.status(200).json(image);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const image = await prisma.image.findUnique({
        where: {
          id: parseInt(imageId as string),
        },
      });
      //@ts-ignore
      if (image?.authorId === session?.user?.id) {
        await prisma.image.delete({
          where: {
            id: parseInt(imageId as string),
          },
        });
        res.status(200).json({
          message: "Image deleted successfully",
        });
      } else {
        res.status(401).json({
          error: "You can't delete others images",
        });
      }
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
