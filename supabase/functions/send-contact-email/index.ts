
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();
    console.log("Processing contact request from:", contactData.email);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Simplex HR <onboarding@resend.dev>",
      to: [contactData.email],
      subject: "We received your message - Simplex HR Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">Message Received</h2>
          
          <p>Dear ${contactData.name},</p>
          
          <p>Thank you for reaching out to Simplex HR Solutions! We have successfully received your message and appreciate you taking the time to contact us.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Subject:</strong> ${contactData.subject}</li>
              <li><strong>From:</strong> ${contactData.name} (${contactData.email})</li>
              <li><strong>Sent:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2d5a3d; margin-top: 0;">What happens next?</h4>
            <p style="margin-bottom: 0;">Our team will review your message and respond within 24 hours during business days. We're committed to providing you with the best possible support.</p>
          </div>
          
          <p>If you have any urgent questions or need immediate assistance, please don't hesitate to call us at +1 (555) 123-4567.</p>
          
          <p>Best regards,<br>
          <strong>The Simplex HR Solutions Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent because you contacted us through our website. 
            If you didn't send this message, please ignore this email.
          </p>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Simplex HR <onboarding@resend.dev>",
      to: ["helloakshay20@gmail.com"],
      subject: `New Contact Message: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">New Contact Message Received</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${contactData.name}</li>
              <li><strong>Email:</strong> ${contactData.email}</li>
              <li><strong>Subject:</strong> ${contactData.subject}</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #856404; margin-top: 0;">Message:</h4>
            <p style="margin-bottom: 0; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #0c5460; margin-top: 0;">Action Required:</h4>
            <p style="margin-bottom: 0;">Please respond to ${contactData.name} at ${contactData.email} within 24 hours.</p>
          </div>
          
          <p><strong>Received on:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          
          <p>Best regards,<br>
          <strong>Simplex HR System</strong></p>
        </div>
      `,
    });

    console.log("User email sent successfully:", userEmailResponse);
    console.log("Admin email sent successfully:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact message submitted and emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
