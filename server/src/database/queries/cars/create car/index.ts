import pool from 'database'
import { ResultSetHeader } from 'mysql2'
import { Car } from 'types'

const createCar = async (
	{ model, year, price, power, type, transmission, description }: Car,
	user: number
) => {
	const sql = `
    INSERT INTO cars
    (model, year, price, power, type, transmission, description, user)
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
		user
	])

	return (result as ResultSetHeader).insertId
}

export default createCar
