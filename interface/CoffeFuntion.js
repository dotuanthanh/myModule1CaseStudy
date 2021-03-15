function ChangeImg1() {
    document.getElementById('circle').style.backgroundColor = "#69BF64"
    document.getElementById('img').src = 'matchabig.png'
    document.getElementById('delete').innerHTML = " "
    document.getElementById('HienThi').innerHTML = '<span style="font-size: 20px" > Thức uống rất được ưa chuộng! ' +
        'Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, t' +
        'hơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. ' +
        'Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai! </span>'
    document.getElementById('learMore').innerHTML = '<span onclick="Discount()"> 50.000 VNĐ</span>'
}

function ChangeImg2() {
    document.getElementById('circle').style.backgroundColor = "#DEB887"
    document.getElementById('img').src = "suaDa2.png"
    document.getElementById('delete').innerHTML = ' '
    document.getElementById('HienThi').innerHTML = '<span style="font-size: 20px">Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, ' +
        'và \'Phin\' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. ' +
        'Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là \'Phin\',' +
        ' cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. ' +
        'Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự hào phục vụ cà phê' +
        ' Việt theo cách truyền thống của người Việt. </span>'
    document.getElementById('learMore').innerHTML = '<span id="2d"  onclick="mark=Discount()"> 50.000 VNĐ</span>'
}

function ChangeImg3() {
    document.getElementById('circle').style.backgroundColor = "#8B4513"
    document.getElementById('img').src = "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
    document.getElementById('delete').innerHTML = ' '
    document.getElementById('HienThi').innerHTML = "<span style='font-size: 20px'>Thức uống chinh phục những thực khách khó tính!" +
        " Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan." +
        " Thêm vào chút sữa sẽ để vị thêm ngọt ngào.</span>"
    document.getElementById('learMore').innerHTML = '<span onclick="Discount()"> 50.000 VNĐ</span>'
}

arrayOfVoucher1 = ['VC001', 'VC002', 'VC003', 'VC004']
let mark = 0

function Discount() {
    let x = prompt("Vui lòng nhập mã giảm giá (nếu có )")
    for (let i = 0; i < arrayOfVoucher1.length; i++) {
        if (x === arrayOfVoucher1[i]) {
            mark = 1
            break
        } else {
            mark = 0
        }
    }
    if (mark == 1) {
        alert("Chúc mừng bạn đã được giảm giá  20 %")
        document.getElementById('learMore').innerHTML = " <span> 30.000 VNĐ </span>"
    }
}
