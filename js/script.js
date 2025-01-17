$(function () {
  $('.gnb > li > a').on('mouseenter focus', function () {
    var gnbindex = $('.gnb > li > a').index($(this));
    $('.gnb .inner').removeClass('on'); //
    $('.gnb .inner:eq(' + gnbindex + ')').addClass('on');
  });
  $('header').on('mouseleave', function () {
    $('.gnb .inner').removeClass('on');
  });
});

// 스크롤시 GNB 상단 고정
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// 윈도우창 조절시 이벤트
$(window).on('scroll resize', function () {
  scrollFix = $(document).scrollTop();
  fixHeader();
});

// 고정헤더함수 => fixheader();
function fixHeader() {
  if (scrollFix > 150) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
}

// 글자 애니메이션을 위한 Splitting 라이브러리 연결
$(function () {
  Splitting();
});

// Slick 라이브러리를 이용한 이미지 슬라이드
$(function () {
  $('.visual .slide').slick({
    arrow: true, // 화살표
    dots: true, // 인디케이터
    autoplay: true, // 자동재생
    fade: true, // 페이드인 효과
    autoplaySpeed: 7000, // 재생시간
    pauseOnHover: false, // 마우스오버시 멈추는 것을 해제
    pauseOnFocus: false, // 포커스시 멈추는 것을 해제
  });
  $('.slick-prev').text('prev');
});
