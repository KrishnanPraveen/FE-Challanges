"use strict";

$(document).ready(function(){
    $('.share_btn').click(function(){
        $(this).toggleClass('share');
        $('.share_icons').toggleClass('show');
    });
});