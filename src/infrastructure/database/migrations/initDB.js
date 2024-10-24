import pkg from 'pg'; 
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: 'postgres',
    password: DB_PASSWORD,
    port: DB_PORT,
});

async function createDatabaseAndTable() {
    try {
        await pool.query(`CREATE DATABASE "${DB_DATABASE}"`);

        console.log(`Banco de dados "${DB_DATABASE}" criado com sucesso.`);
    } catch (err) {
        if (err.code === '42P04') {
            console.log(`Banco de dados "${DB_DATABASE}" já existe.`);
        } else {
            console.error('Erro ao criar o banco de dados:', err);
        }
    }
    const dbPool = new Pool({
        user: DB_USER,
        host: DB_HOST,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        port: DB_PORT,
    });

    try {
        await dbPool.query(`
            CREATE TABLE IF NOT EXISTS produto (
                id SERIAL PRIMARY KEY,
                Descricao VARCHAR(255),
                Preco NUMERIC(10, 2),
                Estoque INTEGER,
                Data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('Tabela "produto" criada com sucesso.');
    } catch (err) {
        console.error('Erro ao criar a tabela:', err);
    } finally {
        await dbPool.end();
    }

    await pool.end(); 
}

createDatabaseAndTable();
