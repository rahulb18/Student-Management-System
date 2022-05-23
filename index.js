
function Student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-Web${b}`;
}

function storeData(){
    event.preventDefault();

    let form=document.getElementById("studentData");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    let s1= new Student(name,course,unit,image,batch);

    let data=JSON.parse(localStorage.getItem("students")) || [];

    data.push(s1);

    localStorage.setItem("students",JSON.stringify(data));

    let na=document.getElementById("name");
    na.value=null;

    let co=document.getElementById("course");
    co.value=null;

    let un=document.getElementById("unit");
    un.value=null;

    let im=document.getElementById("image");
    im.value=null;

    let ba=document.getElementById("batch");
    ba.value=null;
    
    // console.log(s1);
}

function calculate(){

    let data=JSON.parse(localStorage.getItem("students")) || [];

    let obj={};

    for(let i=0;i<data.length;i++)
    {
        if(!obj[data[i].batch])
        {
            obj[data[i].batch]=1;
        }
        else
        {
            obj[data[i].batch]++;
        }
    }

    // var str = JSON.stringify(obj);

    // document.getElementById("info").innerText=str;

    // obj.forEach(function(el){
    //     let div=document.createElement("div");
    //     let h5=document.createElement("h5");
    //     h5.innerText=el;

    //     div.append(h5);
    //     info.append(div);
    // });

    // console.log(obj);
}

calculate();