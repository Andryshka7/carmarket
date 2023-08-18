import pool from 'database'
import { User } from 'types'

const storeRefreshToken = async (token: string, userId: number) => {
    const sql = `
    INSERT INTO refreshTokens
    (token, user)
    VALUES (?, ?)
    `
    await pool.query(sql, [token, userId])
}

export default storeRefreshToken
