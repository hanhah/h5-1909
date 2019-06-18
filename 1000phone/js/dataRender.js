
// 渲染数据到页面中
function DataRender(){
    this.oTbody = document.querySelector('tbody');
    this.init();
}

DataRender.prototype = {
    init: function(){
        this.getDate();
    },

    getDate: function(){
        var _this = this;
        axios({
            method: 'get',
            url: 'http://localhost/han/day25/1000phone/php/dataRender.php',
            data: {}
        }).then(function(data){
            // 循环数据到页面
            var str = "";
            for(var i = 0; i < data.length; i++){
                str +=  
                ` 
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].sex}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].phone}</td>
                    <td>
                        <a href="##" class='upBtn' data-id='${data[i].id}' data-toggle="modal" data-target="#myModalUpdata" data-whatever="@mdo">修改</a>
                        <a href="##" class='delBtn' data-id='${data[i].id}'>删除</a>
                    </td>
                </tr>
                `
            }
            _this.oTbody.innerHTML = str;
        }).catch(function(info){
            console.log(info);
        })
    }
}
new DataRender();