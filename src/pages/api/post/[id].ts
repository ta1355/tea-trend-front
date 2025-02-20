import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.query;

  try {
    if (method === "GET") {
      const response = await axios.get(`${process.env.BACKEND_URL}/post/${id}`);
      return res.status(response.status).json(response.data);
    }

    if (method === "PATCH") {
      const response = await axios.patch(
        `${process.env.BACKEND_URL}/post/${id}`,
        req.body,
        {
          headers: {
            Authorization: req.headers.authorization || "",
          },
        }
      );
      return res.status(response.status).json(response.data);
    }

    if (method === "DELETE") {
      const response = await axios.delete(
        `${process.env.BACKEND_URL}/post/${id}`,
        {
          headers: {
            Authorization: req.headers.authorization || "",
          },
        }
      );
      return res.status(response.status).json(response.data);
    }

    res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
