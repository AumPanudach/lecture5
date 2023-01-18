</html>
<html>
<head> <meta charset="UTF-8"> 
    <title> การสร้างฟอร์ม </title></head>
    <link rel="stylesheet" href="main.css">
<body>
    <div class="register">
<h2>แบบฟอร์มบันทึกข้อมูลนักศึกษา</h2>
<section class="section_form">
    <div class="container">
<form action="lab2_27call.php" method="post" name="form1" id="form1">
รหัสนักศึกษา : <input name = "studentID" type="text" maxlength="10" /><br /><br/>
ชื่อ-นามสกุลนักศึกษา : <input name = "studentname" type="text" size="40" /><br /><br/>
รหัส่ผ่าน : <input name = "pass" type="password" maxlength="6" size="6" /><br /><br/>
เพศ : <input type="radio" name="sex" value="1" /> ชาย
<input type="radio" name="sex" value="2" /> หญิง <br /><br/>
งานอดิเรก :
<input name = "read" type="checkbox" value="Reading" /> อ่านหนังสือ
<input name = "WachtTV" type="checkbox" value="Watching" /> ดูโทรทัศน์
<input name = "sport" type="checkbox" value="Sport" /> เล่นกีฬา<br />
<div class="color_serection">
Please select color.<br>
<input type="checkbox" name="Checkcolor[]" value="Red">Red.<br>
<input type="checkbox" name="Checkcolor[]" value="Green">Green.<br>
<input type="checkbox" name="Checkcolor[]" value="Blue">Blue.<br>
<input type="checkbox" name="Checkcolor[]" value="Orange">Orange.<br>
<input type="checkbox" name="Checkcolor[]" value="Black">Black.<br>
</div>
อัพโหลดข้อมูล : <input type="file" /> <br />
<div class="bottom">
<input type="submit" name="OK" value="submit" />
<input type="reset" name="No" />
</div>
</form>
</div></section></div>
</body>
</html>