
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Galaxy = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    alignment: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Galaxy
