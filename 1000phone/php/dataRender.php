<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');

    // 拿数据库中的数据
    $sql = "select * from userinfo";
    $res = mysqli_query($connect,$sql);
    $arr = array();
    while($arr1 = mysqli_fetch_assoc($res)){
        array_push($arr,$arr1);
    }

    echo json_encode($arr);
?>