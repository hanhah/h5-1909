// 添加学员信息

function AddStu (){
    this.addName = document.querySelector('.addName');
    this.addSex = document.querySelector('.addSex');
    this.addAge = document.querySelector('.addAge');
    this.addPhone = document.querySelector('.addPhone');
    this.addBtn = document.querySelector('.addBtn');
    this.init();
}

AddStu.prototype = {
    init: function(){
        this.eventBind();
    },

    // 前端传数据到php中
    getDate: function(){
        var _this = this;
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/add.php',
            data: {
                name: _this.addName.value,
                sex: _this.addSex.value,
                age: _this.addAge.value,
                phone: _this.addPhone.value
            }
        }).then(function(data){
            // 如果添加成功，则弹窗 
            // ('state' => '1', 'info' => '添加成功')
            // ('state' => '0', 'info' => '添加失败')
            if(data.state == '1'){
                alert(data.info);
                new DataRender();
            }else{
                alert(data.info);
            }
            console.log(data);
        }).catch(function(info){
            console.log(info);
        })
    },

    // 绑定点击事件
    eventBind: function(){
        this.addBtn.addEventListener('click',this.getDate.bind(this));
    }
}
new AddStu();