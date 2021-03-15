let goodItems = function (cx, cy, link) {
    this.x = cx
    this.y = cy
    this.img = new Image()
    this.img.src = link
    this.draw2 = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50)
    }
    this.fallDown1 = function () {
        if (this.y < 450) {
            this.y += 25
            this.draw2()
        } else if (this.y >= 450) {
            this.y = cy
            this.x = Math.floor(Math.random() * 4 * 50)
        }

    }
    this.vaChamGood = function () {
        if (this.y >= 450) {
            if (((this.x >= giohang.x) && (this.x < (giohang.x + 50)) || (this.x + 50 >= giohang.x)&&(this.x<=giohang.x))) {
                score += 1
                this.y = -50
            }
        }
    }
}
let badItems = function (cx, cy, link) {
    this.x = cx
    this.y = cy
    this.img = new Image()
    this.img.src = link
    this.draw3 = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50)
    }
    this.fallDown2 = function () {
        if (this.y < 450) {
            this.y += 25
            this.draw3()
        } else if (this.y >= 450) {
            this.y = cy
            this.x = Math.floor(Math.random() * 4 * 50)
        }

    }
    this.vaChamBad = function () {
        if (this.y >= 450) {
            if ((this.x >= giohang.x) && (this.x < (giohang.x + 50)) || (this.x + 50 >= giohang.x)&&(this.x<=giohang.x)) {
                alert("game Over bạn được :  " + score +  " điểm " )
                getVoucher(score)
                this.y = cy
                score=0
            }
        }
    }
}