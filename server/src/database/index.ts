import { createPool } from 'mysql2'
import {
    DATABASE_HOST as host,
    DATABASE_USER as user,
    DATABASE_PASSWORD as password,
    DATABASE_NAME as database
} from 'config'

const charset = 'utf8'

const config = { host, user, password, database, charset }

const pool = createPool(config).promise()

export default pool
