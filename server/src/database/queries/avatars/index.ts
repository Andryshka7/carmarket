import pool from 'database'

const createAvatar = async (name: string, userId: number) => {
    const sql = `
    INSERT INTO avatars
    (name, user)
    VALUES (?, ?)
    `
    await pool.query(sql, [name, userId])
}

const deleteAvatar = async (id: number) => {
    const sql = `
    DELETE FROM avatars
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { createAvatar, deleteAvatar }
