import  Sequelize  from "sequelize";

//Inicio de la ORM
export const sequelize = new Sequelize(
    'projectsdb', // Nombre de la base de datos
    'postgres', // User
    '7713', // Password
    {
        host: 'localhost',
        dialect : 'postgres' // Postgres o mysql, etc.
    }
);

