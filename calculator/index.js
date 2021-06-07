'use strict';

$(document).ready(function(){
    //Theme Switcher
    $('#chck1').change(function(){
        if ($(this).is(':checked')) { //If checkbox checked then attribute changed
            $('html').attr('data-theme',"theme1");
        }
    });
    $('#chck2').change(function(){
        if ($(this).is(':checked')) {
            $('html').attr('data-theme',"theme2");
        }
    });
    $('#chck3').change(function(){
        if ($(this).is(':checked')) {
            $('html').attr('data-theme',"theme3");
        }
    });
    //Get Values of Numbers
    $('.calc_btn.get button').click(function(){
        let value = $(this).val();
        let display = $('#display');
        display.val(display.val() + value);
    });
    //Remove Values
    $('.calc_btn.reset button').click(function(){
        $('#display').val('');
    });
    //Remove Values one by one
    $('.calc_btn.del button').click(function(){
        let display = $('#display').val();
        let newVal = display.substring(0, display.length - 1); // extracts the characters from a string, between two specified indices, and returns the new sub string.
        $('#display').val(newVal);
    });
    //Total Calculations
    $('.calc_btn.total button').click(function(){
        let display = $('#display');
        display.val(eval(display.val())); // this method perform evaluations
    });
    //Preventing operators appearing continousaly (+)
    $('.plus button').click(function(){
        let display = $('#display').val();
        if(display.indexOf('++') != -1 ){ //method searches the array for the specified item, and returns its position.
            let newVal = display.substring(0, display.length - 1);
            let displayNew = $('#display');
            displayNew.val(newVal);
        }
    });
    //Preventing operators appearing continousaly (-)
    $('.minus button').click(function(){
        let display = $('#display').val();
        if(display.indexOf('--') != -1 ){
            let newVal = display.substring(0, display.length - 1);
            let displayNew = $('#display');
            displayNew.val(newVal);
        }
    });
    //Preventing operators appearing continousaly (/)
    $('.divide button').click(function(){
        let display = $('#display').val();
        if(display.indexOf('//') != -1 ){
            let newVal = display.substring(0, display.length - 1);
            let displayNew = $('#display');
            displayNew.val(newVal);
        }
    });
    //Preventing operators appearing continousaly (*)
    $('.multiple button').click(function(){
        let display = $('#display').val();
        if(display.indexOf('**') != -1 ){
            let newVal = display.substring(0, display.length - 1);
            let displayNew = $('#display');
            displayNew.val(newVal);
        }
    });
    //Preventing operators appearing continousaly (.)
    $('.dot button').click(function(){
        let display = $('#display').val();
        if(display.indexOf('..') != -1 ){
            let newVal = display.substring(0, display.length - 1);
            let displayNew = $('#display');
            displayNew.val(newVal);
        }
    });

});