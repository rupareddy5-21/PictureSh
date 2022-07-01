import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const user = await prisma.user.findUnique({
        where: {
          id: userId as string,
        },
        include: {
          images: {
            include: {
              author: true,
              likes: true,
              saves: true,
            },
          },
          followers: true,
          following: true,
        },
      });
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
