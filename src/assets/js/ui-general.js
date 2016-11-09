var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var isResize = function(){
    var sw = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

    var $window = $(window);

    var isChange = false;

    $(window).on('resize', function(){
        if($window.width() !== sw){
            sw = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            return isChange = true;
        }
    )};
};

function settingsModal(){
    if (typeof window.verifyScrollbarWidth == "undefined") {
        window.verifyScrollbarWidth = (window.innerWidth - $(window).width()) + 'px';
        window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
        $(window.verifyScrollbarWidth).appendTo($('head'));
    }

    $(document).on('hidden.bs.modal', '.modal', function (){
        if($('.modal:visible').length){
            $(document.body).addClass('modal-open');
        }else{
            $(document.body).removeClass('modal-open');
            $(document.body).css({'padding-right': ''});
        }
    });
}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(this).height() - $dialog.height()) / 2;
    offset = offset > 0 ? offset : 15;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$(document).ready(function(){

    settingsModal();

    $('.modal').on('show.bs.modal', centerModal);
});

$(window).resize(function(){
    $('.modal:visible').each(centerModal);
});