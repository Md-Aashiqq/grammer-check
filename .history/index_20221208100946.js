const dotenv = require("dotenv");
dotenv.config({});
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const start = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Correct this to standard English:\n\nwe went for shopping today.\n\nWe went shopping today.",
    temperature: 0,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(response);
};
