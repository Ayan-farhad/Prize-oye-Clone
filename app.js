const arr = [];
let data;
const div = document.querySelector('.render-phones');
const checkout = document.querySelector('#checkout');


axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    data = res.data
    for (let i = 0; i < res.data.length; i++) { 
        div.innerHTML += `<div class="d-flex p-2">
        <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 29rem">
         <img width ='' height ='200px' src= ${res.data[i].image} class="card-img-top" alt="Product image">
         <div class="card-body">
         <h5 class="card-title titleh5">Title: ${res.data[i].title}</h5>
         <p class="card-text">Category: ${res.data[i].category}</p>
         <h5 class="card-title">Price: ${res.data[i].price}</h5>
         <a onclick="addToCart(${i})" class="btn btn-primary">Add to Cart</a>
         </div>
         </div>
         </div>
        `
    }
}).catch((err)=>{
    console.log(err);
})

function addToCart (index){
    // console.log(data[index]);
    arr.push(data[index]);
    console.log(arr);
    Swal.fire({
        title: "Good job!",
        text: "Product added to cart successfully",
        icon: "success"
      });
}



checkout.addEventListener('click' , ()=>{
    localStorage.setItem('items' , JSON.stringify(arr));
    window.location = 'checkout.html';
    // localStorage.removeItem('items')
})

