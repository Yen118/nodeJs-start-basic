import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
    // let data = []

    // pool.query(
    //     'SELECT * FROM `users`',
    //  function(err, results, fields) {
    //      results.map((row) => {
    //         data.push({
    //             id: row.id,
    //             email: row.email,
    //             address: row.address,
    //             fristName: row.fristName,
    //             lastName: row.lastName
    //         })
    //      });
    //      return res.render('index.ejs', {dataUser: data})
    //  }
    // )

    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', {dataUser: rows})
}

let getDetailPage = async(req, res) => {
    let id = req.params.userId;

  //  console.log('check params: ', req.params)
    let [user] = await pool.execute(`SELECT * FROM users where id = ?`, [id]);

    return res.send(JSON.stringify(user))
}

let createNewUser = async(req, res) => {
 //   console.log('check request', req.body)
    //let {fristName, lastName, email, address} = req.body; (other way)
    let fristName = req.body.fristName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    await pool.execute('insert into users(fristName, lastName, email, address) values (?, ?, ?, ?)', 
    [fristName, lastName, email, address])
    return res.redirect('/')
}

let deleteUser = async(req, res) => {
    let userId = req.body.id;

    await pool.execute('delete from users where id = ?', [userId])
    return res.send(`hello from delete user ${req.body.id}`)
}

let editUser = async(req, res) => {
    let editId = req.params.userId;
    let [editUser] = await pool.execute('Select * from users where id = ?', [editId]);


    return res.render('update.ejs', { dataUser: editUser[0]})
}

let postUpdateUser = async(req, res) => {
    let fristName = req.body.fristName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    let id = req.body.id;

    await pool.execute('update users set fristName = ?, lastName = ?, email = ?, address = ? where id = ?', 
    [fristName, lastName, email, address, id]);

    return res.redirect('/');
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, editUser, postUpdateUser
}