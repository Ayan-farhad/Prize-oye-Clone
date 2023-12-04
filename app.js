
// const arr = [];
// let data;
// const div = document.querySelector('.render-phones');
// const checkout = document.querySelector('#checkout');

// axios.get('https://fakestoreapi.com/products')
// .then((res)=>{
//     // console.log(res.data);
//     data = res.data
//     for (let i = 0; i < res.data.length; i++) {
//         // console.log(res.data[i]);  
//         div.innerHTML += `
//         <div style="border: 1px solid black;" class="m-5 p-5 rounded">
//         <h1>title: ${res.data[i].title}</h1> <br/>
//         <img width="200px" src="${res.data[i].image}" alt="product-image">
//         <h3>price: ${res.data[i].price}</h3>
//         <button onclick="addToCart(${i})" class="btn btn-primary m-2 btn-lg">Add to cart</button>
//         </div>
//         `
//     }
// }).catch((err)=>{
//     console.log(err);
// })

// function addToCart (index){
//     // console.log(data[index]);
//     arr.push(data[index]);
//     console.log(arr);
// }



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
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

const div = document.querySelector('.render');
for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="p-5 border border-1  rounded-1 shadow-lg m-2">
            <p><span class="font-bold text-lg">brand:</span>  ${phones[i].brand} </p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="btn btn-success m-2">Add to Cart</button>
        

    </div>
    `
    
}

function addToCart (index){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    console.log(phones[index]);
}

function click(){

}