import { NextApiRequest, NextApiResponse } from "next";
import { currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const user = await currentUser();
  if (!user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const { firstName, lastName, userName } = req.body;

  try {
    // อัปเดตข้อมูลในฐานข้อมูล
    const updatedProfile = await db.profile.update({
      where: { clerkId: user.id },
      data: { firstName, lastName, userName },
    });

    return res.status(200).json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ error: "Failed to update profile" });
  }
}
