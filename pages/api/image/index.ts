import prisma from "../../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { CreateImageType, UserType } from "../../../utils/types";

export default async function ImageStuff(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const session = await getSession({ req });
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
          url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thehistoryhub.com%2Fwp-content%2Fuploads%2F2014%2F08%2FBig-Ben-Night.jpg&f=1&nofb=1",
          //@ts-ignore
          authorId: "cl4xyahfs0006fwgh4p12xthg",
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
