// 登录注册切换

function UserIndex(){
    this.oBox = document.querySelector('.box');
    this.init();
}


UserIndex.prototype = {
    init : function(){
        this.changeRender();
    },

    changeRender : function(flag){
        // 切换登录注册
        if(!flag){
            new Register();
        }else{
            new Login();
        }
    }
}
new UserIndex();