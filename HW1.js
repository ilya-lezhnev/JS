var button1 = document.querySelector("#id1")
button1.onclick = function goToSite() {
    document.location.href = "https://github.com/ilya-lezhnev/JS"
}
var button2 = document.querySelector('#id2')
button2.onclick = function changeBackgroundColor() {
     document.body.style.background = "#228B22" // зелёный
}
