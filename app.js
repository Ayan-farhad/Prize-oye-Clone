// const arr = [];
// const sameDiv = document.querySelector('.sameDiv');
// const checkOut = document.querySelector('.checkout');

// axios.get('https://fakestoreapi.com/products')
// .then((res)=>{
//     console.log(res.data);
//     data = res.data;
//     for (let i = 0; i < res.data.length; i++){
//         sameDiv.innerHTML += `
//         <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 29rem">
//             <img width ='' height ='200px' src= ${res.data[i].image} class="card-img-top" alt="Product image">
//         <div class="card-body">
//         <h5 class="card-title titleh5">Title: ${res.data[i].title}</h5>
//         <p class="card-text">Category: ${res.data[i].category}</p>
//         <h5 class="card-title">Price: ${res.data[i].price}</h5>
//         <a onclick="addToCart2(${i})" class="btn btn-primary">Add to Cart</a>
//         </div>
//         </div>
//         `
//     }
// })
// .catch((err)=>{
//     console.log(err);
// })

// let data;

// function addToCart2(index){
//     console.log(data[index]);
//     arr.push(data[index])
//     console.log(arr);
//     Swal.fire({
//         title: "Good job!",
//         text: "Product added to cart successfully!",
//         icon: "success"
//       });
// }

// checkOut.addEventListener('click' , ()=>{
//     localStorage.setItem('items' , JSON.stringify(arr));
//     window.location = 'home.html';
//     // localStorage.removeItem('items');
// })


// -------------------------------------render------------------------------------------------

const phones = [
        {
            brand: 'Samsung',
            model: 'S20',
            ram: 8,
            rom: 256,
            camera: '20 megapixel',
            price: 15000
        },
        {
            brand: 'Xiomi',
            model: 'note10',
            ram: 4,
            rom: 64,
            camera: '10 megapixel',
            price: 15000
        },
        {
            brand: 'Infinix',
            model: 'z10',
            ram: 2,
            rom: 16,
            camera: '5 megapixel',
            price: 15000
        },
        {
            brand: 'Tecno',
            model: 'spark10',
            ram: 12,
            rom: 512,
            camera: '25 megapixel',
            price: 15000
        },
        {
            brand: 'Iphone',
            model: '14',
            ram: 4,
            rom: 1024,
            camera: '30 megapixel',
            price: 15000
        },
        {
            brand: 'Oppo',
            model: 'F11',
            ram: 8,
            rom: 256,
            camera: '20 megapixel',
            price: 15000
        },
        {
            brand: 'Vivo',
            model: 'y20',
            ram: 4,
            rom: 64,
            camera: '8 megapixel',
            price: 15000
        },
    ]

const div = document.querySelector(".render")

for(let i = 0; i < phones.length; i++){
    div.innerHTML +=` 
    <div class="p-5 border border-1 rounded-1 shadow-lg m-2 ">
    <p><span class="font-bold text-lg">Brand:</span>  ${phones[i].brand} </p>
    <p><span class="font-bold text-lg">Model:</span>  ${phones[i].model} </p>
    <p><span class="font-bold text-lg">Ram:</span>  ${phones[i].ram} </p>
    <p><span class="font-bold text-lg">Rom:</span>  ${phones[i].rom} </p>
    <p><span class="font-bold text-lg">Camera:</span>  ${phones[i].camera} </p>
    <p><span class="font-bold text-lg">Price:</span>  ${phones[i].price} </p>
    <button onclick='addToCart(${i})' class="btn btn-success m-2">Add to Cart</button>
    `
}

function addToCart(index){
    console.log(phones[index]);
}

function Checkout(){
    window.location = "checkout.html";
    localStorage.setItem('items' , JSON.stringify(phones));
}