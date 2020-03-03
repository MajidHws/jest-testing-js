const axios = require('axios')
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Majid' }
        user['lastName'] = 'Howsawi'
        return user
    },
    equality: (load1, load2) => load1 + load2,
    checkString: (text) => text,
    isContain: (user) => user,
    fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(e => '')
}

module.exports = functions