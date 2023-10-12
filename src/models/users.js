const dbPool = require('../config/database');

const getAllUsers = () => {
    const query = 'select * from users';
    
    return dbPool.execute(query);
}

const createNewUser = (name, email, address) => {
    const query = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)';
    
    return dbPool.execute(query, [name, email, address]);
}

const updateUser = (name, email, address, id) => {
    const query = 'UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?';
    
    return dbPool.execute(query, [name, email, address, id]);
}

const deleteUser = (id) => {
    const query = 'DELETE FROM users where id = ?';
    
    return dbPool.execute(query, [id]);
}



module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,

}