import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

export default function signature(req: NextApiRequest, res: NextApiResponse) {
  // Get the timestamp in seconds
  const timestamp = Math.round(new Date().getTime() / 1000);

  // Get the signature using the Node.js SDK method api_sign_request
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      timestamp: timestamp,
    },
    process.env.NEXT_PUBLIC_CLOUDINARY_APISECRET as string
  );

  res.statusCode = 200;
  res.json({ signature, timestamp });
}
