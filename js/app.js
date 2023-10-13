window.addEventListener("load", () => {
  let HtmlText = "<div>\n\n</div>";
  let CssText = "<style>\n\n</style>";
  let JsText = "<script>\n\n</script>";
  if (localStorage.getItem("HtmlText"))
    HtmlText = localStorage.getItem("HtmlText");
  if (localStorage.getItem("CssText"))
    CssText = localStorage.getItem("CssText");
  if (localStorage.getItem("JsText")) JsText = localStorage.getItem("JsText");
  document.getElementById("htmlCode").value = HtmlText;
  document.getElementById("cssCode").value = CssText;
  document.getElementById("jsCode").value = JsText;
});

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  localStorage.setItem("HtmlText", htmlCode);
  localStorage.setItem("CssText", cssCode);
  localStorage.setItem("JsText", jsCode);
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
