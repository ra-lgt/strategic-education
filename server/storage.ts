import { contactRequests, type InsertContactRequest, type ContactRequest } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactRequest(contact: InsertContactRequest): Promise<ContactRequest>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(contact: InsertContactRequest): Promise<ContactRequest> {
    const [request] = await db
      .insert(contactRequests)
      .values(contact)
      .returning();
    return request;
  }
}

export const storage = new DatabaseStorage();
