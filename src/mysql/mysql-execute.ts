import { connection } from './mysql-config';

export async function executeQuery(sql: string, params?: any[]): Promise<any> {
   return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, results) => {
         if (error) {
            reject(error);
         } else {
            resolve(results);
         }
      });
   });
}

// Execute queries
// executeQuery(query.createTable)
//    .then((results) => console.log('Table creation result', results))
//    .catch((error) => console.error('Table creation error', error));
