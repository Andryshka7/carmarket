import pool from 'database'

const deleteRefreshToken = async (userId: number) => {
	const sql = `
    DELETE FROM refreshTokens
    WHERE user = ?
    `
	await pool.query(sql, [userId])
}

export default deleteRefreshToken
