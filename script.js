function urlParamGet() {
    let url = new URL(window.location.href);

    let urlParams = url.searchParams;
    link = urlParams.get("link");
    return link;
}
function transferToYoutube() {
    videoURL = urlParamGet().replace("/shorts/", "/watch?v=");
    window.location.replace(videoURL.toString());
}

window.onload = () => {
    if (urlParamGet() !== null) {
        transferToYoutube();
    }
};
