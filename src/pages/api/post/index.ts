import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    if (method === "GET") {
      const { page, limit } = req.query;
      const response = await axios.get(`${process.env.BACKEND_URL}/post`, {
        params: { page, limit },
      });
      return res.status(response.status).json(response.data);
    }

    if (method === "POST") {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/post`,
        req.body,
        {
          headers: {
            Authorization: req.headers.authorization || "",
          },
        }
      );
      return res.status(response.status).json(response.data);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
