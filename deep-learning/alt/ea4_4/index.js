neurons = 50;
//learningRate = 0.1
hiddenLayers = 1
batchSize = 32;
//epochs = 40;

vocab_size = 100;

// model = tf.sequential();
var data;


//counter = 400
//counter = 50
//min = 0
//max = 100

async function getData() {

    trainingText = "hund katze maus ratte"
    cleaned = trainingText

    // N
    // xyData = createTrainingData(numberValues, min, max);


    // const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    // const carsData = await carsDataResponse.json();

    //  console.log(carsDataResponse)
    // const cleaned = xyData.map(car => ({
    //     x: car.x,
    //      y: car.y,
    //  })).filter(car => (car.x != null && car.y != null));


    cleaned = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on armour-like back, and if lifted head little could see brown belly, slightly domed divided by arches stiff sections. The bedding was hardly able to cover it seemed ready slide off any moment. His many legs, pitifully thin compared with the size of rest him, waved about helplessly as looked. "What\'s happened me?" thought. It wasn\'t dream. room, proper human room altho'

    return cleaned;
}

// fTrain
async function run() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    //  const values = data.map(d => ({
    //       x: d.x,
    //      y: d.y,
    //  }));

    test = document.getElementById('test')

    //   tfvis.render.scatterplot(document.getElementById('test'),
    //      { values },
    //       { name: 'X v Y' },
    //      {
    //          xLabel: 'X',
    //          yLabel: 'Y',
    //         height: 300
    //      }
    //  );



    // Create the model
    model = createModel();
    //  tfvis.show.modelSummary(document.getElementById('test2'), model);

    // Convert the data to a form we can use for training.



    tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;




}


// async function runwithouttraining() {
// Load and plot the original input data that we are going to train on.
//  const data = await getData();
//    data = JSON.parse(window.sessionStorage.getItem(test, data))
//    testModel2(model, data, tensorData);
//}


// fCreate
function createModel() {
    // Create a sequential model
    model = tf.sequential();

    //  bias = 0


    // Add a single input layer
    //model.add(tf.layers.dense({ inputShape: [1], units: neurons, useBias: true }));

    //   if (weight === "") {
    //      model.add(tf.layers.dense({ inputShape: [1], units: neurons, useBias: true }));
    //   }
    //   else if (weight !== "") {
    //       weights = [
    //           tf.fill([1, neurons], weight),
    //          tf.fill([neurons], bias),
    //      ];

    //  model.add(tf.layers.dense({ inputShape: [1], units: neurons, useBias: true, weights: weights }));

    model.add(tf.layers.embedding({
        inputDim: vocab_size,
        outputDim: 10,
        inputLength: 1
    }));

    model.add(tf.layers.dense({ units: neurons, useBias: true }));

    // }

    // console.log("w: " + model.layers[0].getWeights());

    // N: Hidden layer
    for (i = 1; i <= hiddenLayers; i++) {
        //    if (activation == "none" && weight == "") {
        //model.add(tf.layers.dense({ units: neurons }));
        model.add(tf.layers.dense({ units: neurons }));
    }
    //   else if (activation == "none" && weight !== "") {
    //       weights = [
    //           tf.fill([neurons, neurons], weight),
    //             tf.fill([neurons], bias),
    //        ];

    //model.add(tf.layers.dense({ units: neurons }));
    //       model.add(tf.layers.dense({ units: neurons, weights: weights }));
    //}
    //     else if (activation != "none" && weight == "") {
    //        model.add(tf.layers.dense({ units: neurons, activation: activation }));
    //  model.add(tf.layers.dense({ units: neurons, activation: activation, weights: weights }));
    //   console.log(activation)
    //        }
    //      else if (activation != "none" && weight !== "") {
    //        weights = [
    //            tf.fill([neurons, neurons], weight),
    //             tf.fill([neurons], bias),
    //          ];

    // model.add(tf.layers.dense({ units: neurons, activation: activation, weights: weights }));
    //  model.add(tf.layers.dense({ units: neurons, activation: activation, weights: weights }));
    //   console.log(activation)



    model.add(tf.layers.lstm({ units: neurons }));


    // https://stackoverflow.com/questions/57917450/how-to-get-set-weights-for-a-supervised-model-in-tensorflow-js
    // console.log(model.layers)
    // console.log(model.layers[0].setWeights([tf.zeros([1, 50]), tf.zeros([50])]))

    // Add an output layer
    model.add(tf.layers.dense({ units: 1, useBias: true }));

    return model;
}

// fprepareData 
/**
 * Convert the input data to tensors that we can use for machine
 * learning. We will also do the important best practices of _shuffling_
 * the data and _normalizing_ the data
 * MPG on the y-axis.
 */
