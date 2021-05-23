var listLenght = 0;



function add(){
    
    var inp= document.getElementById('text').value;
    if(inp == ""){
        return
    }else{
        listLenght += 1;
    console.log(inp);
    var listitem = document.createElement('ul');
    listitem.setAttribute('id','list');
    listitem.setAttribute('class','list')
    listitem.innerHTML = '<li>'+inp+'</li>';
    document.getElementById('doList').appendChild(listitem);
     document.getElementById('text').value = "";
    }

}

function clears(){
    listLenght -= 1;
    document.getElementById('list').remove();
}

function clearAll(){
    for(var i=0 ; i< listLenght; i++){
        document.getElementById('list').remove(); 
    }

}