import pool from 'database'
import { ResultSetHeader } from 'mysql2'

interface WithCredentials {
    username: string
    email: string
    avatar: string
    password: string
    google_id?: never
}

interface WithGoogleId {
    username: string
    email: string
    avatar: string
    password?: never
    google_id: string
}

const createUser = async ({
    username,
    email,
    avatar,
    password,
    google_id
}: WithCredentials | WithGoogleId) => {
    const sql = `
        INSERT INTO users
        (username, email, avatar, password, google_id)
        VALUES (?, ?, ?, ?, ?)
    `
    const [result] = await pool.query(sql, [username, email, avatar, password, google_id])

    return (result as ResultSetHeader).insertId
}

export default createUser
