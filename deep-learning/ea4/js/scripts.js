// Author: Maite-Aileen Brandt
// Date: 2021-10-25

function loaded() {
    document.getElementById('container').style.overflow = 'visible';
    document.getElementById('container').style.opacity = '1';
    document.getElementById('container').style.height = 'auto';

    document.getElementById('page-footer').style.overflow = 'visible';
    document.getElementById('page-footer').style.opacity = '1';

    document.getElementById('nav-hidden').style.overflow = 'visible';
    document.getElementById('nav-hidden').style.opacity = '1';

    document.getElementById('loader-website-loading').style.opacity = '0';
    document.body.style.pointerEvents = 'auto';

    setTimeout(() => {
        document.getElementById('loader-website-loading').style.display = 'none';
    }, 500);
}


async function load() {
    model = await tf.loadLayersModel(
        './model/model.json',
    );
    return model;
}


async function predict(text) {
    text = text.map((text1) => text1.toLowerCase());
    textNumber = [];

    for (i = 0; i < 5; i++) {
        textNumber[i] = jsonParsed[text[text.length - i - 1]];
    }

    tensor = tf.tensor2d(textNumber, [1, 5]);
    [words] = tf.tidy(() => {
        predcitionback = model.predict(tensor);
        return [predcitionback.dataSync()];
    });

    pred1 = [...words];
    pred1.sort((a, b) => b - a);

    j = 0;
    predictedWords = [];
    anzahlDerVorzuschlagendenWoerter = 5;

    for (i = 0; i < anzahlDerVorzuschlagendenWoerter; i++) {
        do {
            index = words.indexOf(pred1[i + j]);
            predictedWords[i] = (Object.keys(jsonParsed).find((key) => jsonParsed[key] === index));
            j++;
        } while (/\d/.test(predictedWords[i]) == true || predictedWords[i].length <= 1);
    }

    document.getElementById('predicted-words').innerHTML = '';

    for (i = 0; i < anzahlDerVorzuschlagendenWoerter; i++) {
        document.getElementById('predicted-words').innerHTML += '<button class="btn waves-effect waves-light btn-small predicted-word" id="' + predictedWords[i] + '" type="submit" onclick="clickedWord(this.id)">' + predictedWords[i] + '</button > ';
        M.textareaAutoResize($('#textarea-prediction'));
    }
}


function enteredWord() {
    text = document.getElementById('textarea-prediction').value;
    text = text.split(' ').filter(function (i) {
        return i;
    });

    if (text.length >= 5) {
        predict(text);
    }
}


function clickedWord(wort) {
    textfield = document.getElementById('textarea-prediction').value;
    if (textfield.slice(textfield.length - 1) == ' ') {
        document.getElementById('textarea-prediction').value += wort + ' ';
    } else {
        document.getElementById('textarea-prediction').value += ' ' + wort + ' ';
    }
    enteredWord();
}


function setNumberWords(values) {
    anzahlDerVorzuschlagendenWoerter = values;
    text = document.getElementById('textarea-prediction').value;
    text = text.split(' ').filter(function (i) {
        return i;
    });

    if (text.length >= 5) {
        predict(text);
    }
}


noUiSlider.create(document.getElementById('number-words'), {
    start: [5],
    connect: true,
    step: 1,
    orientation: 'horizontal',
    range: {
        'min': [1],
        'max': [100],
    },
    pips: {
        mode: 'range',
        density: 3,
    },
    format: wNumb({
        decimals: 0, thousand: ',',
    }),
});

document.getElementById('number-words').noUiSlider.on('set', function (values) {
    setNumberWords(values);
});

$(document).ready(function () {
    $('.modal').modal();
});

jsonParsed = JSON.parse(json);
model = load();

loaded();
