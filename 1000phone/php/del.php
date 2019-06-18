<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');

    // 1.接收前端传来的数据
    $id = $_GET['id'];

    // 2.删除此行
    $sql = "delete from userinfo where id = $id";
    $res = mysqli_query($connect,$sql);

    // 3.做判断
    if($res){
        echo json_encode(array(
            'state' => '1',
            'info' => '删除成功'
        ));
    }else{
        echo json_encode(array(
            'state' => '0',
            'info' => '删除失败'
        ));
    }
?>