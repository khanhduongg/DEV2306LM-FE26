// alert('Hello Word ')


// Biến 
// * Quy tắc đặt tên 
// * Các kiểu đặt tên 
// * Javacript phân biệt hoa thường => N != n\


// Cú pháp khai báo
// datatype name_vari ;
// datatype name_vari= <value> ;
// number:int ,float ,..
// String:
// array ,object
// tự định nghĩa :



var x = 5; // lúc này x có kiểu dữ liệu là number
var y = "100"// y luc này tự động có kiểu dữ liệu chuỗi


// Các phép toán với biến 
// + - * / %
// * lưu ý với phép +
// "dev"+"java" = "devjava"
// 1 + 1 = 2
// 1 +"1" = "11"
// các phép so sánh: > < >= <= == ===
// == :chỉ so sánh về giá trị  ==> 100 ="100" :true
//====:ss giá trị + datatupe ==> "100" ===1 :false

console.log("giá trị của y là:" ,y);
console.log("giá trị của y là:", x);
console.log("giá trị của y là:"+ x);



// Cấu trúc điều kiện if else ; switch case
// if - else
// phân loại if thiếu if đầy đủ, if lồng 
if(x == y){
    //thân if
    console.log("giá trị của x trùng với y")
} else{
    console.log("x = " + x +" khác so với y = ",+ y );
    
}

// biện luận số nghiệm của phưởng trình bậc nhất 1 ẩn
// có dạng a*x+b=0 với mọi a
var a = 1;
var b = 0;
if( a==0 && b==0  || b==0) {

    console.log(" phương trình vô số nghiệm");
} else if (a==0){

    console.log("phương trình vô nghiệm")

}else{
    console.log("phương trình có nghiệm" + -b/a);
}
// biện luận số nghiệm của phưởng trình bậc nhất 2 
// a*x^2+b*x + c= với mọi a , b ,c log ra màn hình


// Vòng lặp: for ;while
// cú pháp 
// for ( khởi tạo biến đếm ;điều kiện ;khởi động){
//        ... các câu lệnh js
//}
// b1 khởi tạo biến đếm
// b2 kiểm tra điều kiện
//      true: 2.1 thực thi thân for
//            2.2 quay lại thực thi hành động
//            2.3 quay lại kiểm tra đầu bước 2 
//      flase: dừng vòng lặp


// for( let i = 1; i <= 10; i++ ){
//     console.log(i)
// }

// // log ra màn hình f12 tất cả các số lẻ từ 0 =>15

// for( let i=0 ;i <= 15;i++ ){
//     if( i%2 !=0 ){
//         console.log(i);
//     }
// }

// // log ra màn hình tất cả các số chia hết cho 5 trong tập hợp từ [1;100]
// for(let i =1;i <= 100 ;i++){
//     if( i%5 == 0){
//         console.log(1)
//     }
// }


// mảng : array
// khái niệm: tập hợp các phần tử ví dụ [1, 2, 3, "dev","java"]
//            mỗi phần tử được đánh một giá trị index tương ứng bắt đầu từ 0 => lenght -1
// khai báo: 2 cách khai báo 
// var array1 = new array ();
// var array2 = [1 , 2 , 3 , 4 , 5 , 6 ,"dev"];
// // các sử dụng - cách tương tác :
// array2[3];

// for(let i =0 ;i < array2.length;i++)
//     if(array2[i] % 2 == 0)
//     console.log(array2[i]);

//log ra màn hình tất phần tử thỏa mãn điều kiện nhỏ hơn 100

var arr = [1 , 5, 9 ,100 ,55 ,88 ,99 ,66 ,7 ,4];
debugger;
for(let i = 0;i <arr.length ;i++){
    if ( arr[i] < 100)
    {
        console.log(arr[i]);
    }
}








