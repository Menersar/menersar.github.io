const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

const dropzone = document.getElementById("dropzone");
const dropzoneText = document.getElementById("dropzone-text");
const errorCard = document.getElementById("error-card");
const gallery = document.getElementById("gallery");
const image = document.getElementById("image-visible");
const imageCard = document.getElementById("image-card");
const imageHidden = document.getElementById("image-hidden");
const inputField = document.getElementById("input-field");
const loaderFileProcessing = document.getElementById("loader-file-processing");
const resultzoneCard = document.getElementById("resultzone-card");
const uploadAndExampleForm = document.getElementById("upload-and-example-form");

var chart;

canvas = document.getElementById("chart");
ctx = canvas.getContext("2d");


$(document).ready(function () {
    $('ul.tabs').tabs();
});


function modelLoaded() {
    document.getElementById("container").style.height = "auto";
    document.getElementById("container").style.overflow = "visible";
    document.getElementById("container").style.opacity = "1";
    document.getElementById("loader-website-loading").style.opacity = "0";
    document.body.style.pointerEvents = "auto";

    setTimeout(() => {
        document.getElementById("loader-website-loading").style.display = "none";
    }, 500);
}


async function getResults() {

    const results = await classifier.classify(imageHidden, classificationFinished());

    if (chart)
        chart.destroy();

    var labels = [];

    for (var i = 0; i <= 2; i++) {
        labels[i] = results[i].label.split(', ');
        labels[i].push("(" + Math.round(results[i].confidence * 100) + " %)");
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [labels[0], labels[1], labels[2]],
            datasets: [
                {
                    label: 'Confidence in %',
                    data: [results[0].confidence.toFixed(2) * 100, results[1].confidence.toFixed(2) * 100, results[2].confidence.toFixed(2) * 100],
                    backgroundColor: [
                        '#26A69A',
                    ],
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    onClick: null,
                    display: true,
                },
                tooltip: { enabled: false },
            }
        }
    });

}


function showErrorMessage(errorMessage) {

    document.body.style.pointerEvents = "auto";

    setTimeout(() => {
        imageCard.style.display = "none";
        resultzoneCard.style.display = "none";
    }, 250);

    document.getElementById("error-message").innerHTML = errorMessage;
    errorCard.style.display = "block";
    loaderFileProcessing.style.display = "none";
    uploadAndExampleForm.style.removeProperty("opacity");

    setTimeout(() => {
        errorCard.style.opacity = "1";
    }, 100);

}


function removeErrorMessage() {

    errorCard.style.opacity = "0";
    setTimeout(() => {
        errorCard.style.display = "none";
    }, 500);

}


function hideResults() {

    imageCard.style.removeProperty("opacity");
    resultzoneCard.style.removeProperty("opacity");

}


function classificationFinished() {

    image.src = imageHidden.src;
    image.onload = function () {

        imageCard.style.display = "block";
        resultzoneCard.style.display = "block";

        uploadAndExampleForm.style.opacity = "1";
        loaderFileProcessing.style.display = "none";

        setTimeout(() => {
            imageCard.style.opacity = "1";
            resultzoneCard.style.opacity = "1";
        }, 750);

        setTimeout(() => {
            imageCard.scrollIntoView({ behavior: "smooth" });
            document.body.style.pointerEvents = "auto";

        }, 500);

        document.getElementById('input').value = "";

    }

}


function imageUpload(files) {

    hideResults();

    if (files.length === 0) {
        showErrorMessage("No file selected.")
    }

    else {

        if (files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/webp" || files[0].type === "image/avif") {

            document.body.style.pointerEvents = "none";
            loaderFileProcessing.style.display = "block";
            uploadAndExampleForm.style.opacity = "0.3";

            imageHidden.src = URL.createObjectURL(files[0]);

            imageHidden.onload = function () {
                removeErrorMessage()
                getResults()
            }

            imageHidden.onerror = function () {
                showErrorMessage("Not a valid image file.");
            }

        } else {
            showErrorMessage("Not a supported file type.");
        }
    }

}


function exampleImageChosen(pictureURL) {

    inputField.value = "";
    inputField.classList.remove("valid");

    document.body.style.pointerEvents = "none";
    loaderFileProcessing.style.display = "block";
    uploadAndExampleForm.style.opacity = "0.3";

    hideResults();
    removeErrorMessage();

    fetch(pictureURL)
        .then(res => res.blob())
        .then(blob => {
            let objectURL = URL.createObjectURL(blob);
            imageHidden.src = objectURL;
            imageHidden.onload = function () {
                getResults()
            }
        });

}


dropzone.addEventListener("dragover", (event) => {

    event.preventDefault();
    dropzone.classList.add("active");
    dropzoneText.textContent = "Release Image to Classify";

});


dropzone.addEventListener("dragleave", () => {

    dropzone.classList.remove("active");
    dropzoneText.textContent = "Drag & Drop Image to Classify";

});


dropzone.addEventListener("drop", (event) => {

    event.preventDefault();
    files = event.dataTransfer.files;

    if (files.length === 0) {
        showErrorMessage("No file selected.")
    } else {
        inputField.value = files[0].name;
        imageUpload(files);
    }

    dropzone.classList.remove("active");
    dropzoneText.textContent = "Drag & Drop Image to Classify";

});
