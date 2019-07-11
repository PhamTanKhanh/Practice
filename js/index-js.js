// get ngay thang nam
var thuTrongTuan = ['hai', 'ba', 'tư', 'năm', 'sáu', 'bảy', 'Chủ nhật']

function myFunction() {
	var date = new Date();
	var thu = date.getDay();
	var ngay = date.getDate();
	var thang = date.getMonth() + 1;
	var nam = date.getFullYear();

	console.log(thu,ngay,thang,nam);
	
	// console.log(ngay);

	for(var i = 0; i < thuTrongTuan.length; i++) {

		if(thu === 0) return document.getElementById("toDay").innerHTML = thuTrongTuan[6]+ ', ' + ' ngày ' +ngay+ ' tháng ' +thang+ ' năm ' +nam ;
		else {
			if (thu === i) return document.getElementById("toDay").innerHTML = 'Thứ ' +thuTrongTuan[i-1]+ ', '+'ngày '+ngay+ ' tháng ' +thang+ ' năm ' +nam ;
		}

	}

}

myFunction();


// sticky cho menu ngang

window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("sticky-menu");
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#backtotop').fadeIn(200);    // Fade in the arrow
    } else {
        $('#backtotop').fadeOut(200);   // Else fade out the arrow
    }
});
$('#backtotop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});