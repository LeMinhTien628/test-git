let slideIndex = 1;
showSlides(slideIndex);

// Tự động chuyển động sau mỗi 5 giây
let autoSlide = setInterval(function() {
    plusSlides(1);
}, 2500);

// Điều khiển nút tới/lui
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetInterval();  // Reset lại thời gian tự động khi người dùng tương tác
}

// Điều khiển slide hiện tại
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetInterval();  // Reset lại thời gian tự động khi người dùng tương tác
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Hàm để reset thời gian tự động chuyển slide
function resetInterval() {
  clearInterval(autoSlide);  // Xóa interval hiện tại
  autoSlide = setInterval(function() {
      plusSlides(1);
  }, 2500);  // Khởi động lại interval mới
}
