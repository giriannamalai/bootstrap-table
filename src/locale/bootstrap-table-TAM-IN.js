/**
 * Bootstrap Table Tamil translation for Indians
 * Author: Giri Annamalai <giriannamalai@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['tam-in'] = {
        formatLoadingMessage: function () {
            return 'தகவல்கள் யேற்றம் நடைபெறுகிறது, காத்திருக்கவும்...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' பக்க எண்';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'பக்கம் ' + pageFrom + 'லிருந்து பக்கம்' + pageTo + ' பதிவுகள் வரை,' + totalRows + ' பதிவுகள்';
        },
        formatSearch: function () {
            return 'தேடு';
        },
        formatNoMatches: function () {
            return 'பொறுத்தமான பதிவுகள் கிடைக்கவில்லை';
        },
        formatPaginationSwitch: function () {
            return 'பதிவுகள் பக்க என்னை மறைக்க / தெரியவைக்க';
        },
        formatRefresh: function () {
            return 'புதுப்பிப்பு';
        },
        formatToggle: function () {
            return 'மாற்று';
        },
        formatColumns: function () {
            return 'பத்திகள்';
        },
        formatAllRows: function () {
            return 'எல்லாம்';
        },
        formatExport: function () {
            return 'பதிவுகளை வேறு வடிவாததிற்கு மாற்ற';
        },
        formatClearFilters: function () {
            return 'வாடி கட்டிகளைநீக்கு';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tam-in']);

})(jQuery);
