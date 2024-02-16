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
    // const aiResponse = await openai.createImage({
    //
    //   prompt,
    //   n: 1,
    //   size: "1024x1024",
    // });
    // image_url = response.data.data[0].url;
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;

    res.send(200).json({ photo: image });

    console.log(image);
  } catch (error) {
    console.log("Error generating image", error);
    res.status(500).send(error?.response.data.error.message || "Server error");
  }
});

export default router;
