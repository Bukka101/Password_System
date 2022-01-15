$(document).ready(function () {
    $("#search").click(function () {
        $("#page-content-wrapper").load("search.html", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert(xhr.status + ": " + xhr.statusText);
        });
    });
});

