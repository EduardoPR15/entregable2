const usersDB = []
let id = 1

// {
//     id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const findAllUsers = () =>{
    return usersDB
}

const findUsersById =(id) =>{
const filterData = usersDB.find(user => user.id == id)
return filterData

}

const createNewUser= (obj) =>{
    const newUser ={
        id: id++,
        first_name: obj.first_name,
    	last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.date
    } 
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    createNewUser,
    findAllUsers,
    findUsersById
}
