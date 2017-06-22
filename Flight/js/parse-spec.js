var xmlhttpSp = new XMLHttpRequest();
var urlSp = "../request/special-offers.txt";

xmlhttpSp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var spArr = JSON.parse(this.responseText);
        parspecFunction(spArr);
    }
};
xmlhttpSp.open("GET", urlSp, true);
xmlhttpSp.send();

function parspecFunction(arr2) {
    var specDiv = "";
    var s;
    for(s = 0; s < arr2.length; s++) {
        specDiv += '<div class="row spec-off"><div class="col-md-3 img-col"><img src="' + arr2[s].img + '" alt="img"></div><div class="col-md-9 text-col"><h4>' + arr2[s].title + '</h4><p>' + arr2[s].detiles + '</p><span class="price">' + arr2[s].price + '</span><a href="#" class="yellow-btn">Read more</a></div></div>';
    }
    document.getElementById("spec").innerHTML = specDiv;
}