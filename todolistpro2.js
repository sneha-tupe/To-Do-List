const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')
function addTask(){
    if(inputBox.value===""){
        alert("Enter Something..")
    }
    else{
        let li=document.createElement('li') //<li></li>
        li.innerHTML=inputBox.value
        //<li>HTML</li>
        listContainer.appendChild(li)

        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputBox.value=""
    saveData();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
})
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showData();