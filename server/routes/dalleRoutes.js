import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
  res.send("Hello, world!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });
    const image = aiResponse.data[0].b64_json;
    console.log(image);

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log("Error generating image", error);
    res.status(500).send(error?.response.data.error.message || "Server error");
  }
});

export default router;
