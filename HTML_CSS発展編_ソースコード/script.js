//カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
});

//リンクホバー時のアニメーション
$(function () {
    $('.link').on('mouseenter', function () {
        $(this).animate({
            opacity: 0.5,
        },100);
    });
    $('.link').on('mouseout', function () {
        $(this).animate({
            opacity: 1,
        },100);
    });
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// ページ内スクロール
$('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
//f
$(function(){
    $(window).scroll(function (){
      $('.fadeIn').each(function(){
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100){
          $(this).addClass('scroll');
        }
      });
    });
  });

//モーダル
$(function(){
    const modal = $('.modal_content');
    const overlay = $('.modal_overlay');
    $('.modal_open').on('click', function() {
        modal.addClass("open");
        overlay.addClass("open");
    });
    $('.modal_close').on('click', function(){
        modal.removeClass("open");
    });
    overlay.on('click', function(){
        modal.removeClas("open");
        overlay.removeClas("open");
    });
});
    