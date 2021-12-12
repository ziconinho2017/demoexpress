let users = []
module.exports = class User{
    constructor(id,fname,lname){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    save(){
        this.id = Math.floor(Math.random()*100);
        let index = users.findIndex(user => user.fname === this.fname)
        if(index > -1){
            throw new Error('User with same name is already exist');
        }
        users.push(this);
        return this;
    }
    updateById(){
        let index = users.findIndex(user => user.id == this.id)
        if(index > -1){
            users.splice(index,1,this);
            return this;
        }else{
            throw new Error('User Not Found');
        }
    }
    static deleteById(userId){
        let index = users.findIndex(user => user.id == userId)
        if(index > -1){
            users = users.filter(user => user.id != userId);
            return 1;
        }else{
            throw new Error('User Not Found');
        }
    }
    static fetchAllUser(){
        return users;
    }
    static findUserById(userId){
        let index = users.findIndex(user => user.id == userId)
        if(index > -1){
            return user[index];
        }else{
            throw new Error('User Not Found');
        }
    }
}