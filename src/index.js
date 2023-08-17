import app from './app.js'
import { sequelize } from './database/database.js'
import { Project } from './models/Project.js'
import { Task } from './models/Task.js'

async function main() {
    try {
        await sequelize.sync({force: false}) // Force - elimina las tablas y las vuelve a crear
        await sequelize.authenticate()
        console.log('Conexion a la base correcta')
        app.listen(3000)
        console.log('Servidor ON')
    } catch (error) {
        console.log(error)
        
    }
}

main()

