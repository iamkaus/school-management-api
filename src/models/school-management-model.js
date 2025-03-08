import db from '../config/school-management-database-config.js';

export const createSchoolTable = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS school (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
        )`;
    await db.execute(sql);
}