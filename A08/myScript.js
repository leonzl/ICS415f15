$(document).ready(function() {

    $('.faq_question').click(function() {
        var myString = $(this).closest('.faq').find('.faq_question')[0].innerHTML;
        if ($(this).parent().is('.open')){
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'}, 500);
            $(this).closest('.faq').removeClass('open');
            $(this).closest('.faq').find('.faq_question')[0].innerHTML = myString = myString.substr(0, myString.length - 1) + '+';;
        }
        else{
            var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
            $(this).closest('.faq').addClass('open');
            $(this).closest('.faq').find('.faq_question')[0].innerHTML = myString = myString.substr(0, myString.length - 1) + '-';;
        }
    });

    function countURLS(){
        /**
        var count = 0;
        var links = new Array();
        var url = document.getElementById("url").value;
        document.getElementById("messages").innerHTML = messages;
        return false;
         **/
        var links = document.getElementsByTagName('a');
        var i=0;
        for (var link in links){i++;}
        return i;
        $('#amount')[0].innerHTML = i;
    }
});