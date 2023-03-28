
const pls = document.querySelector('#plus');
const min = document.querySelector('#minus');
const mul = document.querySelector('#multiplier');
const div = document.querySelector('#divide');


pls.onclick = function(){ // 더하기 기능
    const a = parseInt(document.querySelector('#num1').value); //input박스 안의 값을 가져오기 위해서는 .value를 사용
    const b= parseInt(document.querySelector('#num2').value);
    const result = a+b;
    document.querySelector('#res').innerHTML = `${result}`;
}

min.onclick = function(){ //빼기 기능
    const a = parseInt(document.querySelector('#num1').value);
    const b= parseInt(document.querySelector('#num2').value);
    const result = a-b;
    document.querySelector('#res').innerHTML = `${result}`;
}

mul.onclick = function(){ // 곱하기 기능
    const a = parseInt(document.querySelector('#num1').value);
    const b= parseInt(document.querySelector('#num2').value);
    const result = a*b;
    document.querySelector('#res').innerHTML = `${result}`;
}

div.onclick = function(){ //나누기 기능
    const a = parseInt(document.querySelector('#num1').value);
    const b= parseInt(document.querySelector('#num2').value);
    const result = a/b;
    document.querySelector('#res').innerHTML = `${result}`;
}
