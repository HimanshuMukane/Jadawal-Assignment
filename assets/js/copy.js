function copy() {
    var copyText = document.getElementById("copyClipboard");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    $('#copied-success').fadeIn(800);
    $('#copied-success').fadeOut(800);
}