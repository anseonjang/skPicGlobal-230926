$(function () {

    // ● logo,topBtn 최상단 
    $(".logo, .topBtn").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 400); // 0.4초
    });


    // ● arrow 버튼이 500px 도달시 나타남
    // 안보이던 화살표가 500px 이상으로 스크롤이 내려오면 나타나고 500px 이하일때 사라짐 
    // window => 웹브라우저 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".topBtn").fadeIn();
        } else {
            $(".topBtn").fadeOut();
        }
    });

    // ● 메뉴 클릭시 스크롤 애니메이션 
    // a[href^='#'] => #으로 시작하는 a 요소 선택시 사용
    $("ul.menu li a[href^='#']").on("click", function () {
        // 클릭한 메뉴 항목의 href 속성값을 target에 넣어줌
        var target = $(this).attr("href");
        // 해당 섹션의 상단 위치를 계산하여 가져옴
        var targetPosition = $(target).offset().top;
        // 스크롤 애니메이션 설정
        $("html,body").animate({
            // 스크롤 위치를 클릭한 메뉴 항목의 연결된 섹션으로 이동
            scrollTop: targetPosition
        }, 800); // 0.8초

        // ● 클릭한 메뉴 항목에 .active 추가 
        $("ul.menu li a").removeClass("active");
        // 모든 a에 .active 제거 
        $(this).addClass("active");
        // 클릭한 메뉴만 .active 추가

    });




    // ● tab menu 
    'use strict'; // 엄격모드 활성화
    $(".info-list li").click(function () {
        // 현재 클릭한 li에 selected 추가하고 형제요소들의 selected 삭제
        $(this).addClass("selected").siblings("li").removeClass("selected");
        // 컨텐츠 div 요소 전체 숨김 
        $(".info-content div").hide();
        // 현재 클릭한 li 요소의 data-class 속성값을 가져와 해당 클래스명을 가진 div 나타나게 해줌 
        $("." + $(this).data("class")).fadeIn();
    });


    // ● toggle btn 
    var $menu = $(".menu");
    var $toggleBtn = $(".toggleBtn");
    var menuVisible = false;

    // 토글 클릭시 이벤트
    $toggleBtn.click(function (e) {
        e.stopPropagation();
        // 버튼 클릭시 이벤트가 상위로 전파되는 것 방지 
        menuVisible = !menuVisible;
        // 메뉴 표시 여부 반전 (켜짐 <-> 꺼짐)
        if (menuVisible) {
            $menu.show(); // 메뉴를 화면에 표시         
        } else {
            $menu.hide(); // 메뉴 숨김 
        }
    });

    // ● 문서 클릭시 메뉴 닫힘

    $(document).click(function (e) {
        // 메뉴가 현재 표시중이고, 클릭한 요소가 메뉴 내부 요소가 아닌 경우
        if (menuVisible && !$(e.target).closest(".menu").length) {
            $menu.hide(); // 메뉴를 화면에서 숨김 
            menuVisible = false; // 메뉴가 숨겨짐을 표시 
        }
    });


    // e.target => 클릭 이벤트가 발생한 요소를 나타냄. (=this)
    //  !$ -> NOT 연산자 
    // ! => true를 false로 false를 true로 바꾸는 역할을 함 
    // $ -> 반전시키는 역할 (부울값을!! Boolean) => 참과 거짓 형태의 데이터 유형
    // .closest() - 선택한 요소에서 가장 가까운 상위요소를 찾는데 사용 (부모, 조상 선택)
    // var menuVisible = false;  거짓 - (여기서는 menuVisible 변수에 할당되는 초기값을 의미, 
    // 메뉴의 표시 여부를 추적하는데 사용
    // 코드의 실행 초기에 메뉴가 숨겨져있음을 나타냄. 
    // 이것으로, 코드에 변수값을 변경하여 메뉴를 표시하거나 숨길 수 있음)

    // ● 모바일 아코디언

    var allDT = $("dl.accordion dt");
    var allDd = $("dl.accordion dd");
    allDd.slideUp(300);
    allDT.click(function () {
        var clickDt = $(this);
        // .next() = 동생
        var choiceDd = clickDt.next();
        // 선택한 요소 숨겨져있는지 확인
        if (choiceDd.css("display") == "none") {
            // dd 모두 닫아줌
            allDd.slideUp(300);
            // 클릭한 요소의 내용 열어줌
            choiceDd.slideDown(300);
            allDT.removeClass("selected"); // dt 요소의 선택 클래스 제거 
            allDT.css("background", ""); // dt 요소의 배경색 초기화

            // 선택한 dt 요소에 색상 변경 
            clickDt.addClass("selected"); // 클릭한 dt 요소에 선택 클래스 추가 
            clickDt.css("background-color","#e0002b"); // 배경색 변경 

            
        } else {
            // 열려있으면 닫기
            choiceDd.slideUp(300);
            clickDt.removeClass("selected"); // 클릭한 dt 요소의 선택 클래스 제거
            clickDt.css("background-color", ""); // 배경색 초기화
        }
    
    });

});