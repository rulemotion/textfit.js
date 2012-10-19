(function ($) {

    /**
     * Adjusts the element's font size to fit the child textnodes as best as possible.
     * @param settings {Object=}.
     */
    $.fn.textfit = function (settings) {
        
        settings = $.extend({
            minFontSize: 1,
            maxFontSize: Number.MAX_VALUE,
            unit: "px",
            wrappingElement: "span"
        }, settings);
        
        this.each(function () {
            var $el, $wrapper, w, h, i;
            $el = $(this).wrapInner(
                document.createElement(settings.wrappingElement)
            );
            $wrapper = $(settings.wrappingElement, this);
            w = $el.innerWidth();
            h = $el.innerHeight();
            i = settings.minFontSize;
            while (i <= settings.maxFontSize) {
                $el.css("font-size", i + settings.unit);
                if ($wrapper.outerWidth() > w || $wrapper.outerHeight() > h) {
                    $el.css("font-size", (i - 1) + settings.unit);
                    break;
                }
                i++;
            }
            $el.html($wrapper.html());//remove wrapper
        });
        
    };

}(jQuery));
