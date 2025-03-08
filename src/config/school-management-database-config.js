import mysql from 'mysql2/promise';
import { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } from './env.js';

const connection =  mysql.createPool({
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    connectionLimit: 10,
    waitForConnections: true,
    enableKeepAlive: true,
    idleTimeout: 30000,
    connectTimeout: 10000,
    ssl: {
        rejectUnauthorized: true
    }
});

export default connection;