var user = {
    userName: '',
    password: '',
    isLogin: false,
    login: function () {
        if (this.userName == 'system' && this.password == 'manager') {
            this.isLogin = true
            return true
        } else {
            this.isLogin = false
            return false
        }
    }
}

var manager = {}
manager.__proto__ = user
manager.__proto__.userName = 'system'
manager.__proto__.password = 'manager'
console.log('manager.login (:-', manager.login())