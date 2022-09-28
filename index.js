function showhide(divid) {
  var div = document.getElementById(divid);

  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
