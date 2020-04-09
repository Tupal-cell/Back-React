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
                data.passWord, 
                data.tel
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                    return callBack(null, results);
            
        });
    },
};