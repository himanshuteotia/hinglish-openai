const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function cleanString(str) {
  // Replace new lines with a space
  str = str.replace(/(\r\n|\n|\r)/gm, " ");
  // Replace multiple spaces with a single space
  str = str.replace(/ +(?= )/g, "");
  // Trim the string
  str = str.trim();
  return str;
}

/**
 * Translate hinglish message to english and generate a CHAT GPT 3 reply
 * @async
 * @function
 * @param {string} message - Hinglish message e.g kya haal hai
 * @returns {Promise<string>} - The CHAT GPT3 reply
 */
const generateText = async (message) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `translate to english and reply to this message ${message} `,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 1.75,
    presence_penalty: 1.5,
  });
  return cleanString(completion.data.choices[0].text);
};

module.exports = { generateText }
