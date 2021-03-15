
function drawScore(){
ctx.font ='25px Arial'
    ctx.fillStyle='#dddb00'
    ctx.fillText('score'+score,8,20)
}
    arrayOfVoucher=['VC001','VC002','VC003','VC004']
function getVoucher (score) {
    if ( score >= 5){
        alert("Tặng bạn mã giảm giá  " + arrayOfVoucher[Math.floor(Math.random()*4)])
        return i=Math.floor(Math.random()*4)
    }
    else alert('Chúc bạn may mắn lần sau ')
}
