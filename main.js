let endpoint = "https://link-shortner-tnvs.onrender.com/";
function getrandom() {
  let random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return random_string;
}
function geturl() {
  let url = document?.getElementById("urlinput")?.value || "";
  let protocol_ok =
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("ftp://");
  let newurl;
  if (!protocol_ok) {
    newurl = "https://" + url;
    return newurl;
  } else {
    return url;
  }
}
function genhash() {
  if (window.location.hash == "") {
    window.location.hash = getrandom();
  }
}
function shorturl() {
  let longurl = geturl();
  genhash();
  send_request(longurl);
}
function send_request(url) {
  this.url = url;
  $.ajax({
    url: endpoint + "/" + window.location.hash,
    type: "POST",
    data: JSON.stringify(this.url),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

let hashh = window.location.hash;
let data;
if (window.location.hash != "") {
  $.getJSON(endpoint + "/" + hashh, function (data) {
    console.log(data);
    data = data["result"];
  });
  if (data != null) {
    window.location.href = data;
  }
}
