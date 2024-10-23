import pkg from 'pg'; 
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

async function populaDB() {
    const dbPool = new Pool({
        user: DB_USER,
        host: DB_HOST,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        port: DB_PORT,
    });

    try {
        await dbPool.query(`
            INSERT INTO produto (descricao, preco, estoque) VALUES
            ('Produto A', 19.99, 50),
            ('Produto B', 29.99, 30),
            ('Produto C', 9.99, 100),
            ('Produto D', 49.99, 20),
            ('Produto E', 5.99, 200)
        `);

        console.log('5 produtos inseridos com sucesso.');
    } catch (err) {
        console.error('Erro ao inserir os produtos:', err);
    } finally {
        await dbPool.end();
    }
}

populaDB();
