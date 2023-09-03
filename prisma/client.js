import { PrismaClient } from "@prisma/client";

// check global env if prisma exists if not create a new client
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
