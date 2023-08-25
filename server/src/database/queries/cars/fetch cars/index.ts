import pool from 'database'
import { RowDataPacket } from 'mysql2'
import { Car } from 'types'

const fetchCars = async () => {
    const sql = `
    SELECT cars.*,
           JSON_OBJECT(
             'id', users.id,
             'username', users.username,
             'email', users.email,
             'avatar', users.avatar
           ) AS user,
           JSON_ARRAYAGG(  
             JSON_OBJECT(
               'name', images.name,
               'originalName', images.originalName,
               'url', images.url
              )
           ) AS images
    FROM cars
    INNER JOIN users ON cars.user = users.id
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

export default fetchCars
