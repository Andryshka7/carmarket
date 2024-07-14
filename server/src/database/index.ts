import {
	DATABASE_NAME as database,
	DATABASE_HOST as host,
	DATABASE_PASSWORD as password,
	DATABASE_USER as user
} from 'config'
import { createPool } from 'mysql2'

const charset = 'utf8'

const config = { host, user, password, database, charset }

const pool = createPool(config).promise()

export default pool