function convertToTensor(data) {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {


        // Step 1. Shuffle the data
        // tf.util.shuffle(data);

        // Step 2. Convert data to Tensor
        // const inputs = data.map(d => d.x)
        // const labels = data.map(d => d.y);


        // const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        // const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

        const inputTensor = tf.tensor(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor(labels, [labels.length, 1]);


        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        // const inputMax = inputTensor.max();
        // const inputMin = inputTensor.min();
        // const labelMax = labelTensor.max();
        // const labelMin = labelTensor.min();

        // const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        //  const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

        return {
            inputs: inputTensor,
            labels: labelTensor,
            // Return the min/max bounds so we can use them later.
            //       inputMax,
            //        inputMin,
            //       labelMax,
            //       labelMin,
        }
    });
}

// fCompiler, fFit
async function trainModel(model, inputs, labels) {
    // Prepare the model for training.

    if (optimizer == "adadelta") {
        optimizerchosen = tf.train.adadelta(learning_rate = learningRate)
    }
    else if (optimizer == "adagrad") {
        optimizerchosen = tf.train.adagrad(learning_rate = learningRate)
    }
    else if (optimizer == "adam") {
        optimizerchosen = tf.train.adam(learning_rate = learningRate)
    }

    else if (optimizer == "adamax") {
        optimizerchosen = tf.train.adamax(learning_rate = learningRate)
    }

    else if (optimizer == "rmsprop") {
        optimizerchosen = tf.train.rmsprop(learning_rate = learningRate)
    }

    else if (optimizer == "sgd") {
        optimizerchosen = tf.train.sgd(learning_rate = learningRate)
    }

    // console.log(optimizerchosen)

    model.compile({
        // Ändern
        optimizer: optimizerchosen,
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });



    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(document.getElementById('test3'),
            ['loss', 'mse'],
            { height: 200, callbacks: ['onEpochEnd'] }
        )
    });
}


// fPredict
function testModel(model, inputData, normalizationData) {

    testEingabe = "hund katze maus"

    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.
    const [preds] = tf.tidy(() => {

        // const xs = tf.linspace(0, 1, numberValues);
        //  const preds = model.predict(xs.reshape([numberValues, 1]));
        const preds = model.predict(testEingabe);

        // const unNormXs = xs
        //      .mul(inputMax.sub(inputMin))
        //     .add(inputMin);

        // const unNormPreds = preds
        //      .mul(labelMax.sub(labelMin))
        //      .add(labelMin);

        // Un-normalize the data
        return [preds.dataSync()];
    });


    const predictedPoints = Array.from(xs).map((val, i) => {
        return { x: val, y: preds[i] }
    });

    //  const originalPoints = inputData.map(d => ({
    //       x: d.x, y: d.y,
    //    }));




    //   tfvis.render.scatterplot(document.getElementById('test'),
    //      { values: [originalPoints, predictedPoints], series: ['original', 'predicted'] },
    //      { name: 'Model Predictions vs Original Data' },
    //      {
    //          xLabel: 'x',
    //          yLabel: 'y',
    // height: 300
    //     }
    //  );
}



// single
//function testModel2(model, inputData, normalizationData) {
//    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

//    value = [xwert]
//    const predictValTensor = tf.tensor2d(value, [value.length, 1]);
//    const normalizedPredictData = predictValTensor.sub(inputMin).div(inputMax.sub(inputMin));
//    const output = model.predict(normalizedPredictData);

//   const unNormOutput = output.mul(labelMax.sub(labelMin)).add(labelMin);
//   const result = unNormOutput.dataSync()[0];


// const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

// Generate predictions for a uniform range of numbers between 0 and 1;
// We un-normalize the data by doing the inverse of the min-max scaling
// that we did earlier.
// const [xs, preds] = tf.tidy(() => {

//     const xs = tf.linspace(0, 1, 100);
//    const preds = model.predict(xs.reshape([100, 1]));

//    const unNormXs = xs
//        .mul(inputMax.sub(inputMin))
//         .add(inputMin);

//    const unNormPreds = preds
//       .mul(labelMax.sub(labelMin))
//        .add(labelMin);

// Un-normalize the data
//    return [unNormXs.dataSync(), unNormPreds.dataSync()];
// });



//  const originalPoints = inputData.map(d => ({
//      x: d.x, y: d.y,
//  }));



//  x = value[0];

// tfvis.render.scatterplot(document.getElementById('test'),
//    { values: [originalPoints, [{ "x": x, "y": result }]], series: ['original', 'predicted'] },
//    { name: 'Model Predictions vs Original Data' },
//     {
//        xLabel: 'x',
//         yLabel: 'y',
//         height: 300
//      }
//  );


//   yReal = calculate(xwert)
//   document.getElementById("yWertRealAnzeige").innerHTML = "Real value: ~" + Math.round((yReal + Number.EPSILON) * 1000) / 1000


