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


async function getData() {
    xyData = createTrainingsData(numberValues, min, max);

    const cleaned = xyData.map((car) => ({
        x: car.x,
        y: car.y,
    })).filter((car) => (car.x != null && car.y != null));

    return cleaned;
}


async function run() {
    const data = await getData();
    const values = data.map((d) => ({
        x: d.x,
        y: d.y,
    }));

    graph1 = document.getElementById('graph-1');

    tfvis.render.scatterplot(document.getElementById('graph-1'),
        { values },
        { name: 'X v Y' },
        {
            xLabel: 'X',
            yLabel: 'Y',
            height: 300,
        },
    );

    model = createModel();
    tfvis.show.modelSummary(document.getElementById('graph-2'), model);

    tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;

    await trainModel(model, inputs, labels);
    console.log('Done Training');

    window.sessionStorage.setItem(graph1, JSON.stringify(data));

    testModel(model, data, tensorData);

    document.getElementById('train-model-and-predict-button').classList.remove('disabled');
    document.getElementById('predict-button').classList.remove('disabled');
    document.getElementById('predict-slider').removeAttribute('disabled');
}


async function runWithoutTraining() {
    data = JSON.parse(window.sessionStorage.getItem(graph1, data));
    testModelWithoutTraining(model, data, tensorData);
}


function createModel() {
    const model = tf.sequential();

    bias = 0;

    if (weight === '') {
        model.add(tf.layers.dense({ inputShape: [1], units: neurons, useBias: true }));
    } else if (weight !== '') {
        weights = [
            tf.fill([1, neurons], weight),
            tf.fill([neurons], bias),
        ];

        model.add(tf.layers.dense({ inputShape: [1], units: neurons, useBias: true, weights: weights }));
    }

    for (i = 1; i <= hiddenLayers; i++) {
        if (activation === 'none' && weight == '') {
            model.add(tf.layers.dense({ units: neurons }));
        } else if (activation === 'none' && weight !== '') {
            weights = [
                tf.fill([neurons, neurons], weight),
                tf.fill([neurons], bias),
            ];

            model.add(tf.layers.dense({ units: neurons, weights: weights }));
        } else if (activation != 'none' && weight == '') {
            model.add(tf.layers.dense({ units: neurons, activation: activation }));
        } else if (activation != 'none' && weight !== '') {
            weights = [
                tf.fill([neurons, neurons], weight),
                tf.fill([neurons], bias),
            ];

            model.add(tf.layers.dense({ units: neurons, activation: activation, weights: weights }));
        }
    }

    model.add(tf.layers.dense({ units: 1, useBias: true }));

    return model;
}


function convertToTensor(data) {
    return tf.tidy(() => {
        tf.util.shuffle(data);

        const inputs = data.map((d) => d.x);
        const labels = data.map((d) => d.y);

        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

        const inputMax = inputTensor.max();
        const inputMin = inputTensor.min();
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();

        const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

        return {
            inputs: normalizedInputs,
            labels: normalizedLabels,
            inputMax,
            inputMin,
            labelMax,
            labelMin,
        };
    });
}


async function trainModel(model, inputs, labels) {
    if (optimizer == 'adadelta') {
        optimizerChosen = tf.train.adadelta(learning_rate = learningRate);
    } else if (optimizer == 'adagrad') {
        optimizerChosen = tf.train.adagrad(learning_rate = learningRate);
    } else if (optimizer == 'adam') {
        optimizerChosen = tf.train.adam(learning_rate = learningRate);
    } else if (optimizer == 'adamax') {
        optimizerChosen = tf.train.adamax(learning_rate = learningRate);
    } else if (optimizer == 'rmsprop') {
        optimizerChosen = tf.train.rmsprop(learning_rate = learningRate);
    } else if (optimizer == 'sgd') {
        optimizerChosen = tf.train.sgd(learning_rate = learningRate);
    }

    model.compile({
        optimizer: optimizerChosen,
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });

    batchSize = 32;

    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(document.getElementById('graph-3'),
            ['loss', 'mse'],
            { height: 200, callbacks: ['onEpochEnd'] },
        ),
    });
}


