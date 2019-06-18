<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');

    //接收前端传来的数据
    $id = $_GET['id'];

    $sql = "select * from userinfo where id = $id";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode($arr);
    }
?>