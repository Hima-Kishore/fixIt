import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connection = process.env.DATABASE_URL;

if(!connection) {
    throw new Error("DATABASE_URL environment variable is not set.");
}

const adapter = new PrismaPg({connectionString: connection});

export const prisma = new PrismaClient({ adapter });