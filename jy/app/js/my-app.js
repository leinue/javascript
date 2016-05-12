// Initialize your app
var myApp = new Framework7({
    ajaxLinks: 'a.back',
    router: false
});

// Export selectors engine
var $$ = Dom7;

$$('a.back, button.back').on('click', function() {

    history.go(-1);

});

// Add views
var view1 = myApp.addView('#subjects', {
	dynamicNavbar: true
});

var view2 = myApp.addView('#profile', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var mySwiper = myApp.swiper('.swiper-slow', {
    speed: 400,
    spaceBetween: 100,
    pagination: '.swiper-slow .swiper-pagination'
});

$$('#btn-logout').on('click', function() {
	 var buttons = [
        {
            text: '确认',
            bold: true,
            onClick: function () {
                myApp.alert('退出成功', '退出系统确认');
            }
        },
        {
            text: '取消',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