//  document.getElementById("ywertanzeige").innerHTML = "Model's prediction: ~" + Math.round((result + Number.EPSILON) * 1000) / 1000

//}


// function calculate(x) {
//    y = (x + 0.8) * (x - 0.2) * (x - 0.3) * (x - 0.6)
//    return y;
//}

// N

//function createTrainingData(numberValues, min, max) {

//    randomPoints = [];

//   for (i = 0; i <= numberValues; i++) {
//       x = getRandomArbitrary(min, max)
//       calculate(x)
// randomPoints.push({ 'x': x, 'y': y });
//   }
//   return randomPoints;
//}



//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
// }



function loaded() {
    // document.getElementById("container").style.height = "auto";
    document.getElementById("container").style.overflow = "visible";
    document.getElementById("container").style.opacity = "1";

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


// Modal
$(document).ready(function () {
    $('.modal').modal();
});


function myFunction() {
    $('#modal').modal();
    $('#modal').modal('open');
}



// Form
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('optimizer').formSelect();
});


loaded()


// document.getElementById('button').addEventListener('click', run2);
function run2() {

    if (checkError() == true) {

        document.getElementById("button").classList.add("disabled");
        document.getElementById("singleButton").classList.add("disabled");
        document.getElementById("test-slider-2").setAttribute('disabled', true);


        activation = document.getElementById("select").value
        optimizer = document.getElementById("optimizer").value

        neurons = +document.getElementById("neurons").value
        learningRate = +document.getElementById("learningRate").value
        hiddenLayers = +document.getElementById("hiddenLayers").value
        epochs = +document.getElementById("epochs").value
        numberValues = +document.getElementById("numberValues").value
        // min = +document.getElementById("min").value
        // max = +document.getElementById("max").value
        weight = document.getElementById("weight").value
        console.log(weight)
        if (weight !== "") {
            weight = +document.getElementById("weight").value

        }

        sliderInput = document.getElementById('test-slider').noUiSlider.get();
        min = +sliderInput[0]
        max = +sliderInput[1]

        document.getElementById('xwert').value = Math.round(((min + max) / 2 + Number.EPSILON) * 100) / 100
        xwert = "";

        document.getElementById("results-card").style.display = "block";
        document.getElementById("prediction-card").style.display = "block";

        setTimeout(() => {
            document.getElementById("results-card").style.opacity = "1";
            document.getElementById("prediction-card").style.opacity = "1";

        }, 750);



        var slider = document.getElementById('test-slider-2');
        console.log(slider);


        slider.noUiSlider.destroy();

        console.log(max)
        console.log(min)

        max_pips = Math.round((max + Number.EPSILON) * 100) / 100
        min_pips = Math.round((min + Number.EPSILON) * 100) / 100

        noUiSlider.create(slider, {
            start: [(min + max) / 2],
            connect: true,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': [min_pips], //stepsize is 50.000
                'max': [max_pips]
            },
            pips: {
                mode: 'count',
                values: 2,
                density: 4

            },
            format: wNumb({
                decimals: 0
            })
        });

        slider.noUiSlider.on('set', function (values) {
            run3_slider(values)
        })



        run();
    }
}


// document.getElementById('singleButton').addEventListener('click', run3);
function run3() {


    xwert = +document.getElementById("xwert").value
    runwithouttraining();

}

function run3_slider(value) {


    xwert = +value
    runwithouttraining();

}


function good() {

    // console.log(document.getElementById("select").value);

    document.getElementById("select").value = "relu"
    document.getElementById("optimizer").value = "adam"

    document.getElementById("neurons").value = 50
    document.getElementById("learningRate").value = 0.01
    document.getElementById("hiddenLayers").value = 2
    document.getElementById("epochs").value = 50
    document.getElementById("numberValues").value = 500
    //  document.getElementById("min").value = -1
    // document.getElementById("max").value = 1

    document.getElementById('test-slider').noUiSlider.set([-1, 1]);



    $(document).ready(function () {
        $('select').formSelect();
    });

}

function under() {


    document.getElementById("select").value = "relu"
    document.getElementById("optimizer").value = "adam"

    document.getElementById("neurons").value = 10
    document.getElementById("learningRate").value = 0.01
    document.getElementById("hiddenLayers").value = 0
    document.getElementById("epochs").value = 20
    document.getElementById("numberValues").value = 20
    //  document.getElementById("min").value = 0
    //  document.getElementById("max").value = 100

    document.getElementById('test-slider').noUiSlider.set([0, 100]);


    $(document).ready(function () {
        $('select').formSelect();
    });

}


function over() {


    document.getElementById("select").value = "relu"
    document.getElementById("optimizer").value = "adam"

    document.getElementById("neurons").value = 20
    document.getElementById("learningRate").value = 0.01
    document.getElementById("hiddenLayers").value = 10
    document.getElementById("epochs").value = 50
    document.getElementById("numberValues").value = 1000
    //   document.getElementById("min").value = -1
    //  document.getElementById("max").value = 1

    document.getElementById('test-slider').noUiSlider.set([-1, 1]);


    $(document).ready(function () {
        $('select').formSelect();
    });

}


