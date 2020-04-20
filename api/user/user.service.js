const pool = require ("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO utilisateur (prenom, nom, sexe, email, password, tel)VALUES(?, ?, ?, ?, ?, ?)` 
            [
                data.firstName, 
                data.lastName, 
                data.gender, 
                data.email, 
                data.password, 
                data.tel
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                    return callBack(null, results);
            
        });
    },
    getAllUsers: (callBack) => {
        pool.query(`select id, prenom, nom, sexe, email, password, tel from utilisateur`, [], (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
        })
},
    getUserById: (id, callBack) => { 
        pool.query(`select id, prenom, nom, sexe, email, password, tel from utilisateur where id = ?` , [id], (error, results, fields) => {
            if(error){
                return callBack(error);
        }
            return callBack(null, results[0]);
        });
},
    getUserByEmail: (email, callBack) => {
        pool.query(
            `select id, prenom, nom ,sexe, email, password, tel from utilisateur where email = ?` , 
            [email], 
            (error, results, fields) =>  {
                if(error){
                    return callBack(error);
                } 
                return callBack(null, results)
            }
        );
    },
    updateUsers: (data, callBack) => {
        pool.query(`update utilisateur set prenom = ?, nom = ?, sexe = ?, email = ?, password = ?, tel= ? where id = ?`, 
        [    data.firstName, 
            data.lastName, 
            data.gender, 
            data.email, 
            data.password, 
            data.tel,
            data.id,
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
        )
    }
};
