const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {

   const data = userControllers.findAllUsers()
   res.status(200).json(data)


}

const getUserById =(req,res) => {

    const id = req.params.id

    const data = userControllers.findUsersById(id)

    if(data){
      res.status(200).json(data)  
    }
    else{
        res.status(404).json({
            message: 'invalid ID'
}
        )
    }

    
}

const deleteUserById =(req,res) => {

    const id = req.params.id

    const data = userControllers.deleteUsers(id)


//     if(data){
//       res.status(200).json(data)  
//     }
//     else{
//         res.status(404).json({
//             message: 'invalid ID'
// }
//         )
//     }

    
}


const postNewUser = (req, res) =>{
    const {first_name, last_name, email, password, birthday} = req.body

    if(first_name && last_name && email && password && birthday){
        const data = userControllers.createNewUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
        console.log(data);
    }
    else{
        res.status(400).json({
            message: 'invalid data',
            first_name: 'string',
	        last_name: 'string',
	        email: 'string',
	        password: 'string',
	        birthday: 'YYYY/MM/DD'
        })
    }

}

module.exports={
    postNewUser,
    getAllUsers,
    getUserById,
    deleteUserById
}