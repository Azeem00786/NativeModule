import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('places.js');
export const init =()=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx=>{
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    first_name TEXT NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL UNIQUE,
                    address TEXT NOT NULL UNIQUE,
                    lat REAL NOT NULL UNIQUE,
                    lan REAL NOT NULL UNIQUE    
                    );`,
                    [],
                    ()=>{
                          resolve();
                    },
                    (_,err)=>{
                        reject(err);
                    }
            )
        })
    });
    return promise;
   
}