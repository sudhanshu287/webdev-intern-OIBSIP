const inputBox=document.getElementById('inputBox');
const listContainer=document.getElementById('list-container');

const addTask=()=>{
    if(inputBox.value===''){
        alert('Add Some task');
    }
    else{
        let li=document.createElement('li');
      
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

inputBox.addEventListener('keydown',(e)=>{ 
    if(e.key === 'Enter'){
        addTask();
    }
})  
listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

const saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);

}

const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();