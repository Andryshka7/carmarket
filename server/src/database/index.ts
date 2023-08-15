import { createPool } from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.DATABASE_HOST
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME
const charset = 'utf8'

const config = { host, user, password, database, charset }

const pool = createPool(config).promise()

export default pool
