import { OpenAI } from 'openai'

const user = new OpenAI({apiKey : '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',
  dangerouslyAllowBrowser: true
})

export async function get_gpt_3_response(prompt) {
  const resp = await user.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return resp.choices[0].message.content
}