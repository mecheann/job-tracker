import { betterAuth, User } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { initUserBoard } from "../init-user-board";

// const client = new MongoClient(process.env.MONGODB_URI!);
const globalForMongo = global as unknown as { _mongoClient?: MongoClient };

const client = globalForMongo._mongoClient || new MongoClient(process.env.MONGODB_URI!);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user: User) => {
          if (user.id) {
            const result = await initUserBoard(user.id);
            console.log("User board initialized:", result);
          }
        },
      },
    },
  },
});

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};

export const logOut = async () => {
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if (result.success) {
    redirect("/log-in");
  }
};
