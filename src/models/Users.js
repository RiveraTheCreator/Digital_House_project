const { text } = require('express');
const fs = require('fs');
const User =  {
    fileName: '../data/users.json',
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
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
        let userFound = allUsers.find(oneUser=>oneUser[field] === txt);
        return userFound;
    },
    create:function(userData){
        let allUsers = this.findAll(allUsers,null,' ');
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify())
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
        fs.writeFileSync(this.fileName,JSON.stringify(finalUser,null,' '));
        return true;
    }
    
}

module.exports = User;