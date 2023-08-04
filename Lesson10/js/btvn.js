var listNews = [
    {
        id : 1,
        title : "sản phẩm 1",
        quantity:1,
        image : "https://cdn3.dhht.vn/wp-content/uploads/2021/12/NJ0154-80H-399x399.jpg",
        price : 100000
    },
    
    {
        id : 2,
        title : "sản phẩm 2",
        quantity:2,
        image : "https://cdn3.dhht.vn/wp-content/uploads/2021/12/NJ0154-80H-399x399.jpg",
        price : 200000
    },
    
    {
        id : 3,
        title : "sản phẩm 3",
        quantity:3,
        image : "https://cdn3.dhht.vn/wp-content/uploads/2021/12/NJ0154-80H-399x399.jpg",
        price : 300000
    }
]


function setView(obj){
    var view = `           
 <div class="list-item ">
    <div class="item">
        <div class="d-flex justufy-between" id="product-1">
            <div class="img-item w-25">
                <img class="w-100" src="${obj.image}" alt="">
            </div>
            <div class="title-item w-25">
                    <h3>${obj.title}</h3>
            </div>
            <div class="price-item w-25">
                <span id="product-price-${obj.id}" data-price=${obj.price}>${obj.price}</span>  <span>vnd</span>
            </div>
            <div class="quantity-item w-25">
                <button type="button" add-quality-${obj.id} class="btn-add"> Tang 1 </button>
                <span id="product-quantity-${obj.id}">${obj.quantity}</span>
                <button type="button"  id="sub-quality-${obj.quantity}" class="btn-sub"> Giam 1 </button>

            </div>
        </div>
    </div>
</div>`;
$('.card-item .list-news ').append(view);
}


function itemNew(){
    for(let i = 0; i < listNews.length;i ++){
        setView(listNews[i])     
    }
}
itemNew();

function sumPrice(){
    var sum = 0 ;
    var price = 0;
    var quantity = 0;
    var total = 0;
    for (let i = 1 ;i<=listNews.length;i++){
        price = document.querySelector('#product-price-'+ i).attributes.getNamedItem("data-price").value;
        quantity= document.querySelector('#product-quantity-'+ i).textContent;
        total = parseInt(price) * parseInt(quantity);
        sum = sum + total;
    }
    $('.total-price').text(sum);   
}

$('.btn-add').click(function(){
    var quantity = $(this).siblings('span').text();
        quantity = parseInt(quantity) + 1;
        $(this).siblings('span').text(quantity)
        sumPrice()
})
$('.btn-sub').click(function(){
    var quantity = $(this).siblings('span').text();
        quantity = (parseInt(quantity) <1) ?quantity :parseInt(quantity) - 1;
        $(this).siblings('span').text(quantity)
        sumPrice()
})







 






   