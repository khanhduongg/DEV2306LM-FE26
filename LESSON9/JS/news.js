

var listNews = [
    {
        id : 1,
        title : "tin tức số 1",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 2,
        title : "tin tức số 2",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 3,
        title : "tin tức số 3",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 4,
        title : "demo",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 5,
        title : "demo 2",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 6,
        title : "tin 6",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    },
    
    {
        id : 7,
        title : "tin 7",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiê",
        image : "http://acatea.vn/Content/uploads/news/16_%20Am%20tra%203%20coc.png",
    }
]


function setView(tsst){
    var view = `<div class="news-item">
                    <div class="news-img">
                        <img class="w-100" src="${tsst.image}" alt="item">
                    </div>
                    <div class="news-conten">
                        <h3 class="news-title">${tsst.title}</h3>
                        <p class="news-content">${tsst.content}</p>
                    </div>

                </div>`;

    $('.news-page-content .list-news').append(view);
}

function setListNews(array, search){
    var count = array.length ;
    $('.news-page-content .list-news').html('');
    for(let i = 0 ; i < count ; i++){
        // let test = listNews[i].image
        if(array[i].title.toLowerCase().includes(search.toLowerCase()) || search == ""){
            setView(array[i])
        }
    }
}
function searchItem(){
    debugger;
    // var title = document.getElementById('search').value;
    var title = $('.form-search #search').val(); //  $('.form-search #search-1').val(); 
    console.log("search: ", title);
    setListNews(listNews, title);
    // ==> syntax: $ + ('<selector>') + . + action(param)
}
setListNews(listNews, "");

var pageIndex  = 1;
var pageSize = 3;
// // 1: 0 1 2; 0          => (pageIndex - 1)* pageSize  || pageIndex * pageSize
// // 2: 3 4 5;
// // 3: 6 

// var start = pageSize * ( pageIndex - 1 ) => 0
// var end = pageSize * pageIndex - 1  => 2
// function setPageNews(array, pageNumber){
//     var count = array.length ;
//     var start = (pageNumber - 1)* pageSize;
//     var end =  pageNumber * pageSize;
//     $('.news-page-content .list-news').html('');
//     for(let i = start; (i < end) && (i< count+1) ; i++){
//         setView(array[i])
//     }
// }
// function changePageNumber(pageNumber){
//     setPageNews(listNews, pageNumber)
// }


var list_Page = document.querySelectorAll('.number_page')
    console.log(list_Page)
for(let i = 0; i<list_Page.length; i++) {
    list_Page[i].onclick = () => {
        const start = pageSize * (list_Page[i].textContent - 1 )
        const end = pageSize * list_Page[i].textContent - 1
        console.log(start, end)
        const list_Item = document.querySelectorAll('.news-item')
        for(let i = 0; i<list_Item.length; i++) {
            if(i >= start && i<= end) {
                list_Item[i].style.display = 'block'
            }
            else {
                list_Item[i].style.display = 'none'
            }
        }
    }

}

const countPage = listNews.length
console.log(Math.ceil(countPage / 3))
