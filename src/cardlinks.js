function externalLink(clazz, text, makeUrl) {
    var stripSquares = /\[.*?\]/g;
    var stripSpace = /\s+/g;
    var stripCurlyBraces = /\{.*?\}/g;
    var elems = document.getElementsByClassName(clazz);
    for (var i = 0; i < elems.length; i++) {
        var strippedText = elems[i].textContent.replace(stripSquares, "");
        strippedText = strippedText.replace(stripSpace, "");
        strippedText = strippedText.replace(stripCurlyBraces, "");

        var link = makeUrl(strippedText);
        elems[0].innerHTML = "<a href='" + link + "'>" + text + "</a>";
    }
}

externalLink("ichi", "ichi.moe", function (strippedText) {
    return "https://ichi.moe/cl/qr/?q=" + encodeURIComponent(strippedText) + "&r=htr";
});
externalLink("deepl", "deepl", function (strippedText) {
    return "https://www.deepl.com/translator#ja/en/" + encodeURIComponent(strippedText);
});
externalLink("jisho", "jisho", function (strippedText) {
    return "https://jisho.org/search/" + encodeURIComponent(strippedText);
});
externalLink("google", "google", function (strippedText) {
    return "https://translate.google.com/?sl=auto&tl=en&text=" + encodeURIComponent(strippedText) + "&op=translate";
});
externalLink("immersionkit", "immersionkit", function (strippedText) {
    return "https://www.immersionkit.com/dictionary?keyword=" + encodeURIComponent(strippedText);
});
externalLink("sentencesearch", "sentencesearch", function (strippedText) {
    return "https://sentencesearch.neocities.org/#" + encodeURIComponent(strippedText);
});
