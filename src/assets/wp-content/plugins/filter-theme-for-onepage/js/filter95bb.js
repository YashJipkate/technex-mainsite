;(function($, window, document, undefined) {
        "use strict";

    	/*Change menu slug function*/
        function changeMenuSlug(pageSelector, color) {
            $(pageSelector).find('#about-' + color).attr('id', 'about');
            $(pageSelector).find('#events-' + color).attr('id', 'events');
            $(pageSelector).find('#reservation-' + color).attr('id', 'reservation');
            $(pageSelector).find('#news-' + color).attr('id', 'news');
        }

        $(window).on('load', function() {
            changeMenuSlug('.page-id-323', 'red');
            changeMenuSlug('.page-id-330', 'pink');
        });

})(jQuery, window, document);
