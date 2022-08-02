$(function () {
    $(".card").hide();
    var array = [];
    var list = document.getElementsByClassName('card');

    for (var i = 0; i < list.length; i++) {
        array.push(list[i]);
    }
    var visiArray = [];
    visiArray = array.slice(0, 6);

    for (var i = 0; i < visiArray.length; i++) {
        visiArray[i].style.display = 'block';
    }
    var infoHight = document.getElementById('infomation');
    var load = document.getElementsByClassName('info-btn')[0];
    
    load.addEventListener('click', function (e) {
        e.preventDefault();
        var hiddenArray = [];
        hiddenArray = array.slice(6, 10);

        for (var i = 0; i < hiddenArray.length; i++) {
            hiddenArray[i].style.display = 'block';
        }

        infoHight.style.height = '2692px';
    });
});