var xmlhttp = new XMLHttpRequest();
var url = "request/info.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        parsFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function parsFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<div class="info"><a href="' + arr[i].url + '" class="main-link">' + arr[i].main + '</a><span class="duration">' + arr[i].dur + '</span><a href="' + arr[i].moreUrl + '" class="more-link">' + arr[i].more + '</a></div>';
    }
    document.getElementById("tours").innerHTML = out;
}
