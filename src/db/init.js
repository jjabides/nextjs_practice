import 'server-only'
import mongoose from 'mongoose'

export async function initDatabase() {
    const conection = await mongoose.connect(process.env.DATABASE_URL)
    return conection
}
