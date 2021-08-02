
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Moon = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String, default: 'No Description Needed' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Moon
