/**
 * Example Integration Code for External AI Engines
 * Shows how to use Laxm website APIs to fetch data and query the AI
 */

// ============================================================================
// 1. FETCH FAQ KNOWLEDGE BASE
// ============================================================================

/**
 * Fetch all FAQs to build your AI's knowledge base
 */
async function fetchFAQKnowledgeBase() {
  const baseUrl = "https://www.thelaxm.com";

  try {
    const response = await fetch(`${baseUrl}/api/faqs?limit=100`);
    const { data, categories } = await response.json();

    console.log(`Fetched ${data.length} FAQs`);
    console.log(`Categories: ${categories.join(", ")}`);

    // Store these in your vector database or search index
    return { faqs: data, categories };
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
  }
}

// ============================================================================
// 2. SEARCH FOR RELEVANT FAQs
// ============================================================================

/**
 * Search FAQs to find relevant context before querying AI
 */
async function searchRelevantFAQs(query: string) {
  const baseUrl = "https://www.thelaxm.com";

  try {
    const response = await fetch(`${baseUrl}/api/faqs/search?q=${encodeURIComponent(query)}`);
    const { results } = await response.json();

    console.log(`Found ${results.length} relevant FAQs for: "${query}"`);
    return results;
  } catch (error) {
    console.error("FAQ search failed:", error);
    return [];
  }
}

// ============================================================================
// 3. QUERY AI WITH CONTEXT
// ============================================================================

/**
 * Send a query to the website's AI engine
 * The AI will automatically include relevant FAQ context
 */
async function queryWebsiteAI(userQuery: string) {
  const baseUrl = "https://www.thelaxm.com";

  try {
    const response = await fetch(`${baseUrl}/api/ai/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: userQuery,
        includeContext: true,
        maxTokens: 500,
        temperature: 0.7,
      }),
    });

    const { response: aiResponse } = await response.json();

    console.log("AI Response:", aiResponse.message);
    if (aiResponse.sources) {
      console.log("Sources:", aiResponse.sources);
    }

    return aiResponse;
  } catch (error) {
    console.error("AI query failed:", error);
  }
}

// ============================================================================
// 4. FETCH WEBSITE CONTENT
// ============================================================================

/**
 * Fetch structured website content for indexing in your AI system
 */
async function fetchWebsiteContent(contentType = "all") {
  const baseUrl = "https://www.thelaxm.com";
  const types = ["all", "company", "services", "pages"];

  if (!types.includes(contentType)) {
    console.error(`Invalid content type. Choose from: ${types.join(", ")}`);
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/api/content?type=${contentType}`);
    const { data } = await response.json();

    console.log(`Fetched ${contentType} content:`, data);
    return data;
  } catch (error) {
    console.error("Failed to fetch content:", error);
  }
}

// ============================================================================
// 5. COMPLETE WORKFLOW EXAMPLE
// ============================================================================

/**
 * Example: Complete workflow for external AI engine
 * 1. Build knowledge base on startup
 * 2. When user asks a question:
 *    a. Search for relevant FAQs
 *    b. Query the website AI
 *    c. Return response to user
 */
