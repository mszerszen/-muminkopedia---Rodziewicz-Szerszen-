import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    const MONGO_URI = process.env.MONGO_URI as string;

    if(!MONGO_URI) {
        throw new Error("MongoDB URI is missing");
    }

    await mongoose.connect(MONGO_URI);
}

export default connectDB;