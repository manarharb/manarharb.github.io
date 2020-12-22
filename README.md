<!DOCTYPE html>
<html lang=en>

<head>
<title > Manar & Yara </title>
<link rel="stylesheet" href ="style.css">
<link href="contactme.html" rel="import">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <h1 title="11924470" onclick="name()">
        Manar Eyad Harb
    </h1>
    <h1 title="11924207" onclick="name()">
        Yara Mohammad Sholi
    </h1>

    <br>
    <hr class="line" />
     <img src="photo1.jpeg" width="auto" height="auto">
    <hr class="line"/>

    <h2 class="hh"> -  Manar Education :</h2>
   
    <p class="p1" title="Education"  id="p1">
        
            studied elementary & middle in UAE <br>
            * elementary at Palestine school<br>
            * middle at AL Khalil school .<br>
            And now the university in Palestine <br>
            * at Al-Najah National University.<br>
            <br>
        
    </p>
    <h2 class="hh"> - Yara Education :</h2>
    <p class="p1" title="Education" id="p2" >

    studied elementary & middle in Asira AL Shamalia <br>
    * elementary at Asira AL Shamalia For Girls school <br>
    * middle at Jawahar Lal Nehru High school .<br>
    And now the university in Nablus <br>
    * at Al-Najah National University.<br>
    
</b>
    </p><br />
    <hr class="line" />

    <br />
    <p class="p1" title="student "><br />
        No work Experiences .<br>
        <br />
    </p><br>
    <hr>


        <h2 class="hobbies">
            - Hobbies:
        </h2>
    <div class="manar">
        <h3>  Manar Hobbies : </h3>
        <ol type="1">
            <li>drow.</li>
            <li>playing music.</li>
            <li>horse riding.</li>
        </ol>
    </div>

    <div class="yara">
        <h3>  Yara Hobbies : </h3>
        <ol type="1">
            <li>Reading.</li>
            <li> Playing video games. </li>
        </ol>
    </div>

    <hr class="hr"> <br>


    <a class="a1" href=" https://www.facebook.com/profile.php?id=100008553314628 ">
        Manar FACEBOOK linked
    </a>
    <a class="a2" href="https://www.facebook.com/yara.sholi">
        Yara FACEBOOK linked
    </a><br>
    <button type='button' class="B" onclick="myFunction()" >Print My CV</button>
    <button type="button" class="A"><a href="contactme.html" rel="import"> contact me </a></button>

<script>
    function myFunction() 
    {
        window.print();
    }
    function name()
    {
     alert("Welcome, please let me know if you have any questions");
    }

    document.getElementById("p1").onmouseover = function() {mouseOver()};
    document.getElementById("p2").onmouseover = function() {mouseOver1()};
    document.getElementById("p1").onmouseout = function() {mouseOut()};
    document.getElementById("p2").onmouseout = function() {mouseOut1()};


function mouseOver() {
  document.getElementById("p1").style.color = "red";
}
function mouseOut() {
  document.getElementById("p1").style.color = "black";
}
function mouseOver1() {
  document.getElementById("p2").style.color = "red";
}
function mouseOut1() {
  document.getElementById("p2").style.color = "black";
}


</script>
   
</body>
</html>
