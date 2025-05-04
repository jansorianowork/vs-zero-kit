import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for vs-zero-kit
  
  // Get version information
  app.get('/api/version', (req, res) => {
    res.json({
      name: 'vs-zero-kit',
      version: '0.1.0',
      description: 'A Storybook starter kit using Vite, TypeScript, and Shadcn UI'
    });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
