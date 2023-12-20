var input=document.getElementById('input');
var table=document.getElementById('table');
// console.log(input);
// console.log(table);
var data=JSON.parse(localStorage.getItem('Data'))||[];
function isempty()
{
    if(data.length==0)
        table.innerHTML=`<h1>No Data Found!!!</h1>`
    else    
        showdata();
}

function add()
{
    if(input.value!='')
    {
        data.push(input.value);
        localStorage.setItem('Data',JSON.stringify(data));
        input.value='';
        showdata()
    }
}

function showdata(selectedindex=-1)
{
    table.innerHTML='';
    var thead=table.createTHead();
    var hrow=thead.insertRow();
    var hc1=hrow.insertCell(0);
    var hc2=hrow.insertCell(1);
    var hc3=hrow.insertCell(2);
    hc1.innerHTML='<b>Index No.</b>';
    hc2.innerHTML='<b>Tasks</b>';
    hc3.innerHTML='<b>Operations</b>';

    data.map((e,i)=>{
        var row=table.insertRow();
        var c1=row.insertCell(0);
        var c2=row.insertCell(1);
        var c3=row.insertCell(2);
        c1.innerHTML=i+1;
        if(selectedindex==i)
            c2.innerHTML=`<input type="text" placeholder=${e} id="newinput">&emsp;<button onclick="save(${i})" class="b3">Save</button>`;
        else
            c2.innerHTML=e;
        c3.innerHTML=`<button onclick="edit(${i})" class="b1">Edit</button>&emsp;<button onclick="del(${i})" class="b2">Delete</button>`;
    })
}

function save(index)
{
    if(newinput.value!='')
    {
        newinput=document.getElementById('newinput');
        data.splice(index,1,newinput.value)
        localStorage.setItem('Data',JSON.stringify(data));
        showdata()
    }
}

function edit(index)
{
    showdata(index);
}

function del(index)
{
    data.splice(index,1);
    var newdata=JSON.stringify(data);
    localStorage.setItem('Data',JSON.stringify(newdata));
    isempty()
}

isempty()