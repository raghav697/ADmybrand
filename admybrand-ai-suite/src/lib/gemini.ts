import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface AIAnalysis {
  leadScore: number;
  category: string;
  priority: "High" | "Medium" | "Low";
  suggestedResponse: string;
  nextSteps: string[];
  estimatedValue: string;
}

export async function analyzeContactForm(data: ContactFormData): Promise<AIAnalysis> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Analyze this contact form submission for a B2B SaaS marketing AI platform called "ADmyBRAND AI Suite":

    Contact Details:
    - Name: ${data.name}
    - Email: ${data.email}
    - Company: ${data.company}
    - Phone: ${data.phone || "Not provided"}
    - Subject: ${data.subject}
    - Message: ${data.message}

    Please provide a JSON analysis with:
    1. leadScore (0-100): Quality of this lead based on company size indicators, message urgency, and business context
    2. category: Primary interest category (e.g., "Demo Request", "Enterprise Inquiry", "Technical Support", "Partnership", "General Interest")
    3. priority: High/Medium/Low based on potential value and urgency
    4. suggestedResponse: A personalized, professional response email template
    5. nextSteps: Array of recommended actions for the sales team
    6. estimatedValue: Potential deal size category ("Enterprise $10k+", "Mid-Market $1k-10k", "SMB <$1k")

    Respond only with valid JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    const analysis = JSON.parse(text);
    
    return analysis;
  } catch (error) {
    console.error("Error analyzing contact form with Gemini:", error);
    
    // Return fallback analysis
    return {
      leadScore: 50,
      category: "General Interest",
      priority: "Medium",
      suggestedResponse: `Dear ${data.name},\n\nThank you for your interest in ADmyBRAND AI Suite. We've received your inquiry and our team will review it shortly.\n\nBest regards,\nADmyBRAND Team`,
      nextSteps: [
        "Send welcome email",
        "Schedule follow-up call",
        "Provide relevant case studies"
      ],
      estimatedValue: "Mid-Market $1k-10k"
    };
  }
}

export async function generatePersonalizedDemo(data: ContactFormData): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Generate a personalized demo script for ADmyBRAND AI Suite based on this prospect's information:

    Company: ${data.company}
    Industry context from message: ${data.message}
    
    Create a 5-minute demo outline that highlights:
    1. Features most relevant to their industry/use case
    2. Specific ROI examples for similar companies
    3. Integration possibilities mentioned in their message
    4. Custom pricing tier recommendation
    
    Format as a structured demo script with talking points.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return response.text();
  } catch (error) {
    console.error("Error generating demo script:", error);
    return "Standard demo script would be provided here.";
  }
}

export async function generateMarketingInsights(): Promise<string[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Generate 5 current AI marketing insights for 2024 that would be valuable for B2B SaaS companies. 
    Focus on trends like:
    - Personalization at scale
    - Predictive analytics
    - Customer journey optimization
    - Content automation
    - Attribution modeling
    
    Return as an array of concise, actionable insights.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const insights = JSON.parse(response.text());
    
    return insights;
  } catch (error) {
    console.error("Error generating insights:", error);
    return [
      "AI-powered personalization can increase conversion rates by up to 19%",
      "Predictive analytics helps identify high-value leads 3x faster",
      "Automated content generation reduces marketing workload by 40%",
      "Multi-touch attribution provides clearer ROI visibility",
      "Real-time optimization improves campaign performance by 25%"
    ];
  }
}