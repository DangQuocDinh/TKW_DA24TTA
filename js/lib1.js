<script>
	const donGia = document.getElementsByClassName("dg");
	const soLuong = document.getElementsByClassName("sl");
	const thanhTien = document.getElementsByClassName("tt");
	let tong = 0;
	for (let i = 0;i<donGia.leght;i++)
	{
		thanhTien[i].innerHTML = soLuong[i].innerHTML * donGia[i].innerHTML;
		tong = tong + parseInt(thanhTien[i].innerHTML);
	}
	document.getElementById("tong").innerHTML = tong;
</script>