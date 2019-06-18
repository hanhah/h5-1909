<?php
    header("content-type:text/html;charset=utf8");
    // 连接数据库
    include('common/public.php');

    // 1.接收前端传来的数据
    $name = $_GET['name'];
    $sex = $_GET['sex'];
    $age = $_GET['age'];
    $phone = $_GET['phone'];

    // 2.插入到数据库中
    $sql = "insert into userinfo (name,sex,age,phone) values ('$name','$sex',$age,'$phone')";
    $res = mysqli_query($connect,$sql);

    if($res){
        echo json_encode(array(
            'state' => '1',
            'info' => '添加成功'
        ));
    }else{
        echo json_encode(array(
            'state' => '0',
            'info' => '添加失败'
        ));
    }
?>