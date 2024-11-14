import express from 'express'
import sequelizeConnection from './database';
import taskRoutes from './routes/taskRoutes';

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(taskRoutes)

sequelizeConnection.sync({force: true}).then(()=>{
    console.log('Database created')
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
})