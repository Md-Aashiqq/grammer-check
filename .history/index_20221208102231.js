const dotenv = require("dotenv");
dotenv.config({});
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

const start = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Correct this to standard English:\n\nI need a break.",
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response.data.choices);
};
start();
