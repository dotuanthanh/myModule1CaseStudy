let giohang = new Giohang()
let score=0
var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
badArr = []
goodArr = []
ctx.beginPath()
let arrayOfGood = ['cfsua1.png', 'matcha1.png', 'frezz1.png']
let arrayOfBad = [' rock2.png', 'shit2.png','starbucks.png']

arrayOfGood.forEach(function (link) {
    let good = new goodItems(Math.floor(Math.random() * 4 * 50), Math.floor(Math.random() * 4 * (-40)), link)
    goodArr.push(good);
})
arrayOfBad.forEach(function (link) {
    let bad = new badItems(Math.floor(Math.random() * 4 * 50), Math.floor(Math.random() * 4 * (-50)), link)
    badArr.push(bad);
})

function drawAll() {
    ctx.clearRect(0, 0, 250, 500)
    giohang.draw()
    for (let i = 0; i < badArr.length; i++) {
        badArr[i].fallDown2()
        badArr[i].vaChamBad()

    }
    for (let i = 0; i < goodArr.length; i++) {
        goodArr[i].fallDown1()
        goodArr[i].vaChamGood()

    }
    drawScore()
    setTimeout(drawAll, 300)
}

function docReady() {
    window.addEventListener('keydown', moveIt)
}

drawAll()

