const net = new brain.NeuralNetwork();

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.3128841471130446,"g":0.17596933099357948,"b":0.1721833129439978},"output":[1]},{"input":{"r":0.3007994052483678,"g":0.4960799365838724,"b":0.34311251535843845},"output":[1]},{"input":{"r":0.7898223265528919,"g":0.24840934688197458,"b":0.5740030293085039},"output":[1]},{"input":{"r":0.34406518444834644,"g":0.7497879811981296,"b":0.5137569179703125},"output":[0]},{"input":{"r":0.4199172663650512,"g":0.6534935607070238,"b":0.23646258597047076},"output":[1]},{"input":{"r":0.5382944429556082,"g":0.6855301979155075,"b":0.7105971068865546},"output":[1]},{"input":{"r":0.164448283871224,"g":0.7698792642449348,"b":0.9454281465303136},"output":[0]},{"input":{"r":0.22857857383019908,"g":0.0477797709038148,"b":0.3402719952343889},"output":[1]},{"input":{"r":0.301036606644252,"g":0.08062184540724981,"b":0.23835306089226638},"output":[1]}]

net.train(data)

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
let color
setRandomColor()

whiteButton.addEventListener('click', () => {
    chooseColor(1);
})

blackButton.addEventListener('click', () => {
    chooseColor(0);
})

printButton.addEventListener('click', print)

function print(){
    console.log(JSON.stringify(data))
}

function chooseColor(value){
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

function setRandomColor(){
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    }
    const guess = net.run(color)[0]
    guessEl.style.color = guess > 0.5 ? "#FFF": "#000"
    colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b *255})`
}