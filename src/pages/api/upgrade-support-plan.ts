import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({
        error: "Method Not Allowed",
      });
  }

  return res.status(410).json({
    error:
      "Support plan upgrades are no longer available. Lifetime Training Access is the only purchase option currently offered.",
  });
}