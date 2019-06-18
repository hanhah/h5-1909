
function Updata(){
    this.upName = document.querySelector('.addName');
    this.upSex = document.querySelector('.addSex');
    this.upAge = document.querySelector('.addAge');
    this.upPhone = document.querySelector('.upPhone');
    this.init();
}

Updata.prototype = {
    init: function(){

    },
    getData: function(){
        axios:({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/updata.php',
            data: {
                data.name = 
            }
        })
    },
}