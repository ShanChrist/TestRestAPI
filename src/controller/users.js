const UserModels = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModels.getAllUsers();
    
        res.json({
            message: 'Get all user succes',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create Success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log('id user: ', id);
    res.json({
        message: 'Update Success',
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    console.log('id user: ', id);
    res.json({
        message: 'Delete Success',
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}