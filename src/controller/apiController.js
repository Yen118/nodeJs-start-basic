import pool from "../configs/connectDB";

let getAllUsers = async(req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
} 
let createNewUser = async(req, res) => {

    let fristName = req.body.fristName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;


    if(!fristName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing require files'
        })
    }

    await pool.execute('insert into users(fristName, lastName, email, address) values (?, ?, ?, ?)', 
    [fristName, lastName, email, address])
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async(req, res) => {

    let fristName = req.body.fristName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    let id = req.body.id;

    if(!fristName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing require files'
        })
    }

    await pool.execute('update users set fristName = ?, lastName = ?, email = ?, address = ? where id = ?', 
    [fristName, lastName, email, address, id]);



    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async(req, res) => {

    let userId = req.params.id;

    
    if(!userId) {
        return res.status(200).json({
            message: 'missing require files'
        })
    };

    await pool.execute('delete from users where id = ?', [userId]);

    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }