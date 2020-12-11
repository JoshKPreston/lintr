import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Card = new Schema(
  {
    codeSnippet: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    creatorId: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Card.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Card
