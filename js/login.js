
$(function(){

    $('.loginbtn').click(function(){

        var opnerVal = window.opener.document.getElementById("loginIdTitle");
        opnerVal.innerHTML = "로그아웃";
        window.close();
    });
});