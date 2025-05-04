import { db } from "@db";
import * as schema from "@shared/schema";

// This file is a placeholder for server-side storage operations
// For this starter kit, we don't need much functionality

export const storage = {
  // User related operations for authentication if needed
  async getUserByUsername(username: string) {
    return db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username),
    });
  },
  
  async insertUser(user: schema.InsertUser) {
    const [newUser] = await db.insert(schema.users).values(user).returning();
    return newUser;
  },
};
