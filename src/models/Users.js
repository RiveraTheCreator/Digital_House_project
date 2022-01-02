const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');


const User =  {
    getName: undefined,
    getData: function(){
        return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    },
    findAll:function(){
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser=>oneUser.id == id);
        return userFound;
    },
    findByField: function(field,txt){
        let allUsers = this.findAll();
        let userFound = allUsers.find((oneUser)=>oneUser[field] === txt);
        return userFound;
    },
    create:function(userData,res){
        let allUsers = this.findAll();
        let userAdd = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            streetNumber: userData.streetNumber,
            postalCode: userData.postalCode,
            country: userData.country,
            password: bcrypt.hashSync(userData.password , 10),
            id: this.generateId(), 
            picture: this.getName ? this.getName : 'profile-default.png',
        }
        allUsers.push(userAdd);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, ' '));
      
    },
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    delete: function(id){
        let allUsers = this.findAll();
        let finalUser = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath,JSON.stringify(finalUser,null,' '));
        return true;
    },
    catchName: function(fileName){
         this.getName = fileName; 
    }
}

module.exports = User;