import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";

export default async function UserStuff(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const user = await prisma.user.findUnique({
        where: {
          id: userId as string,
        },
        include: {
          images: true,
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