function trainModelAndPredict() {
    if (checkError() == true) {
        document.getElementById('train-model-and-predict-button').classList.add('disabled');
        document.getElementById('predict-button').classList.add('disabled');
        document.getElementById('predict-slider').setAttribute('disabled', true);

        activation = document.getElementById('activation').value;
        optimizer = document.getElementById('optimizer').value;

        neurons = +document.getElementById('neurons').value;
        learningRate = +document.getElementById('learning-rate').value;
        hiddenLayers = +document.getElementById('hidden-layers').value;
        epochs = +document.getElementById('epochs').value;
        numberValues = +document.getElementById('amount-training-data').value;
        weight = document.getElementById('weight').value;
        if (weight !== '') {
            weight = +document.getElementById('weight').value;
        }

        sliderInput = document.getElementById('trainings-data-range-slider').noUiSlider.get();
        min = +sliderInput[0];
        max = +sliderInput[1];

        document.getElementById('x-wert').value = Math.round(((min + max) / 2 + Number.EPSILON) * 100) / 100;

        document.getElementById('results-card').style.display = 'block';
        document.getElementById('predict-card').style.display = 'block';

        setTimeout(() => {
            document.getElementById('results-card').style.opacity = '1';
            document.getElementById('predict-card').style.opacity = '1';
        }, 750);

        document.getElementById('predict-slider').noUiSlider.destroy();

        minPips = Math.round((min + Number.EPSILON) * 100) / 100;
        maxPips = Math.round((max + Number.EPSILON) * 100) / 100;

        noUiSlider.create(document.getElementById('predict-slider'), {
            start: [(min + max) / 2],
            connect: true,
            orientation: 'horizontal',
            range: {
                'min': [minPips],
                'max': [maxPips],
            },
            pips: {
                mode: 'count',
                values: 2,
                density: 4,

            },
            format: wNumb({
                decimals: 0,
            }),
        });

        document.getElementById('predict-slider').noUiSlider.on('set', function (values) {
            predictSlider(values);
        });

        run();
    }
}


