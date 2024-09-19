import mongoose, { Document, Schema } from "mongoose";

interface IValue extends Document {
  icon: string;
  title: string;
  description: string;
}

const ValueSchema: Schema = new Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IValue>("Value", ValueSchema);
