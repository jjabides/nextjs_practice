import 'server-only'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

//Note: Checking if the model already exists helps to prevent an OverwriteModelError issue
export const User = mongoose.models.user ?? mongoose.model('user', userSchema)
