function start() {
  let x = document.getElementById("t1").value;
  let y = document.getElementById("t2").value;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200)
      document.getElementById("ajax").innerHTML = xhttp.responseText;
  };
  xhttp.open("POST", "calc.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  let str = "x=" + x + "&y=" + y;
  xhttp.send(str);
}