async function completeAIWorkflow() {
  console.log("🤖 Starting AI Workflow...");

  // Step 1: Initialize knowledge base (do this once on startup)
  console.log("\n📚 Step 1: Building knowledge base...");
  const faqPayload = await fetchFAQKnowledgeBase();
  if (!faqPayload) {
    throw new Error("Unable to load FAQ knowledge base");
  }
  const { faqs, categories } = faqPayload;
  console.log(`✅ Loaded ${faqs.length} FAQs in ${categories.length} categories`);

  // Step 2: Fetch website content for indexing
  console.log("\n📄 Step 2: Fetching website content...");
  const content = await fetchWebsiteContent("all");
  if (!content) {
    throw new Error("Unable to fetch website content");
  }
  console.log("✅ Website content fetched");

  // Step 3: Example user question
  const userQuestion = "What services does Laxm offer?";
  console.log(`\n❓ User Question: "${userQuestion}"`);

  // Step 4: Search for relevant FAQs first
  console.log("\n🔍 Step 3: Searching for relevant FAQs...");
  const relevantFAQs = await searchRelevantFAQs(userQuestion);
  console.log(`✅ Found ${relevantFAQs.length} relevant FAQs`);

  // Step 5: Query the AI
  console.log("\n🤖 Step 4: Querying AI engine...");
  const aiResponse = await queryWebsiteAI(userQuestion);
  console.log("✅ AI Response received");
  console.log(`\n💬 AI Says:\n${aiResponse.message}`);

  if (aiResponse.sources && aiResponse.sources.length > 0) {
    console.log("\n📌 Sources:");
    aiResponse.sources.forEach((source: string) => console.log(`  - ${source}`));
  }

  console.log(`\n🎯 Confidence Score: ${(aiResponse.confidence * 100).toFixed(0)}%`);
}

// ============================================================================
// 6. ADVANCED: BATCH PROCESSING
// ============================================================================

/**
 * Process multiple questions in batch
 */
async function batchProcessQuestions(questions: string[]) {
  const results = [];

  for (const question of questions) {
    console.log(`\nProcessing: "${question}"`);

    try {
      const response = await fetch("https://www.thelaxm.com/api/ai/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: question,
          includeContext: true,
        }),
      });

      const data = await response.json();
      results.push({
        question,
        answer: data.response.message,
        confidence: data.response.confidence,
      });

      console.log(`✅ Processed`);
    } catch (error) {
      console.error(`❌ Failed to process: ${error}`);
      results.push({
        question,
        answer: null,
        error: String(error),
      });
    }

    // Rate limiting - avoid hammering the API
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return results;
}

// ============================================================================
// 7. CACHING STRATEGY
// ============================================================================

/**
 * Implement caching to reduce API calls
 */
class FAQCache {
  private cache: Map<string, any> = new Map();
  private cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours

  async getFAQs(): Promise<any> {
    const cacheKey = "all_faqs";

    // Check if cached
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        console.log("📦 Using cached FAQs");
        return cached.data;
      }
    }

    // Fetch and cache
    console.log("🌐 Fetching fresh FAQs from API");
    const response = await fetch("https://www.thelaxm.com/api/faqs?limit=100");
    const data = await response.json();

    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });

    return data;
  }

  clearCache(): void {
    this.cache.clear();
    console.log("🧹 Cache cleared");
  }
}

// ============================================================================
// 8. ERROR HANDLING
// ============================================================================

/**
 * Robust error handling for API calls
 */
async function queryWithRetry(query: string, maxRetries = 3): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxRetries}...`);
      const response = await fetch("https://www.thelaxm.com/api/ai/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, includeContext: true }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);

      if (attempt === maxRetries) {
        console.error("Max retries reached");
        throw error;
      }

      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

// Run a complete workflow
// completeAIWorkflow();

// Or use individual functions:
// await fetchFAQKnowledgeBase();
// await searchRelevantFAQs("What services do you offer?");
// await queryWebsiteAI("Tell me about Laxm");
// await fetchWebsiteContent("services");

// Batch processing
// const questions = [
//   "What services does Laxm offer?",
//   "How long do projects take?",
//   "Do you offer support after launch?",
// ];
// const results = await batchProcessQuestions(questions);
// console.log(results);

// Caching
// const cache = new FAQCache();
// const faqs = await cache.getFAQs();
// const faqs2 = await cache.getFAQs(); // Uses cache

// Retry logic
// const response = await queryWithRetry("Your question here");

export {
  fetchFAQKnowledgeBase,
  searchRelevantFAQs,
  queryWebsiteAI,
  fetchWebsiteContent,
  completeAIWorkflow,
  batchProcessQuestions,
  FAQCache,
  queryWithRetry,
};
