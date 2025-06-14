
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DemoRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  employees: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const demoData: DemoRequest = await req.json();
    console.log("Processing demo request for:", demoData.email);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Simplex HR <onboarding@resend.dev>",
      to: [demoData.email],
      subject: "Demo Request Confirmed - Simplex HR Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">Demo Request Confirmed</h2>
          
          <p>Dear ${demoData.name},</p>
          
          <p>Thank you for requesting a demo of Simplex HR Solutions! We're excited to show you how our platform can streamline your workforce management.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Demo Request Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${demoData.name}</li>
              <li><strong>Company:</strong> ${demoData.company}</li>
              <li><strong>Email:</strong> ${demoData.email}</li>
              <li><strong>Phone:</strong> ${demoData.phone || 'Not provided'}</li>
              <li><strong>Employees:</strong> ${demoData.employees || 'Not specified'}</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2d5a3d; margin-top: 0;">What happens next?</h4>
            <p style="margin-bottom: 0;">Our team will review your request and contact you within 24 hours to schedule your personalized 30-minute demo session.</p>
          </div>
          
          <p>During your demo, you'll see:</p>
          <ul>
            <li>Personalized system walkthrough</li>
            <li>Custom feature demonstration</li>
            <li>Integration possibilities review</li>
            <li>Pricing and implementation discussion</li>
            <li>Q&A with our HR experts</li>
          </ul>
          
          <p>If you have any immediate questions, feel free to reply to this email.</p>
          
          <p>Best regards,<br>
          <strong>The Simplex HR Solutions Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent because you requested a demo at our website. 
            If you didn't make this request, please ignore this email.
          </p>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Simplex HR <onboarding@resend.dev>",
      to: ["helloakshay20@gmail.com"],
      subject: `New Demo Request from ${demoData.name} at ${demoData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">New Demo Request Received</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${demoData.name}</li>
              <li><strong>Email:</strong> ${demoData.email}</li>
              <li><strong>Company:</strong> ${demoData.company}</li>
              <li><strong>Phone:</strong> ${demoData.phone || 'Not provided'}</li>
              <li><strong>Number of Employees:</strong> ${demoData.employees || 'Not specified'}</li>
            </ul>
          </div>
          
          ${demoData.message ? `
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #856404; margin-top: 0;">Their Message:</h4>
            <p style="margin-bottom: 0;">${demoData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #0c5460; margin-top: 0;">Action Required:</h4>
            <p style="margin-bottom: 0;">Please reach out to ${demoData.name} within 24 hours to schedule their demo session.</p>
          </div>
          
          <p><strong>Requested on:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          
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
        message: "Demo request submitted and emails sent successfully" 
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
    console.error("Error in send-demo-email function:", error);
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
