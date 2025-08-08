import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBroadcasterSignupSchema, insertFeedbackSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendBroadcasterSignupNotification, sendFeedbackNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Broadcaster signup endpoint
  app.post("/api/broadcaster-signup", async (req, res) => {
    try {
      const data = insertBroadcasterSignupSchema.parse(req.body);
      const signup = await storage.createBroadcasterSignup(data);
      
      // Send email notification
      try {
        await sendBroadcasterSignupNotification(signup);
        console.log('Broadcaster signup email sent successfully');
      } catch (emailError) {
        console.error('Failed to send broadcaster signup email:', emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, id: signup.id });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to submit broadcaster signup" });
      }
    }
  });

  // Feedback submission endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const data = insertFeedbackSubmissionSchema.parse(req.body);
      const feedback = await storage.createFeedbackSubmission(data);
      
      // Send email notification
      try {
        await sendFeedbackNotification(feedback);
        console.log('Feedback email sent successfully');
      } catch (emailError) {
        console.error('Failed to send feedback email:', emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, id: feedback.id });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to submit feedback" });
      }
    }
  });

  // Get broadcaster signups (admin endpoint)
  app.get("/api/broadcaster-signups", async (req, res) => {
    try {
      const signups = await storage.getBroadcasterSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch broadcaster signups" });
    }
  });

  // Get feedback submissions (admin endpoint)
  app.get("/api/feedback-submissions", async (req, res) => {
    try {
      const submissions = await storage.getFeedbackSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch feedback submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
