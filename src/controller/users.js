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

const createNewUser = async (req, res) => {
    try {
        const { name, email, address } = req.body;
        await UserModels.createNewUser(name, email, address);

        res.json({
            message: 'Create Success',
            data: {
                name,
                email,
                address
            }
        });
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({
            message: 'Error creating new user',
            error: error.message
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, email, address } = req.body;

        await UserModels.updateUser(name, email, address, id)
        res.json({
            message: 'Update Success',
            data: req.body,
        })
    } catch (error) {
        
    }
    
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await UserModels.deleteUser(id);
    
        res.json({
            message: 'Delete Success',
        })
    } catch (error) {
        console.error('Error delete user:', error);
        res.status(500).json({
            message: 'Error delete user',
            error: error.message
        });
    }
   
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}