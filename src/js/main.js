import $ from 'jquery';
import { callbackify } from 'util';
$(document).ready(function () {
    if(window.location.pathname == "/forum"){
        $('a[href="/forum"]').addClass("active");
    }
    else if(window.location.pathname == "/account"){
        $('a[href="/account"]').addClass("active");
    }
    else{
        $('a[href="/"]').addClass("active");
    }
    $('nav a').click(function(){
        $('nav a').removeClass("active");
        $(this).addClass("active");
    })

});