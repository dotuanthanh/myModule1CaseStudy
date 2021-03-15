let Giohang = function () {
    this.height = 450
    this.width = 100
    this.y = this.height
    this.x = this.width
    this.img = new Image()
    this.img.src = 'teddytpng.png'
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50)
    }
    this.moveLeft = function () {
        if (this.x >= 50) {
            this.x -= 50
        }
    }
    this.moveRight = function () {
        if (this.x <= 150) {
            this.x += 50
        }
    }
}

function moveIt(evt) {
    console.log(evt);
    switch (evt.keyCode) {
        case 37:
            ctx.clearRect(giohang.x, giohang.y, giohang.x + 50, giohang.y + 50)
            giohang.moveLeft();
            giohang.draw()
            break;
        case 39:
            ctx.clearRect(giohang.x, giohang.y, giohang.x + 50, giohang.y + 50)
            giohang.moveRight();
            giohang.draw()
            break;
    }
}


