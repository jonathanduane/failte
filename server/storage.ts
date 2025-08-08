import { 
  users, 
  broadcasterSignups, 
  feedbackSubmissions,
  type User, 
  type InsertUser,
  type BroadcasterSignup,
  type InsertBroadcasterSignup,
  type FeedbackSubmission,
  type InsertFeedbackSubmission
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBroadcasterSignup(signup: InsertBroadcasterSignup): Promise<BroadcasterSignup>;
  getBroadcasterSignups(): Promise<BroadcasterSignup[]>;
  createFeedbackSubmission(feedback: InsertFeedbackSubmission): Promise<FeedbackSubmission>;
  getFeedbackSubmissions(): Promise<FeedbackSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private broadcasterSignups: Map<number, BroadcasterSignup>;
  private feedbackSubmissions: Map<number, FeedbackSubmission>;
  private currentUserId: number;
  private currentBroadcasterSignupId: number;
  private currentFeedbackSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.broadcasterSignups = new Map();
    this.feedbackSubmissions = new Map();
    this.currentUserId = 1;
    this.currentBroadcasterSignupId = 1;
    this.currentFeedbackSubmissionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBroadcasterSignup(insertSignup: InsertBroadcasterSignup): Promise<BroadcasterSignup> {
    const id = this.currentBroadcasterSignupId++;
    const signup: BroadcasterSignup = { 
      ...insertSignup, 
      id, 
      createdAt: new Date() 
    };
    this.broadcasterSignups.set(id, signup);
    return signup;
  }

  async getBroadcasterSignups(): Promise<BroadcasterSignup[]> {
    return Array.from(this.broadcasterSignups.values());
  }

  async createFeedbackSubmission(insertFeedback: InsertFeedbackSubmission): Promise<FeedbackSubmission> {
    const id = this.currentFeedbackSubmissionId++;
    const feedback: FeedbackSubmission = { 
      ...insertFeedback, 
      id, 
      createdAt: new Date() 
    };
    this.feedbackSubmissions.set(id, feedback);
    return feedback;
  }

  async getFeedbackSubmissions(): Promise<FeedbackSubmission[]> {
    return Array.from(this.feedbackSubmissions.values());
  }
}

export const storage = new MemStorage();
