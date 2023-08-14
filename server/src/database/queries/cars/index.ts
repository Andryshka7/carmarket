import pool from 'database'
import { ResultSetHeader, RowDataPacket } from 'mysql2'
import { Car } from 'types'
import { deleteImage } from '../images'

const fetchCars = async () => {
    const sql = `
    SELECT cars.*,
           JSON_OBJECT(
             'id', users.id,
             'username', users.username,
             'email', users.email
           ) AS seller,
           JSON_ARRAYAGG(images.name) AS images
    FROM cars
    INNER JOIN users ON cars.seller = users.id
    LEFT JOIN images ON images.car = cars.id
    GROUP BY cars.id
  `
    const [rows] = await pool.query<RowDataPacket[]>(sql)

    if (rows.length) {
        return rows as Car[]
    } else {
        return []
    }
}

const createCar = async (
    { model, year, price, power, type, transmission, description }: Car,
    seller: number
) => {
    const sql = `
    INSERT INTO cars
    (model, year, price, power, type, transmission, description, seller)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
    const [result] = await pool.query(sql, [
        model,
        year,
        price,
        power,
        type,
        transmission,
        description,
        seller
    ])

    return (result as ResultSetHeader).insertId
}

const deleteCar = async (id: number) => {
    const sql = `
    DELETE FROM cars 
    WHERE id = ?
    `

    await deleteImage(id)
    await pool.query(sql, [id])
}

export { fetchCars, createCar, deleteCar }
