import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT!

const SERVER_URL = process.env.SERVER_URL!
const CLIENT_URL = process.env.CLIENT_URL!

const DATABASE_HOST = process.env.DATABASE_HOST!
const DATABASE_USER = process.env.DATABASE_USER!
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD!
const DATABASE_NAME = process.env.DATABASE_NAME!

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const JWT_SECRET = process.env.JWT_SECRET!

export {
    PORT,
    SERVER_URL,
    CLIENT_URL,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USER,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    JWT_SECRET
}
