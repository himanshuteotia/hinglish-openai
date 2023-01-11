This package provides an easy-to-use function for generating text in English by using OpenAI's GPT-3 model. It can take a message in any language as input (especially in hinglish), translate it to English and generates a reply. It uses the text-davinci-003 model for the best result with parameters like temperature, max_tokens and penalties for better control over generated text. It also uses a cleanString function to remove any unwanted spaces and new lines in the generated text

if you ask in hinglish `kya haal hai?` it will reply something like `I'm doing well. How about you?`

Please do not forget to add api key `export OPENAI_API_KEY=your-key`