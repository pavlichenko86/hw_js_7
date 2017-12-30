$(document).ready(function(){


//Задача №1 - 3

const plus = document.getElementById("plus");
const wrap = document.getElementById("inp-wrap");
const count = document.getElementsByTagName("input");
const get = document.getElementById("sub");
const res = document.getElementById("all-text");
let minB;
let n = 2;
let k = 1;
let arr;

plus.addEventListener("click", addInp);
get.addEventListener("click", text);

function addInp(){
    if(k < 5){
        const inp = document.createElement('div');
        const input = document.createElement('input');
        const minus = document.createElement('div');
        
        inp.style.position = "relative";
        input.setAttribute("type", "text");
        input.setAttribute("name", "name" + n);
        wrap.appendChild(inp).appendChild(input);
        minB = wrap.appendChild(inp).appendChild(minus);
        minB.innerHTML = "-";
        minB.classList.add('minusN');
        minB.id = "minus" + k;
        return n = n + 1, k = k + 1, minB.addEventListener("click", delInp);
    } else {
        return false;
    }

}

function text(){
    arr = new Array;
    for(let i = 0; i < count.length; i++){
        count[i].parentElement.classList.remove('empty');
        count[i].style.borderColor = "inherit";
        if(count[i].getAttribute("type") === "text" && count[i].value === ""){
            arr[arr.length] = count[i];
        }
    }
    checkArr();
}

function checkArr(){
    if(arr.length > 0){
        findInp();
    } else{
        myText();
    }
}

function findInp(){
    for(let i = 0; i < arr.length; i++){
        arr[i].style.borderColor = "red";
        arr[i].parentElement.classList.add('empty');
    }
}
function myText(){
    let radio1 = document.getElementById("rad1");
    let radio2 = document.getElementById("rad2");
    let radio3 = document.getElementById("rad3");
    
    if(radio1.checked){
        getTextOdd();
    } else if(radio2.checked){
        getTextEven();
    } else if(radio3.checked){
        getText();
    }
}

function getText(){
    for(let i = 0; i < count.length; i++){
        if(count[i].getAttribute("type") === "text" && count[i].value != ""){
            let val = res.innerHTML;
            res.innerHTML = val + count[i].value + '\n';
        }
    }
}
function getTextOdd(){
    for(let v = 0; v < count.length; v = v + 2){
        if(count[v].getAttribute("type") === "text" && count[v].value != ""){
            let val = res.innerHTML;
            res.innerHTML = val + count[v].value + '\n';
        }
    }
}
function getTextEven(){
    for(let v = 1; v < count.length; v = v + 2){
        if(count[v].getAttribute("type") === "text" && count[v].value != ""){
            let val = res.innerHTML;
            res.innerHTML = val + count[v].value + '\n';
        }
    }
}
function delInp(){
    console.log(this.parentElement);
    this.parentElement.remove();
    return k = k - 1;
}



//Задача №4
const btn = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const win1 = document.getElementById("win1");
const popBtn = document.getElementsByClassName("popBtn");
const textPop = document.getElementById("text-pop");
let textBtn;

btn.addEventListener('click', showPop);
win1.addEventListener('click', hidePop);

function showPop(){
    overlay.classList.add('overlay');
    win1.classList.add('win2');
}
function hidePop(event){
    let textBtn = event.target.innerHTML;
    
    overlay.classList.remove('overlay');
    win1.classList.remove('win2');
    textPop.innerHTML = "Вы выбрали опцию " + parseInt(textBtn.replace(/\D+/g,""));
}


//Задача №5

let list = document.getElementById('list');
let li = document.getElementsByTagName('li');
let listInp = document.getElementById('listInp');
let listBtn = document.getElementById('listBtn');

list.addEventListener('click', redLi);
listBtn.addEventListener('click', addLi);

function redLi(event){
    let isi = event.target;
    if(isi.classList.contains('red')){
        isi.classList.remove('red');
    } else{
        isi.classList.add('red');
    }
}
function addLi(){
    event.preventDefault();
    console.log(listInp.value);
    let newLi = document.createElement('li')
    list.appendChild(newLi).innerHTML = listInp.value;
}

//Задача №6

const wrapImg = document.getElementById('wrap-img');
const hidden = document.getElementById('hidden');

wrapImg.addEventListener('mouseover', showBlock);
wrapImg.addEventListener('mouseout', time);


function showBlock(){
    hidden.style.transition = "all 1s";
    hidden.style.right = "0";
}
function time(){
    setTimeout(hideBlock, 2000);
}
function hideBlock(){
    hidden.style.transition = "all 1s";
    hidden.style.right = "-300px";
}


//Задача №7, 8
$('.img-info').hover(function(){
    $('.hidden7').css('display', 'block');
    if($(this).attr('src')){
        $('.hidden7').append('<p>SRC: ' + $(this).attr('src') + '</p>');
    } else if($(this).attr('src') == undefined || $(this).attr('src') === ''){
        $('.hidden7').append('<p style="color:red">SRC: src нет</p>');
    }
    if($(this).attr('alt')){
        $('.hidden7').append('<p>ALT: ' + $(this).attr('alt') + '</p>');
    } else if($(this).attr('alt') == undefined || $(this).attr('alt') === ''){
        $('.hidden7').append('<p style="color:red">ALT: alt нет</p>');
        $(this).css('border', '5px solid red');
    }
}, function(){});




//Задача №9-10


for(let i = 1; i < 7; i++){
    if($(' h'+ i).length === 0){
        $('#wrapH').append('<p>Заголовокa h'+ i + ': ' + 'нет' + '</p>');
    } else{
        $('#wrapH').append('<p>Заголовок h'+ i + ': ' + $(' h'+ i).length + ' штук' + '</p>');
    }
}

if($('title')){
        $('#wrapH').append('<p>title' + ': ' + $('title').text() + '. Длинна строки: ' + $('title').text().length + ' символов</p>');
} else{
    $('#wrapH').append('<p>нет названия</p>');
}

if($('meta[name="description"]').attr('content')){
        $('#wrapH').append('<p>description' + ': ' + $('meta[name="description"]').attr('content') + '. Длинна строки: ' + $('meta[name="description"]').attr('content').length + ' символов</p>');
} else{
    $('#wrapH').append('<p>нет описания</p>');
}

if($('meta[name="keywords"]').attr('content')){
        $('#wrapH').append('<p>keywords' + ': ' + $('meta[name="keywords"]').attr('content') + '</p>');
} else{
    $('#wrapH').append('<p>нет ключевых слов</p>');
}




});