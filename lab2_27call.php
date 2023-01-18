<html>

<head>
    <title>บันทึกข้อมูลนักศึกษา</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <table border="1" align="center" width="500">
        <tr>
            <?php
            $studentID = $_POST['studentID'];
            $studentname = $_POST['studentname'];
            $pass = $_POST['pass'];
            $sex = $_POST['sex'];
            ?>
            <td colspan="2" align="center">
                <big>ข้อมูลการสมัคร</big>
            </td>
        <tr>
        <tr>
            <td>รหัสนักศึกษา :</td>
            <td><?php echo $studentID; ?></td>
        </tr>
        <td>ชื่อ-นามสกุล :</td>
        <td><?php echo $studentname; ?></td>
        </tr>
        <tr>
            <td>Password :</td>\
            <td><?php echo $pass; ?></td>
        </tr>
        <tr>
            <td>Gender : </td>
            <td><?php if ($sex == 1) {
                    echo " male <br/>";
                } else {
                    echo " female <br/>";
                } ?></td>
        </tr>
        <tr>
             <td>Hobby :</td>
             <td><?php if (!empty($_POST['read'])) {
        echo $_POST['read'] . " ";
        }
        if(isset($_POST['Wacht'])){
        echo $_POST['Wacht'] . " ";
        }
        if (!empty($_POST['sport'])) {
        echo $_POST['sport'] . "";
        }?>
</td> 
        </tr>
        <tr>
         <td>Color you chosse</td>
         <td><?php for ($i = 0; $i < count($_POST["Checkcolor"]); $i++) { if(trim($_POST["Checkcolor"][$i]) !="" ){ echo "Checkcolor $i =" . $_POST["Checkcolor"][$i] . "<br>" ; } } ?></td>
        </tr>
        </tr>
    </table>
    <br><a href="lab2_27.php">Back</a>
</body>

</html>