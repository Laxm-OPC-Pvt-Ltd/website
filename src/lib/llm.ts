import OpenAI from "openai";
import { searchFAQs } from "@/data/faqs";

// Initialize OpenAI client - uses OPENAI_API_KEY environment variable
const openai = new OpenAI({
  apiKey:
    "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",
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
 * Query the LLM with FAQ context for enhanced responses
 * This allows the AI engine to provide answers grounded in the website's FAQs
 */
export async function queryLLMWithContext(userQuery: string, options: LLMQueryOptions = {}): Promise<LLMResponse> {
  const { includeContext = true, maxTokens = 500, temperature = 0.7 } = options;

  try {
    // Search relevant FAQs based on the query
    let context = "";
    let sources: string[] = [];
    let relevantFAQs = [];

    if (includeContext) {
      relevantFAQs = searchFAQs(userQuery);
      sources = relevantFAQs.map((faq) => `Q: ${faq.question}`);

      if (relevantFAQs.length > 0) {
        context = `
You are a helpful AI assistant for Laxm, a strategic consultancy focused on human-centered innovation and business growth.
Use the following information from our knowledge base to answer questions:

${relevantFAQs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")}

---
User Question: ${userQuery}
`;
      } else {
        context = `
You are a helpful AI assistant for Laxm, a strategic consultancy. 
Answer the following question about Laxm based on your knowledge:
Question: ${userQuery}
`;
      }
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant for Laxm. Provide clear, concise answers. If you don't have specific information, suggest contacting the sales team.",
        },
        {
          role: "user",
          content: context || userQuery,
        },
      ],
      max_tokens: maxTokens,
      temperature,
    });

    const message = response.choices[0]?.message?.content || "Unable to generate response";

    return {
      message,
      sources: sources.length > 0 ? sources : undefined,
      confidence: relevantFAQs.length > 0 ? Math.min(0.95, 0.5 + relevantFAQs.length * 0.15) : 0.5,
    };
  } catch (error) {
    console.error("LLM Error:", error);
    throw new Error("Failed to process query with LLM");
  }
}

/**
 * Simple streaming response for real-time AI interactions
 */
export async function streamLLMResponse(
  userQuery: string,
  systemPrompt: string = "You are a helpful AI assistant for Laxm.",
): Promise<AsyncIterable<string>> {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userQuery,
      },
    ],
    stream: true,
  });

  // Convert stream to async iterable
  return (async function* () {
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        yield content;
      }
    }
  })();
}

/**
 * Generate embeddings for semantic search (optional for advanced use)
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
}
