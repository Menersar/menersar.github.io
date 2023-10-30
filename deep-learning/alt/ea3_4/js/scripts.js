function loaded() {
    // document.getElementById("container").style.height = "auto";
    document.getElementById("container-game").style.overflow = "visible";
    document.getElementById("container-game").style.opacity = "1";

    document.getElementById("page-footer").style.overflow = "visible";
    document.getElementById("page-footer").style.opacity = "1";


    document.getElementById("nav-hidden").style.overflow = "visible";
    document.getElementById("nav-hidden").style.opacity = "1";


    document.getElementById("loader-website-loading").style.opacity = "0";
    document.body.style.pointerEvents = "auto";

    setTimeout(() => {
        document.getElementById("loader-website-loading").style.display = "none";
    }, 500);
}


$(document).ready(function () {
    $('.modal').modal();
});


function myFunction() {
    $('#modal').modal();
    $('#modal').modal('open');
}


createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "Build/5.data.unityweb",
    frameworkUrl: "Build/5.framework.js.unityweb",
    codeUrl: "Build/5.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Maite",
    productName: "LifSimulationURP",
    productVersion: "0.1",
}).then(onSuccess);

function onSuccess(unityInstance) { loaded() }