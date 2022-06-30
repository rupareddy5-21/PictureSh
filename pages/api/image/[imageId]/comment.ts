import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({
      error: "Unauthenticated",
    });
    return;
  }
  if (req.method === "POST") {
    try {
      const { imageId } = req.query;
      const { comment } = req.body;
      const image = await prisma.image.findUnique({
        where: {
          id: parseInt(imageId as string),
        },
      });
      if (image === null) {
        res.status(400).json({
          error: "Image not found",
        });
        return;
      } else {
        await prisma.comment.create({
          data: {
            comment: comment,
            imageId: parseInt(imageId as string),
            //@ts-ignore
            userId: session?.user?.id,
          },
        });
        const imageboi = await prisma.image.findUnique({
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
          },
        });
        res.status(201).json(imageboi);
      }
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