function testModel(model, inputData, normalizationData) {
    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

    const [xs, preds] = tf.tidy(() => {
        const xs = tf.linspace(0, 1, numberValues);
        const preds = model.predict(xs.reshape([numberValues, 1]));

        const unNormXs = xs
            .mul(inputMax.sub(inputMin))
            .add(inputMin);

        const unNormPreds = preds
            .mul(labelMax.sub(labelMin))
            .add(labelMin);

        return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => {
        return { x: val, y: preds[i] };
    });

    const originalPoints = inputData.map((d) => ({
        x: d.x, y: d.y,
    }));

    tfvis.render.scatterplot(document.getElementById('graph-1'),
        { values: [originalPoints, predictedPoints], series: ['original', 'predicted'] },
        { name: 'Model Predictions vs Original Data' },
        {
            xLabel: 'x',
            yLabel: 'y',
            height: 300,
        },
    );
}


function testModelWithoutTraining(model, inputData, normalizationData) {
    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

    value = [xWert];
    const predictValTensor = tf.tensor2d(value, [value.length, 1]);
    const normalizedPredictData = predictValTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const output = model.predict(normalizedPredictData);

    const unNormOutput = output.mul(labelMax.sub(labelMin)).add(labelMin);
    const result = unNormOutput.dataSync()[0];

    const [xs, preds] = tf.tidy(() => {
        const xs = tf.linspace(0, 1, 100);
        const preds = model.predict(xs.reshape([100, 1]));

        const unNormXs = xs
            .mul(inputMax.sub(inputMin))
            .add(inputMin);

        const unNormPreds = preds
            .mul(labelMax.sub(labelMin))
            .add(labelMin);

        return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const originalPoints = inputData.map((d) => ({
        x: d.x, y: d.y,
    }));

    x = value[0];

    tfvis.render.scatterplot(document.getElementById('graph-1'),
        { values: [originalPoints, [{ 'x': x, 'y': result }]], series: ['original', 'predicted'] },
        { name: 'Model Predictions vs Original Data' },
        {
            xLabel: 'x',
            yLabel: 'y',
            height: 300,
        },
    );

    yWertReal = calculate(xWert);

    document.getElementById('y-wert-real').innerHTML = 'Real value: ~' + Math.round((yWertReal + Number.EPSILON) * 1000) / 1000;
    document.getElementById('y-wert-prediction').innerHTML = 'Model\'s prediction: ~' + Math.round((result + Number.EPSILON) * 1000) / 1000;
}


function createTrainingsData(numberValues, min, max) {
    randomPoints = [];

    for (i = 0; i <= numberValues; i++) {
        x = getRandomArbitrary(min, max);
        calculate(x);
        randomPoints.push({ 'x': x, 'y': y });
    }
    return randomPoints;
}


function calculate(x) {
    y = (x + 0.8) * (x - 0.2) * (x - 0.3) * (x - 0.6);
    return y;
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function predict() {
    xWert = +document.getElementById('x-wert').value;
    runWithoutTraining();
}


function predictSlider(value) {
    xWert = +value;
    runWithoutTraining();
}


function good() {
    document.getElementById('activation').value = 'relu';
    document.getElementById('optimizer').value = 'adam';

    document.getElementById('neurons').value = 50;
    document.getElementById('learning-rate').value = 0.01;
    document.getElementById('hidden-layers').value = 2;
    document.getElementById('epochs').value = 50;
    document.getElementById('amount-training-data').value = 500;

    document.getElementById('trainings-data-range-slider').noUiSlider.set([-1, 1]);

    $(document).ready(function () {
        $('select').formSelect();
    });
}


function underfitting() {
    document.getElementById('activation').value = 'relu';
    document.getElementById('optimizer').value = 'adam';

    document.getElementById('neurons').value = 10;
    document.getElementById('learning-rate').value = 0.01;
    document.getElementById('hidden-layers').value = 0;
    document.getElementById('epochs').value = 20;
    document.getElementById('amount-training-data').value = 20;

    document.getElementById('trainings-data-range-slider').noUiSlider.set([0, 100]);

    $(document).ready(function () {
        $('select').formSelect();
    });
}


function overfitting() {
    document.getElementById('activation').value = 'relu';
    document.getElementById('optimizer').value = 'adam';

    document.getElementById('neurons').value = 20;
    document.getElementById('learning-rate').value = 0.01;
    document.getElementById('hidden-layers').value = 10;
    document.getElementById('epochs').value = 50;
    document.getElementById('amount-training-data').value = 1000;

    document.getElementById('trainings-data-range-slider').noUiSlider.set([-1, 1]);

    $(document).ready(function () {
        $('select').formSelect();
    });
}


function checkError() {
    neurons = +document.getElementById('neurons').value;
    learningRate = +document.getElementById('learning-rate').value;
    hiddenLayers = +document.getElementById('hidden-layers').value;
    epochs = +document.getElementById('epochs').value;
    numberValues = +document.getElementById('amount-training-data').value;
    weight = +document.getElementById('weight').value;

    sliderInput = +document.getElementById('trainings-data-range-slider').noUiSlider.get();
    min = sliderInput[0];
    max = sliderInput[1];

    if (neurons > 50 || neurons < 1 || learningRate > 1 || learningRate < 0.001 || hiddenLayers > 100 || hiddenLayers < 0 || epochs < 1 || epochs > 500 || min < -100 || min > 0 || max < 0 || max > 100 || numberValues < 1 || numberValues > 10000 || weight < -1 || weight > 1) {
        document.getElementById('error-card').style.display = 'block';

        setTimeout(() => {
            document.getElementById('error-card').style.opacity = '1';
        }, 100);

        return false;
    } else {
        document.getElementById('error-card').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('error-card').style.display = 'none';
        }, 500);
        return true;
    }
}


noUiSlider.create(document.getElementById('trainings-data-range-slider'), {
    start: [-1, 1],
    connect: true,
    step: 1,
    orientation: 'horizontal',
    range: {
        'min': [-100],
        '25%': [-5],
        '50%': [0],
        '75%': [5],
        'max': [100],
    },
    pips: {
        mode: 'range',
        density: 3,
    },
    format: wNumb({
        decimals: 0,
    }),
});

noUiSlider.create(document.getElementById('predict-slider'), {
    start: [1],
    connect: true,
    step: 1,
    orientation: 'horizontal',
    range: {
        'min': [0],
        'max': [1],
    },
    pips: {
        mode: 'range',
        density: 3,
    },
    format: wNumb({
        decimals: 0,
    }),
});

document.getElementById('train-model-and-predict-button').addEventListener('click', trainModelAndPredict);
document.getElementById('predict-button').addEventListener('click', predict);

$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('optimizer').formSelect();
});

let data;

loaded();
