var strForm = `
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
                <button type="button" class="btn btn-primary">注册</button>
            </form>
            `;

// 注册功能

function Register() {
    this.oBox = document.querySelector('.box');
    this.init();
}

Register.prototype = {
    init: function () {
        this.addInfo();
        this.eventBind();
    },

    // 1.渲染页面
    addInfo: function () {
        this.oBox.innerHTML = '';
        this.oBox.innerHTML = strForm;
    },

    // 2.改变flag值（注册和登录的切换）
    change: function(){
        console.log('切换成登录');
        new UserIndex().changeRender(true);
    },

    // 3.利用ajax向后端拿数据，和用户输入的名称和密码作比对
    getDate: function(){
        var _this = this;
        var uname = document.querySelector('.uname');
        var upwd = document.querySelector('.upwd');
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/register.php',
            data: {
                uname : uname.value,
                upwd : upwd.value,
            }
        }).then(function(data){
            // 前端接收到的后端的返回值
            //('state' => '0', 'info' => '账号已存在，重新注册')
            //('state' => '1', 'info' => '注册成功')
            if(data.state == '0'){
                alert(data.info);
            }else{
                alert(data.info);
                // 注册成功跳转至登录窗口
                _this.change();
            }
        }).catch(function(info){
            console.log(info);
        })
    },

    // 事件绑定
    eventBind: function(){
        var oBtn = document.querySelector('.btn');
        oBtn.addEventListener('click',this.getDate.bind(this));
        
    }
}