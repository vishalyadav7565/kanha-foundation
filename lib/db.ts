import mongoose from "mongoose"

export async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined")
  }

  if (mongoose.connections[0].readyState) return

  await mongoose.connect(process.env.MONGODB_URI)
}