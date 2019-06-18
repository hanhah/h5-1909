
// 将数据库中数据，放在模态框中
function UpdataSelect (){
    this.oTbody = document.querySelector('tbody');
    this.upName = document.querySelector('.upName');
    this.upSex = document.querySelector('.upSex');
    this.upAge = document.querySelector('.upAge');
    this.upPhone = document.querySelector('.upPhone');
    this.id = '';
    this.init();
}

UpdataSelect.prototype = {
    init: function(){
        this.eventBind(); 
    },

    getDate: function(){
        var _this = this;
        // 通过ajax 来获取信息
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/updataSelect.php',
            data: {
                id: _this.id,
            }
        }).then(function(data){
            
            // 把查询到的信息放在模态框中
            console.log(_this.upName.value)
            _this.upName.value = data.name;
            console.log(_this.upName.value)
            // _this.upSex.value = data.sex;
            // _this.upAge.value = data.age;
        }).catch(function(info){
            console.log(info);
        })
    },

    getId: function(e){
        e = e || event;
        var target = e.target || e.srcElement;

        if(target.tagName == 'A' && target.className == 'upBtn'){
            // 获取id
            this.id = target.getAttribute('data-id');
            // console.log(this.id);
            this.getDate();
        }
    },

    eventBind: function(){
        this.oTbody.addEventListener('click',this.getId.bind(this));
    }
}
new UpdataSelect();