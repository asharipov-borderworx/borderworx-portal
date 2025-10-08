import { NextRequest, NextResponse } from 'next/server';
import { findBestAnswer } from '@/lib/semanticSearch';
import knowledgeBaseData from '@/data/knowledgeBase.json';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please provide a valid query' },
        { status: 400 }
      );
    }
    
    // Find the best answer using semantic search
    const result = await findBestAnswer(query.trim(), knowledgeBaseData.knowledgeBase);
    
    if (!result) {
      return NextResponse.json({
        answer: "I'm sorry, I couldn't find a relevant answer to your question. Please try rephrasing your question or contact our support team for assistance.",
        confidence: 0,
        source: null,
        suggestions: [
          "What services does Borderworx offer?",
          "How can I track my shipment?",
          "What is Amazon FBA?",
          "How do I contact Borderworx?"
        ]
      });
    }
    
    // Add helpful suggestions if confidence is low
    let suggestions: string[] = [];
    if (result.confidence < 0.5) {
      suggestions = [
        "What services does Borderworx offer?",
        "How can I track my shipment?", 
        "What is Amazon FBA?",
        "How do I contact Borderworx?"
      ];
    }
    
    return NextResponse.json({
      answer: result.answer,
      confidence: result.confidence,
      source: result.source,
      suggestions: suggestions.length > 0 ? suggestions : undefined
    });
    
  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request. Please try again.',
        answer: "I'm sorry, I'm having trouble processing your request right now. Please contact our support team for immediate assistance."
      },
      { status: 500 }
    );
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'Borderworx Chatbot API',
    status: 'active',
    usage: 'Send a POST request with { "query": "your question" }',
    example: {
      query: "What services does Borderworx offer?"
    }
  });
}
