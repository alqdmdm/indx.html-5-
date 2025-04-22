let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//console.log(title,price,taxes,ads,discount,total,count,category,submit)





//get total
function getTotal()
{
    //console.log('done')
    if (price.value != '') {
    let result = (+price.value + +taxes.value + +ads.value) 
    - +discount.value; 
    total.innerHTML = result;
    total.style.background ='#040';
    }else{
        total.innerHTML ='';
        total.style.background ='#a00d02';
    
    }
}








//creat produc
let datePro;
if(localStorage.product != null){
    datePro =JSON.parse(localStorage.product)
}else{
    datePro =[];
}



submit.onclick = function(){
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    }
    //save localstorge
    datePro.push(newPro)
    localStorage.setItem('product',  JSON.stringify(datePro))
    clearDate()
    showDate()
}
    





//clear inputs
function clearDate(){
title.value = '';
price.value ='';
taxes.value ='';
ads.value ='';
discount.value ='';
total.innerHTML ='';
count.value ='';
category.value ='';
}
//read
function showDate(){
    let table ='';
for(let i = 0; i < datePro.length;i++){
table +=`
<tr>
<td>${i}</td>
<td>${datePro[i].title}</td>
<td>$${datePro[i].price}</td>
<td>${datePro[i].taxes}</td>
<td>${datePro[i].ads}</td>
<td>${datePro[i].discount}</td>
<td>${datePro[i].total}</td>
<td>${datePro[i].category}</td>
<td><button id="update">update</button></td>
<td><button id="delete">delete</button></td>
</tr>
 
`
          
}
    document.getElementById('tbody').innerHTML =table;
}
showDate()
//count
//delete
//update
//search
//clean date