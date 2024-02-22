export const queries = {
   createTable: `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `,
   create: 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
   read: 'SELECT * FROM users WHERE id = ?',
   update: 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
   delete: 'DELETE FROM users WHERE id = ?',
   all: 'SELECT * FROM users',
};