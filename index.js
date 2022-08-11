

window.onload = function () {
};

/*    let content = 'SUA IS DEVELOPER.';
    let contenttext = document.getElementById('maintext');
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            contenttext.innerHTML += txt;
            console.log(contenttext);
            i++;
        }
    }
    setInterval(typing, 200);*/


let content = 'SUA IS DEVELOPER.';
let contenttext = document.getElementById('maintext');
let i = 0;

function typing() {
    let txt = content[i++];
    contenttext.innerHTML += txt;
    if (i > content.length) {
        contenttext.textContent = '';
        i = 0;
    }
}

setInterval(typing, 200);

$.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
    data: {},
    success: function (response) {
        let temps = response['temp']
        let cloud = response['clouds']

        $('#temp').append('현재 서울시 기온 : ' + temps + '˚' + `<br>` + '강수 확률 : ' + cloud);
        $('#temp').addClass('text-center');
    }
});

/*
    function chrbtn() {
        $('#sectionwarp').show();
    }

    function closebtn() {
        $('#sectionwarp').hide();
    }
*/

