const elements = document.getElementsByClassName('btn');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');

for(let i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",()=> {
        input.value += elements[i].innerHTML;
    });
}

function calc() {
    let str = input.value;
    input.value = eval(str);
}

submit.addEventListener("click", calc);
clear.addEventListener('click',()=>{
    input.value = '';
});

