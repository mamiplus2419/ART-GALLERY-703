$(function () {

    // ========================================================================
    // ★トップに戻るボタンの非表示　→　一定量スクロールされたら表示させる
    // ========================================================================

    $(".to-top").hide();                    //.to-topを非表示にする

    $(window).on('scroll', function () {       //ブラウザがスクロールされたら以下の処理を行う。
        if ($(window).scrollTop() > 500) {  //スクロール量が500以上になったら、
            $(".to-top").fadeIn(500);       //.to-topを0.5秒かけてフェードインさせる。
        } else {                              //そうでなければ、
            $(".to-top").fadeOut(500);      //.to-topを0.5秒かけてフェードアウトさせる。
        }
    });

    // ========================================================================
    // ★トップに戻るボタンのスムーススクロールアニメーション (教科書p185の応用)
    // ========================================================================

    $(".to-top a").on('click', function () {                   //.to-topの中のaタグがクリックされたとき、
        $("html,body").animate({ scrollTop: 0 }, 500);    //0.5秒かけて画面の一番上までスクロールするアニメーションを実行
        return false;
    });


    // ========================================================================
    // 表示できる画像3種を全7種からランダムに設定
    // ========================================================================

    const images = [
        {
            large: "assets/images/animal01_600x400.jpg",
            thumb: "assets/images/animal_thumb_80x50.jpg"
        },
        {
            large: "assets/images/art01_500x750.jpg",
            thumb: "assets/images/art_thumb_80x50.jpg"
        },
        {
            large: "assets/images/gyoza01_500x750.jpg",
            thumb: "assets/images/gyoza_thumb_80x50.jpg"
        },
        {
            large: "assets/images/picture01_500x746.jpg",
            thumb: "assets/images/picture_thumb_80x50.jpg"
        },
        {
            large: "assets/images/sasahara01_500x807.jpg",
            thumb: "assets/images/sasahara_thumb_80x50.jpg"
        },
        {
            large: "assets/images/sushi01_500x746.jpg",
            thumb: "assets/images/sushi_thumb_80x50.jpg"
        },
        {
            large: "assets/images/vintage01_500x671.jpg",
            thumb: "assets/images/vintage_thumb_80x50.jpg"
        },
    ];

    // 配列をシャッフル
    const shuffled = images.sort(() => 0.5 - Math.random());

    // 3つ選ぶ
    const selected = shuffled.slice(0, 3);

    // HTML作る
    let html = "";

    selected.forEach((img, index) => {
        html += `
      <li>
        <a href="${img.large}">
          <img src="${img.thumb}" width="80" height="50" alt="photo${index + 1}">
        </a>
      </li>
    `;
    });

    // 書き換え
    $("#buttons").html(html);

    // クリックしたボタンに対応した画像「ID:large-frame」に大きく表示
    $("#large-frame img").attr("src", selected[0].large);

    $("#buttons").on("click", "a", function (e) {
        e.preventDefault();

        const imgSrc = $(this).attr("href");
        const $img = $("#large-frame img");

        $img.css("opacity", 0);

        setTimeout(() => {
            $img.attr("src", imgSrc);
            $img.css("opacity", 1);
        }, 300);
    });


    // ========================================================================
    // ★ビューアーで拡大写真の切り替え
    // ========================================================================

    $("#buttons a").on("click", function () {
        $("#large-frame img").attr("src", $(this).attr("href"));
        return false;
    });


    //---------------------------------------------------------------------------------------------------------

    // ========================================================================
    //　★プラグイン「slick」の起動とカスタマイズ
    // ========================================================================

    $(".slider").slick({
        autoplay: true,         //自動再生on
        fade: true,             //横スクロールではなくフェードアニメにする
        arrows: false,          //ボタン非表示
        pauseOnHover: true,     //ホバー時の再生停止をon
        pauseOnFocus: true,     //フォーカス時の再生停止をon
        autoplaySpeed: 500,     //自動再生の速度（アニメーションの間隔）を0.5秒に
        speed: 3000             //アニメーションの動き自体の速度を3秒に
    });


});