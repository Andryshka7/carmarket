import pool from 'database'
import { ResultSetHeader, RowDataPacket } from 'mysql2'
import { User } from 'types'

const fetchUsers = async () => {
    const sql = `
    SELECT users.*, avatars.name AS avatar FROM users
    LEFT JOIN avatars ON avatars.user = users.id
    `
    const [rows] = await pool.query<RowDataPacket[]>(sql)

    if (rows.length) {
        return rows as User[]
    } else {
        return null
    }
}

const fetchUserByEmail = async (email: string) => {
    const sql = `
    SELECT users.*, avatars.name AS avatar FROM users
    LEFT JOIN avatars ON avatars.user = users.id
    WHERE users.email = ?
    `
    const [result] = await pool.query<RowDataPacket[]>(sql, [email])

    if (result.length) {
        return result[0] as User & { password: string }
    } else {
        return null
    }
}

const createUser = async ({
    username,
    email,
    password
}: Omit<User, 'avatar' | 'id'> & { password: string }) => {
    const sql = `
    INSERT INTO users
    (username, email, password)
    VALUES (?, ?, ?)
    `
    const [result] = await pool.query(sql, [username, email, password])

    return (result as ResultSetHeader).insertId
}

const deleteUser = async (id: number) => {
    const sql = `
    DELETE FROM users
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { fetchUsers, fetchUserByEmail, createUser, deleteUser }
