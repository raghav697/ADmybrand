import { NextRequest, NextResponse } from "next/server";
import { analyzeContactForm, type ContactFormData } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Analyze the form data with Gemini AI
    const analysis = await analyzeContactForm(body);

    // In a real application, you would:
    // 1. Save to database
    // 2. Send notification emails
    // 3. Add to CRM system
    // 4. Trigger automated workflows

    console.log("Contact form analysis:", analysis);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      analysis: {
        leadScore: analysis.leadScore,
        priority: analysis.priority,
        category: analysis.category,
      },
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}