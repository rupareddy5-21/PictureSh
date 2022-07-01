import prisma from "../../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { CreateImageType, UserType } from "../../../utils/types";

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
      const images = await prisma.image.findMany({
        include: { author: true },
      });
      res.status(200).json(images);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const data: CreateImageType = req.body;
      const image = await prisma.image.create({
        data: {
          title: data.title,
          description: data.description,
          category: data.category,
          url: data.url,
          //@ts-ignore
          authorId: session.user.id,
        },
        include: {
          author: true,
        },
      });
      res.status(201).json(image);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
