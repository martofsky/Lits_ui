var User = function(login, pass, age) {
    var password = pass || '';

    this.login = login || '';
   // this.pass = pass || '';
   
    this.age = age || 25;


    //this.signIn = function() {
    //}
            return password;

}

User.prototype.signIn
        // check log & pass
        // add User to active users

// User.prototype = Object.create(Object.prototype) - здесь по умолчанию
    consle.log(this.login + " is authenticates");

var usr = new User(Tom, 12345, 35);
var usr2 = new User();


// usr instanceof User   

/*

var usr = {};
User.call(temp);

*/

var Admin = function(login, pass, age) {
    //this = {}
    User.call(this, login, pass, age); //добавляем из User
    this.bannedUsers = [];
}

Admin.prototype = Object.create(User.prototype); //___proto___ -унаследуется

Admin.prototype.banUser = function(user) {
    if (user) {
        this.bannedUser.push(user);
    }
}
Admin.prototype.signIn = function() {
    consle.log(this.login + " is authenticates as Admin");
}

var adm = new Admin(sara, 1234567, 46);
