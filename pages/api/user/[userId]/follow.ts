import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../../utils/prisma";
import { toast } from "react-toastify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  const { userId } = req.query;
  if (req.method === "PUT") {
    try {
      const followerUser = await prisma.user.findUnique({
        where: { id: userId as string },
      });
      if (followerUser === null) {
        res.status(404).json({ error: "User not found" });
        return;
        //@ts-ignore
      } else if (followerUser?.id === session?.user?.id) {
        res.status(400).json({ error: "You can't follow yourself" });
        return;
      } else {
        const isFollowing = await prisma.follow.findFirst({
          where: {
            followerId: userId as string,
            //@ts-ignore
            followingId: session?.user?.id,
          },
        });
        if (isFollowing === null) {
          await prisma.follow.create({
            data: {
              followerId: userId as string,
              //@ts-ignore
              followingId: session?.user?.id,
            },
          });
          const follower = await prisma.user.findUnique({
            where: { id: userId as string },
            include: {
              followers: true,
              following: true,
              images: {
                include: {
                  author: true,
                  likes: true,
                  saves: true,
                },
              },
            },
          });
          res.status(200).json(follower);
        } else {
          await prisma.follow.delete({
            where: {
              id: isFollowing.id,
            },
          });
          const follower = await prisma.user.findUnique({
            where: { id: userId as string },
            include: {
              followers: true,
              following: true,
              images: {
                include: {
                  author: true,
                  likes: true,
                  saves: true,
                },
              },
            },
          });
          res.status(200).json(follower);
        }
      }
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
