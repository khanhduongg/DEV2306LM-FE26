

//function
//DOM - TƯƠNG TÁC HTML
// -Object :
//        => array object : Json


// Buổi 1 về js
//Biến
//Toán tử
//array
//cấu trúc rẽ nhánh ,vòng lặp
//sử dụng hàm

// --------------------------------------------------------------

//Buôi 2 về js
//hàm -function
//Chia nhỏ function các tác vụ 
//                  -Dễ kiểm soát code ,nâng cấp
                    // -Dễ đặt tên ,tái sử dụng
//


// tính tổng hai số
// function sum (a , b){
//     var total =  parseInt(a) + parseInt(b);
//     console.log('tổng a + b = ',total);
// }
// sum( 10 ,'200');

// bien toan cục & bien cuc bo
// Cú pháp: khai báo (function) ; cách sử dụng


// var array = [ 1, 2 ,3 ,4 , 5, 6 , 7, 8, 9,10];
// // yêu cầu viết hàm tính tổng các phần tử ở vị trí chia hết cho 3 trong mảng array đã cho trước
// function sum(array){
//     var sum = 0
//     for( let i = 0 ;i<array.length;i++){
//         if(array[i]%3 == 0){
//             sum += array[i];
//         }
//         console.log(sum)
//     }
// }
// sum(array)


// Định hình các bước cần thực hiện <=> Xây dựng quy trình
// Tương ứng mỗi bước => 1 function 
// n function : tương tác với nhau => xác định được các ảnh hưởng của functionN  tới functionN+1
//                                 ==> đánh giá ảnh hưởng
//==> Solid



// DOM - tương tác với html

// Lấy thông tin 

// var userInfor1 = {
//     hieght: 170,
//     address :"dev",
//     name : "test",
//     pass : "123456"
// }
// var userInfor2 = {
//     hieght: 170,
//     address :"html",
//     name : "test",
//     pass : "123456"
// }
// var userInfor3 = {
//     hieght: 170,
//     address :"dev",
//     name : "java",
//     pass : "123456"
// }
// function checkData(){ 
//     let check =false;
//         for(let i = 0 ; i<listUsername.length;i++){
//             if(listUsername[i].name == username && listUsername[i].pass == password){
//                 check = true;
//             }
//         }
//         if(check) alert("thành công");
//         else alert ("username và password không đúng")
//     }


// function preCheck(){
//     var username = document.getElementById('username').value;
//     var username = document.getElementById('password').value;
//     console.log( username );
//     console.log(password);
//     if(username == "" || password == ""){
//         alert('username và password đang bị bỏ trống');
//     }else{
//         checkData(username,password)
//     }
// }

// var listUsername=[userInfor2,userInfor1,userInfor3]

// function userInfor(){
//     var username = document.getElementById('username').value;
//     var username = document.getElementById('password').value;
//     console.log( username );
//     console.log(password);
//     if(username == "" || password == ""){
//         alert('username và password đang bị bỏ trống');
//     } else{
//         for(let i = 0 ; i<listUsername.length;i++){
//             if(listUsername[i].name == username && listUsername[i].pass == password){
//                 check = true;
//             }
//         }
//         if(check) alert("thành công");
//         else alert ("username và password không đúng")
//     }
// }


// // Đỗi tượng <=> Object
// // syntax
// //  var obj = new Object();
//  var obj2 = {
//     username: "test",
//     pass : "123456",
//  };
//  var obj={};
//  obj.test1 = "test";
//  obj.test2 = "12345678";

//  var x = obj.test1;

//  // Lưu ý : tương tác với object thông qua thuộc tính
//  //<tên_object>.<tên_thuộc_tính>

//  var list = [obj,obj2];

// //regex
// //tách hàm







