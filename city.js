function callServer() {
  let xmlHttp = null;
  const dest = document.getElementById("dest");
  dest.innerHTML = "Виконується обробка файлів...";
  if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      dest.innerHTML = xmlHttp.responseText;
    } else {
      console.log("Код помилки: " + xmlHttp.status + " " + xmlHttp.statusText);
    }
  };
  let city = document.getElementById("city").value;
  let url = "city.php?city=" + city;
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
}
