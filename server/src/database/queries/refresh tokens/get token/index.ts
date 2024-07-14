import pool from 'database'
import { RowDataPacket } from 'mysql2'

const getRefreshToken = async (userId: number) => {
	const sql = `
    SELECT * FROM refreshTokens
    WHERE user = ?
    `
	const [rows] = await pool.query<RowDataPacket[]>(sql, [userId])

	if (rows.length) {
		return rows[0].token
	} else {
		return null
	}
}

export default getRefreshToken
