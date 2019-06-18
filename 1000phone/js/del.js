
// 删除学员信息

function Del (){
    this.oTbody = document.querySelector('tbody');
    this.id = '';
    this.init();
}

Del.prototype = {
    init: function(){
        this.eventBind();
    },

    // ajax传输数据
    getDate: function(){
        var _this = this;
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/del.php',
            data: {
                id: _this.id
            }
        }).then(function(data){
            if(data.state == '1'){
                alert('删除成功');
                new DataRender();
            }else{
                alert('删除失败')
            }
        }).catch(function(info){
            console.log(info);
        })
    },

    // 获取删除行的id(通过事件代理方式)
    getId: function(e){
        e = e || event;
        var target = e.target || e.srcElement;

        if(target.tagName == 'A' && target.className == 'delBtn'){
            // 获取id
            this.id = target.getAttribute('data-id');
            this.getDate();
        }

    },

    eventBind: function(){
        this.oTbody.addEventListener('click',this.getId.bind(this));
    }
}
new Del();