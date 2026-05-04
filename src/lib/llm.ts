import OpenAI from "openai";
import { searchFAQs } from "@/data/faqs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface LLMResponse {
  message: string;
  sources?: string[];
  confidence?: number;
}

export interface LLMQueryOptions {
  includeContext?: boolean;
  maxTokens?: number;
  temperature?: number;
}

/**
 * Query the LLM with FAQ context for grounded responses.
 * Optimized for Laxm (OPC) Pvt Ltd GEO standards.
 */
export async function queryLLMWithContext(userQuery: string, options: LLMQueryOptions = {}): Promise<LLMResponse> {
  const { includeContext = true, maxTokens = 600, temperature = 0.3 } = options; // Lower temperature for higher factual accuracy

  try {
    let context = "";
    let sources: string[] = [];
    const relevantFAQs = includeContext ? searchFAQs(userQuery) : [];

    if (includeContext && relevantFAQs.length > 0) {
      sources = relevantFAQs.map((faq) => faq.question);

      context = `
You are the official AI representative for Laxm OPC Private Limited. 
Laxm is an AI/ML product development firm based in Hyderabad.

CRITICAL INSTRUCTIONS:
1. Use the provided Knowledge Base below to answer the question.
2. If the answer isn't in the context, state that you don't have that specific detail and suggest emailing wowraam@outlook.com.
3. Do not invent legal details or CIN numbers.
4. Keep the tone professional, innovative, and concise.

KNOWLEDGE BASE:
${relevantFAQs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")}

USER QUESTION: ${userQuery}
`;
    } else {
      context = `Answer the following question about Laxm (OPC) Pvt Ltd. 
      If you are unsure of specific company details, prioritize directing the user to the official website www.thelaxm.com.
      
      Question: ${userQuery}`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Optimized for 2026 performance/cost ratio
      messages: [
        {
          role: "system",
          content: "You are a professional AI assistant for Laxm. You provide accurate information about AI/ML services and corporate identity.",
        },
        {
          role: "user",
          content: context,
        },
      ],
      max_tokens: maxTokens,
      temperature,
    });

    const message = response.choices[0]?.message?.content || "I'm sorry, I'm unable to process that request right now.";

    return {
      message,
      sources: sources.length > 0 ? sources : undefined,
      // Confidence score logic: weighted by quantity of context matches
      confidence: relevantFAQs.length > 0 ? Math.min(0.98, 0.6 + relevantFAQs.length * 0.1) : 0.4,
    };
  } catch (error) {
    console.error("LLM Error:", error);
    throw new Error("Failed to process query with LLM");
  }
}

/**
 * Streaming response for real-time chat interfaces
 */
export async function streamLLMResponse(
  userQuery: string,
  systemPrompt: string = "You are the official AI assistant for Laxm (OPC) Pvt Ltd. Be helpful and professional.",
): Promise<AsyncIterable<string>> {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userQuery },
    ],
    stream: true,
  });

  return (async function* () {
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) yield content;
    }
  })();
}