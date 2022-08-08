if (window.matchMedia("(min-width: 1281px) and (max-width: 1920px)").matches) {
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
        var load = document.getElementsByClassName('button')[0];

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            hiddenArray = array.slice(6, 10);

            for (var i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].style.display = 'block';
            }
            load.style.display = 'none';
            infoHight.style.height = '2692px';
        });
    });
}

if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches) {
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
        var load = document.getElementsByClassName('button')[0];

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            hiddenArray = array.slice(6, 10);

            for (var i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].style.display = 'block';
            }
            load.style.display = 'none';
            infoHight.style.height = '2982px';
        });
    });
}

if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
        $(".card").hide();
        var array = [];
        var list = document.getElementsByClassName('card');

        for (var i = 0; i < list.length; i++) {
            array.push(list[i]);
        }
        var visiArray = [];
        visiArray = array.slice(0, 2);

        for (var i = 0; i < visiArray.length; i++) {
            visiArray[i].style.display = 'block';
        }
        var infoHight = document.getElementById('infomation');
        var load = document.getElementsByClassName('button')[0];
        var count = 0

        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            console.log(count);

            if(count == 0){
                hiddenArray = array.slice(2, 4);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '2190px';
            }
            else if(count == 2){
                hiddenArray = array.slice(4, 6);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '3118px';
            }
            else if(count == 4){
                hiddenArray = array.slice(6, 8);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '4042px';
            }
            else if(count == 6){
                hiddenArray = array.slice(8, 10);

                for (var i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.display = 'block';
                    count += 1;
                }
                infoHight.style.height = '4970px';
                load.style.display = 'none';
            }
        });
    });
}