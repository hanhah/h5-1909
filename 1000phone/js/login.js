var strForm1 = `
            <form>
                <img src="images/logo.png">
                <div class="form-group">
                    <label for="exampleInputEmail1">用户名</label>
                    <input type="text" class="form-control uname" id="exampleInputEmail1" placeholder="用户名" autocomplete='tel'>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">密码</label>
                    <input type="password" class="form-control upwd" id="exampleInputPassword1" placeholder="密码" autocomplete='tel'>
                </div>
                <button type="button" class="btn btn-primary">登录</button>
            </form>
            `;

// 登录功能

function Login(){
    this.oBox = document.querySelector('.box');
    this.init();
}
Login.prototype = {
    init: function () {
        this.addInfo();
        this.eventBind();
    },

    // 1.渲染页面
    addInfo: function () {
        this.oBox.innerHTML = '';
        this.oBox.innerHTML = strForm1;
    },

    // 2.改变flag值（注册和登录的切换）
    change: function(){
        new UserIndex().changeRender();
    },

    // 3.将前台的用户名和密码数据，利用ajax传给后台php
    getDate: function(){
        var uname = document.querySelector('.uname');
        var upwd = document.querySelector('.upwd');
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/login.php',
            data: {
                uname: uname.value,
                upwd: upwd.value,
            }
        }).then(function(data){
            //('state' => '1', 'info' => '登陆成功');
            //('state' => '0','info' => '密码错误');
            //('state' => '0','info' => '用户名不存在');
            if(data.state == '1'){
                alert(data.info);
                location.href = 'http://localhost/han/day25/1000phone/dataShow.html';
            }else{
                alert(data.info);
            }
        }).catch(function(info){
            console.log(info);
        })  
    },

    // 事件绑定
    eventBind : function(){
        var oBtn = document.querySelector('.btn');
        oBtn.addEventListener('click',this.getDate.bind(this));
    }
}
