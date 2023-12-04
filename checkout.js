// const data = localStorage.getItem('items')
// const items = JSON.parse(data)

// console.log(items);


// const div = document.querySelector('.render');

// function renderItems(){
//     if(items.length > 0){
//         div.innerHTML = ''
//     for (let i = 0; i < items.length; i++) {
//         div.innerHTML +=` 
//         <div class="p-5 border border-1 rounded-1 shadow-lg m-2 ">
//         <p><span class="font-bold text-lg">Brand:</span>  ${phones[i].brand} </p>
//         <p><span class="font-bold text-lg">Model:</span>  ${phones[i].model} </p>
//         <p><span class="font-bold text-lg">Ram:</span>  ${phones[i].ram} </p>
//         <p><span class="font-bold text-lg">Rom:</span>  ${phones[i].rom} </p>
//         <p><span class="font-bold text-lg">Camera:</span>  ${phones[i].camera} </p>
//         <p><span class="font-bold text-lg">Price:</span>  ${phones[i].price} </p>
//         <button onclick='deleteItem(${i})' class="btn btn-success m-2">Delete</button>
//         `
//     }
//     }else{
//         div.innerHTML = 'no item found'
//     }
// }
// document.write(data)

// // renderItems()
// function deleteItem(index){
//     items.splice(index , 1);
//     renderItems()
//     localStorage.setItem('items' , items);

// }

const data = localStorage.getItem('items');
const items = JSON.parse(data);
const div = document.querySelector('.render');

function renderItems() {
    if (items && items.length > 0) {
        div.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            div.innerHTML += `
                <div class="p-5 border border-1 rounded-1 shadow-lg m-2 ">
                    <p><span class="font-bold text-lg">Brand:</span> ${items[i].brand} </p>
                    <p><span class="font-bold text-lg">Model:</span> ${items[i].model} </p>
                    <p><span class="font-bold text-lg">Ram:</span> ${items[i].ram} </p>
                    <p><span class="font-bold text-lg">Rom:</span> ${items[i].rom} </p>
                    <p><span class="font-bold text-lg">Camera:</span> ${items[i].camera} </p>
                    <p><span class="font-bold text-lg">Price:</span> ${items[i].price} </p>
                    <button onclick='deleteItem(${i})' class="btn btn-success m-2">Delete</button>
                </div>`;
        }
    } else {
        div.innerHTML = 'No items found';
    }
}

renderItems();  

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();  
    localStorage.setItem('items', JSON.stringify(items));
}
