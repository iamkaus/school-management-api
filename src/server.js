import { PORT } from './config/env.js';
import app from './app.js';
import { createSchoolTable } from './models/school-management-model.js';

const startServer = async () => {
    try {
        await createSchoolTable();
        console.log('School table created successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on port: http://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
startServer();