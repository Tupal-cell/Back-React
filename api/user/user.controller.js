const { create, getAllUsers, getUserById, getUserByEmail, updateUsers  } = require("./user.service");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message : "Echec d'inscription",
                })
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    findUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if(err) {
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "User not found",
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    findAllUsers: (req, res) => {
        getAllUsers((err, results) => {
            if(err){
                return;
            }
            return res.json({
                success: 1,
                data: results,
            })
        })
        
    },
    updated: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message : "Echec de modification",
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Modification effectuee",
            });
        });
    },
};
