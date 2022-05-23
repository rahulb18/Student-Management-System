

function append(){

    let data=JSON.parse(localStorage.getItem("students")) || [];
    let tbody=document.getElementById("tbody");
    tbody.innerHTML=null;

    data.forEach(function(el,index){
        
        let tr=document.createElement("tr");

        var td1=document.createElement("td");
        let img=document.createElement("img");
        img.src=el.image;
        td1.append(img);
        
        var td2=document.createElement("td");
        td2.innerText=el.name;

        var td3=document.createElement("td");
        td3.innerText=el.course;

        var td4=document.createElement("td");
        td4.innerText=el.unit;

        var td5=document.createElement("td");
        td5.innerText=el.batch;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){
            remove(index);
        });

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    });
}

    append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("students")) || [];

    let newData=data.filter(function(el,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("students")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else
        {
            return i!==index;
        }
        
    });

    localStorage.setItem("students",JSON.stringify(newData));
    append();

    console.log(newData);
}
    
