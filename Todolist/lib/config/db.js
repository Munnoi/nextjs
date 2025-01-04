import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://projectsm000:R1MqMZqxK9yRvh1j@cluster0.3ywii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo-app"
  );
  console.log("DB Connected...")
};
