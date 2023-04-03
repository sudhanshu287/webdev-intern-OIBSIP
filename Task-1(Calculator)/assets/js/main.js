let allInputButtons=document.querySelectorAll('.inputBtn');
let answerBox=document.getElementById('answerBox');
let del=document.getElementById('delBtn');
let clear=document.getElementById('clearBtn');
let total=document.getElementById('enter');
let sqrtBtn=document.getElementById('sqrtBtn');
let allInputButtonsSpread=[...allInputButtons];

console.log(allInputButtons);
allInputButtonsSpread.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let value=allInputButtons[index].value;
        if(allInputButtons[index].value==="÷"){
            value="/";
        }
        if(allInputButtons[index].value==="×"){
            value="*";
        }
        console.log(value);
        answerBox.value+=value;

    });
});

del.addEventListener('click',()=>{
    let input=answerBox.value;
    answerBox.value=input.substr(0,input.length-1);
})

total.addEventListener('click',()=>{
    try {
        let allInput=answerBox.value;
        console.log(allInput);
    answerBox.value=eval(allInput);
    } catch (error) {
        answerBox.value=error;
        console.log(error);
    }
});

clear.addEventListener('click',()=>{
    answerBox.value="";
});
