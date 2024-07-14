import pool from 'database'
import { RowDataPacket } from 'mysql2'
import { User } from 'types'

const fetchUserByEmail = async (email: string) => {
	const sql = `
    SELECT * FROM users
    WHERE users.email = ?
    `
	const [result] = await pool.query<RowDataPacket[]>(sql, [email])

	if (result.length) {
		return result[0] as User & { password: string }
	} else {
		return null
	}
}

export default fetchUserByEmail
