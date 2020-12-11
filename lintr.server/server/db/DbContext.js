import mongoose from 'mongoose'
import CardSchema from '../models/Card'
import ProfileSchema from '../models/Profile'

class DbContext {
  Card = mongoose.model('Card', CardSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