function checkError() {


    neurons = +document.getElementById("neurons").value
    learningRate = +document.getElementById("learningRate").value
    hiddenLayers = +document.getElementById("hiddenLayers").value
    epochs = +document.getElementById("epochs").value
    numberValues = +document.getElementById("numberValues").value
    // min = +document.getElementById("min").value
    //  max = +document.getElementById("max").value
    weight = +document.getElementById("weight").value

    sliderInput = +document.getElementById('test-slider').noUiSlider.get();

    min = sliderInput[0]
    max = sliderInput[1]

    if (neurons > 50 || neurons < 1 || learningRate > 1 || learningRate < 0.001 || hiddenLayers > 100 || hiddenLayers < 0 || epochs < 1 || epochs > 500 || min < -100 || min > 0 || max < 0 || max > 100 || numberValues < 1 || numberValues > 10000 || weight < -1 || weight > 1) {

        document.getElementById("error-card").style.display = "block";

        setTimeout(() => {
            document.getElementById("error-card").style.opacity = "1";
        }, 100);

        return false;
    }
    else {


        document.getElementById("error-card").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("error-card").style.display = "none";


        }, 500);
        return true;

    }
}






async function test() {

    model = await load()

    console.log("model loaded")

}

jsonparsed = JSON.parse(json);
console.log(jsonparsed)


test();


async function load() {
    const model = await tf.loadLayersModel(
        './model.json'
    );
    return model;
}

anzahlDerVorzuschlagendenWoerter = 5;

async function run(text) {


    textNumber = []


    for (i = 0; i < 5; i++) {
        //   console.log(text.length - i - 1);
        //   text[text.length - i] = text[text.length - i].toLowerCase();
        textNumber[i] = jsonparsed[text[text.length - i - 1]]

        //  textNumber[i].toLowerCase()
    }

    predictedWords = [];
    tensor = tf.tensor2d(textNumber, [1, 5]);
    [words] = tf.tidy(() => {

        // Step 1. Shuffle the data
        // tf.util.shuffle(data);

        // Step 2. Convert data to Tensor
        // const inputs = data.map(d => d.x)
        // const labels = data.map(d => d.y);


        // const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        // const labelTensor = tf.tensor2d(labels, [labels.length, 1]);


        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        // const inputMax = inputTensor.max();
        // const inputMin = inputTensor.min();
        // const labelMax = labelTensor.max();
        // const labelMin = labelTensor.min();

        // const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        //  const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

        predcitionback = model.predict(tensor);
        return [predcitionback.dataSync()];
    });

    pred1 = [...words];
    pred1.sort((a, b) => b - a);
    test = 0

    for (i = 0; i < anzahlDerVorzuschlagendenWoerter; i++) {
        do {
            index = words.indexOf(pred1[i + test]);
            predictedWords[i] = (Object.keys(jsonparsed).find((key) => jsonparsed[key] === index));
            test++
            //   } while (/^\d+$/.test(predictedWords[i]) == true)
        } while (/\d/.test(predictedWords[i]) == true)

    }

    document.getElementById('predictedWords').innerHTML = '';

    for (i = 0; i < anzahlDerVorzuschlagendenWoerter; i++) {

        document.getElementById('predictedWords').innerHTML += '<button class="btn waves-effect waves-light btn-small" id="' + predictedWords[i] + '" type="submit" onclick="clickedWord(this.id)">' + predictedWords[i] + '</button >';
        M.textareaAutoResize($('#eingabefeld'));

    }

}


var slider2 = document.getElementById('test-slider-2');

noUiSlider.create(slider2, {
    start: [5],
    connect: true,
    step: 1,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
        'min': [1], //stepsize is 50.000
        'max': [100]
    },
    pips: {
        mode: 'range',
        density: 3
    },
    format: wNumb({
        decimals: 0, thousand: ',',
    })
});



function eingabe() {
    text = document.getElementById("eingabefeld").value;
    // text = text.split(/[ ,]+/);
    text = text.split(' ').filter(function (i) { return i })

    if (text.length >= 5) {
        run(text)
    }
}


function clickedWord(wort) {

    textfield = document.getElementById("eingabefeld").value
    if (textfield.slice(textfield.length - 1) == ' ') {
        document.getElementById("eingabefeld").value += wort + " "
    }
    else {
        document.getElementById("eingabefeld").value += " " + wort + " "
    }
    eingabe()

}

slider2.noUiSlider.on('set', function (values) {
    setCountWords(values)
})


function setCountWords(values) {
    anzahlDerVorzuschlagendenWoerter = values;

}