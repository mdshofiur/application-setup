import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
   user: 'admin_user',
   password: '12345',
   database: 'admin_database',
};

export const connection = mysql.createConnection(access);
