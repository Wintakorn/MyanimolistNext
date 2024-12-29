import { PrismaClient } from "@prisma/client";

// Singleton pattern for Prisma Client (for development and production)
const prismaClientSingleton = () => {
  return new PrismaClient();
};


declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;


const prisma =
  process.env.NODE_ENV === "production"
    ? prismaClientSingleton()
    : globalThis.prismaGlobal ?? prismaClientSingleton();


if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export default prisma;
