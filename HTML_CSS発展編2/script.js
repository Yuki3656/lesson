$(function() {
    //カルーセル
    $('.carousel').slick({
        dots: true,
        autoplay: true,
        speed: 1500,
        arrow: false,
        pauseOnHover: false
    });
    //ホバー時不透明
    $('a').hover(
        function(){
        $(this).animate({opacity: 0.5,},100);
    },
        function(){
        $(this).animate({opacity: 1.0,}, 100);
        }
    );

    //topボタン
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#page-top').fadeIn();
        } else {
            $('#page-top').fadeOut();
        }
    });
    //スムーススクロール
    $('a[href^="#"]').click(function(){
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#'){
            $target = $('html');
        } else {
            $target = $(href);
        }
        const position = $target.offset(). top;
        $('html, body').animate({'scrollTop':position}, speed, 'swing');
        return false;
    });
    
    //フェードイン←？？
    // $(window).scroll(function () {
    //     const scrollAmount = $(window).scrollTop();
    //     const windowHeight = $(window).heihgt();
    //     $('section').each(function () {
    //         const position = $(this).offset().top;
    //         if(scrollAmount > position - windowHeight + 100) {
    //             $(this).addClass('fade-in');
    //         }
    //     });
    // });
    $(window).scroll(function () {
        const scrollAmount = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('section').each(function () {
          const position = $(this).offset().top;
          if (scrollAmount > position - windowHeight + 100) {
            $(this).addClass('fade-in');
          }
        });
      });

      //画像クリック時モーダルで拡大表示
      $('.works img').click(function() {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
      });
      //閉じるボタンでモーダル閉じる
      $('.close-btn').click(function () {
        $('.modal').fadeOut();
        return false
      });
});
