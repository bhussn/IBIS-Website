/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Env {
  RESEND_API_KEY: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Only accept POST requests
    if (request.method !== "POST") {
      return new Response("IBIS Worker is running!", {
        headers: corsHeaders,
      });
    }

    try {
      const data = (await request.json()) as ContactForm;

      console.log("Received data:", data);

      // Send email through Resend
      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "ibisintegrity@gmail.com",
            subject: data.subject,
            reply_to: data.email,
            text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
            `,
          }),
        }
      );

      const resendData = await resendResponse.json();

      console.log("Resend response:", resendData);

      if (!resendResponse.ok) {
        return Response.json(
          {
            message: "Failed to send email",
            error: resendData,
          },
          {
            status: 500,
            headers: corsHeaders,
          }
        );
      }

      return Response.json(
        {
          message: "Email sent successfully!",
        },
        {
          headers: corsHeaders,
        }
      );

    } catch (error) {
      console.error("Worker error:", error);

      return Response.json(
        {
          message: "Something went wrong.",
        },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }
  },
} satisfies ExportedHandler<Env>;