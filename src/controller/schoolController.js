import db from '../config/school-management-database-config.js';
import { getDistance } from '../helper/getDistance.js';

export const addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({message: 'All fields are required'});
    }

    let schoolLatitude = parseFloat(latitude);
    let schoolLongitude = parseFloat(longitude);

    if (isNaN(schoolLatitude) || isNaN(schoolLongitude)) {
        return res.send(400).json({
            message: 'Latitude and Longitude must be valid numbers.'
        })
    }

    try {
        const [ result ] = await db.execute(
            'INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, schoolLatitude, schoolLongitude]
        );

        res.status(201).json({
            message: 'School added successfully',
            school: {
                id: result.insertId,
                name,
                address,
                latitude,
                longitude
            }
        })
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`
        });
    }
}


export const listSchools = async (req, res) => {

    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);

    if (!latitude || !longitude) {
        return res.status(400).json({
            message: 'Latitude and longitude are required.'
        })
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.send(400).json({
            message: 'Latitude and Longitude must be valid numbers.'
        })
    }

    try {
        const [ schools ] = await db.execute(
            'SELECT * FROM school'
        );

        const sortedSchools = schools.map(school => ({
            ...school,
            distance: getDistance(latitude, longitude, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`
        });
    }
}