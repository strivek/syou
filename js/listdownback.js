/**
 * Created by Administrator on 2014/4/25.
 */
$((function () {
    $.fn.listDownBack = function (options) {
        //默认时间
        var settings = $.extend({time: 1}, options);
        return $.each(this, function (options) {
            var $list = $(this).find(" > ul"),
                $link = $(this).find(":first-child");
            listHeight = $list.height(),
                hideElem = {height: 0, overflow: 'hidden'}
            $list.css(hideElem);

            function toggleList(e) {
                if (!$link.hasClass("z-active")) {
                    $link.addClass("z-active");
                    TweenMax.to($list, settings.time, {height: listHeight, display: 'block', ease: Elastic.easeOut});
                } else {
                    $link.removeClass("z-active");
                    TweenMax.to($list, settings.time, {height: 0, ease: Elastic.easeOut});
                }
                e.preventDefault();
            }

            $($link).click(toggleList);
        })
    }
})());