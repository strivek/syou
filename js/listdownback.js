/**
 * Created by Administrator on 2014/4/25.
 */
$((function () {
    $.fn.listDownBack = function (options) {
        //默认时间
        var settings = $.extend({time: 0.6}, options);
        return $.each(this, function (options) {
            var $list = $(this).find(" > ul"),
                $link = $(this).find("> :first-child"),
                hideElem = {overflow: 'hidden', display: 'none'};
            $list.css(hideElem);

            function toggleList(e) {
                var listHeight = $list.height();
                console.log(listHeight);
                if (!$link.hasClass("z-active")) {
                    $link.addClass("z-active");
                    TweenMax.fromTo($list, settings.time, {height: 0}, {height: listHeight, display: 'block', ease: Elastic.easeOut, onComplete: function () {
                        $list.css({height: 'auto'})
                    }});

                } else {
                    $link.removeClass("z-active");
                    TweenMax.to($list, settings.time, {height: 0, ease: Elastic.easeOut, onComplete: function () {
                        $list.css({height: 'auto', display: 'none'});
                    }});
                }
                e.preventDefault();
            }
            $($link).click(toggleList);
        })
    }
})());