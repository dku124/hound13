// header scroll
var header = document.getElementById('header');
function myScroll(){
  var y = window.pageYOffset;
  if(y>640){
    header.className = "header header_bg";
  }
  else{
    header.className = "header";
  }
} 
window.addEventListener("scroll", myScroll);


// intro
var swiperIntro = new Swiper(".mySwiperIntro", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

// abour tab
function openTab(evt, tabName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tab_link");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


// history
var swiperHis = new Swiper(".mySwiperHis", {
  slidesPerView: 3,
  centeredSlides: false,
  slidesPerGroup: 3,
  spaceBetween: 25,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  on: {
      observerUpdate: function () {
        document.getElementById("fractionHis").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
      },
      slideChange: function () {
        document.getElementById("fractionHis").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
      }
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 12,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
    },
});

// game
var swiperGame = new Swiper(".mySwiperGame", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 24,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  on: {
    init: function () {
      document.getElementById("fractionGame").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    },
    slideChange: function () {
      document.getElementById("fractionGame").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    }
  },
});

// careers
function openCar(evt, carName) {
  var i, carContent, carLinks;
  carContent = document.getElementsByClassName("careers_content");
  for (i = 0; i < carContent.length; i++) {
    carContent[i].style.display = "none";
  }
  carLinks = document.getElementsByClassName("careers_link");
  for (i = 0; i < carLinks.length; i++) {
    carLinks[i].className = carLinks[i].className.replace(" active", "");
  }
  document.getElementById(carName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenCar").click();

// office
var swiperOff = new Swiper(".mySwiperOff", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    init: function () {
      document.getElementById("fractionOff").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    },
    slideChange: function () {
      document.getElementById("fractionOff").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    }
  },
});

// news
var swiperNews = new Swiper(".mySwiperNews", {
  slidesPerView: 3,
  centeredSlides: false,
  slidesPerGroup: 3,
  spaceBetween: 24,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    init: function () {
      document.getElementById("fractionNews").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    },
    slideChange: function () {
      document.getElementById("fractionNews").textContent = (this.snapIndex + 1) +'/'+ this.snapGrid.length;
    }
  },
  breakpoints: {
    550: {
      slidesPerView: 1,
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
  },
});

// mobile menu 
const menu_btn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav_wrap");
const close_btn = document.querySelector(".close_btn")
menu_btn.addEventListener("click", function(){
  nav.classList.add('change');
  document.querySelector("body").classList.toggle('scroll_lock');
});
close_btn.addEventListener("click", function(){
  nav.classList.remove('change');
  document.querySelector("body").classList.toggle('scroll_lock');
});

// popup
var swiperPopOff = new Swiper(".mySwiperPopOff", {
  slidesPerView: 1,
  centeredSlides: false,
  observer: true,
  observeParents: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// display popup Office
function openOffice(){
  document.getElementsByClassName("dimmed")[0].style.display = "block";
  document.getElementById("popup_office").style.display = "block";
  document.querySelector("body").classList.toggle('scroll_lock');
}

//display popup news
function openNews(evt, newsName) {
  var i, popupNews, newsLink;
  popupNews = document.getElementsByClassName("popup_news");
  for (i = 0; i < popupNews.length; i++) {
    popupNews[i].style.display = "none";
  }
  newsLink = document.getElementsByClassName("news_link");
  for (i = 0; i < newsLink.length; i++) {
    newsLink[i].className = newsLink[i].className.replace(" active", "");
  }
  document.getElementById(newsName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementsByClassName("dimmed")[0].style.display = "block";
  document.querySelector("body").classList.toggle('scroll_lock');
}

// close popup
function closePopup(){
  document.getElementsByClassName("dimmed")[0].style.display = "none";
  document.getElementById("popup_office").style.display = "none";
  document.querySelector("body").classList.toggle('scroll_lock');
  var pn = document.getElementsByClassName("popup_news");
  for(i = 0; i<pn.length; i++){
    pn[i].style.display ='none';
  }
}