$(document).ready(function () {
  let city = $("#city").val();
  $("#city").on("keyup change", function () {
    $("#dest").load("city.php", "city=" + city);
  });
});
