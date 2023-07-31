import pool from 'database'
import { Car } from 'types'

const fetchCars = async () => {
    const sql = `
    SELECT cars.*,
           JSON_OBJECT(
             'id', users.id,
             'name', users.name,
             'surname', users.surname,
             'age', users.age,
             'email', users.email,
             'avatar', users.avatar
           ) AS seller
    FROM cars
    INNER JOIN users ON cars.seller = users.id
  `
    const [rows] = await pool.query(sql)
    return rows
}

const addCar = async ({ model, year, price, power, type, transmission, description, seller }: Car) => {
    const sql = `
    INSERT INTO cars
    (model, year, price, power, type, transmission, description, seller)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    await pool.query(sql, [model, year, price, power, type, transmission, description, seller])
}

const deleteCar = async (id: number) => {
    const sql = `
    DELETE FROM cars 
    WHERE id = ?
    `
    await pool.query(sql, [id])
}

export { fetchCars, addCar, deleteCar }
