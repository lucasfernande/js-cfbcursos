import { users } from "./database.js"

let user = {
    getAllUsers: function() {
        return users
    },
    create: function(user) {
        const newUser = {
            name: user.name,
            email: user.email,
            phone: user.phone
        }

        users.push(newUser)
    },
    delete: function(user) {
        users.splice(users.indexOf(user), 1)
    }
}

export default user