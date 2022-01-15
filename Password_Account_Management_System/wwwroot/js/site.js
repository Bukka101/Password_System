$(document).ready(function () {
    $("#search").click(function () {
        $("#page-content-wrapper").load("ProgramA.txt", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert(xhr.status + ": " + xhr.statusText);
        });
    });
});

function loadDoc() {
const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
                document.getElementById("page-content-wrapper").innerHTML =
                    this.responseText;
        };
    xhttp.open("GET", "ProgramA.txt", true);
        xhttp.send();

    alert(xhttp.response);
}