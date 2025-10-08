// Simple text similarity using cosine similarity for semantic search
// This avoids the complex transformer dependencies

interface KnowledgeItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

interface SearchResult {
  item: KnowledgeItem;
  score: number;
}

// Simple text preprocessing
function preprocessText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Create a simple bag-of-words vector
function createVector(text: string): Map<string, number> {
  const words = preprocessText(text).split(' ');
  const vector = new Map<string, number>();
  
  for (const word of words) {
    if (word.length > 2) { // Skip very short words
      vector.set(word, (vector.get(word) || 0) + 1);
    }
  }
  
  return vector;
}

// Calculate cosine similarity between two vectors
function cosineSimilarity(vec1: Map<string, number>, vec2: Map<string, number>): number {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  
  // Get all unique keys using compatible iteration
  const allKeys = new Set<string>();
  
  // Add keys from vec1
  vec1.forEach((_, key) => {
    allKeys.add(key);
  });
  
  // Add keys from vec2
  vec2.forEach((_, key) => {
    allKeys.add(key);
  });
  
  // Iterate using forEach for compatibility
  allKeys.forEach(key => {
    const val1 = vec1.get(key) || 0;
    const val2 = vec2.get(key) || 0;
    
    dotProduct += val1 * val2;
    norm1 += val1 * val1;
    norm2 += val2 * val2;
  });
  
  if (norm1 === 0 || norm2 === 0) return 0;
  
  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

// Enhanced search that considers both question and keywords
function calculateRelevanceScore(query: string, item: KnowledgeItem): number {
  const queryVector = createVector(query);
  const questionVector = createVector(item.question);
  const answerVector = createVector(item.answer);
  
  // Create a combined vector from keywords
  const keywordsText = item.keywords.join(' ');
  const keywordsVector = createVector(keywordsText);
  
  // Calculate similarities
  const questionSimilarity = cosineSimilarity(queryVector, questionVector);
  const answerSimilarity = cosineSimilarity(queryVector, answerVector);
  const keywordsSimilarity = cosineSimilarity(queryVector, keywordsVector);
  
  // Weighted combination: question similarity is most important
  return (
    questionSimilarity * 0.5 +
    answerSimilarity * 0.3 +
    keywordsSimilarity * 0.2
  );
}

// Main semantic search function
export async function semanticSearch(
  query: string,
  knowledgeBase: KnowledgeItem[],
  limit: number = 3
): Promise<SearchResult[]> {
  const results: SearchResult[] = [];
  
  for (const item of knowledgeBase) {
    const score = calculateRelevanceScore(query, item);
    // Include all results; we'll sort and pick top matches
    results.push({ item, score });
  }
  
  // Sort by score (highest first) and return top results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// Helper function to find the best answer
export async function findBestAnswer(
  query: string,
  knowledgeBase: KnowledgeItem[]
): Promise<{ answer: string; confidence: number; source: string } | null> {
  const results = await semanticSearch(query, knowledgeBase, 1);
  
  if (results.length === 0) {
    return null;
  }
  
  const bestMatch = results[0];
  const confidence = Math.min(bestMatch.score * 2, 1); // Scale confidence to 0-1
  
  return {
    answer: bestMatch.item.answer,
    confidence,
    source: bestMatch.item.question
  };
}
