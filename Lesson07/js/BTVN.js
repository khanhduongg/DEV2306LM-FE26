var a = 2;
var b = 3;
var c = 1;

if(a==0){
    console.log("phương trình có nghiệm " -c/b)
        if(b==0){
            console.log("phương trình vô nghiệm")
            if(c==0){
                console.log("phương trình vô số nghiệm")
            }
        }else{
            let delta = Math.pow(b, 2) -4 * a *c;

            if(delta == 0){
                const x = -b/ (2 * a);
                console.log("phương trình có nghiệm kép: x = ${x}");
            }else if(delta < 0) {
                console.log("phương trình vô nghiệm");
            } else{
                const x1 =((-b + Math.sqrt(delta))/ 2) *a ;
                const x2 =((-b - Math.sqrt(delta))/ 2) *a ;
                 
                console.log("Nghiệm x1 = ${x1} ")
                console.log("Nghiệm x2 = ${x2}")
        }
}
}

// Bài 2 đếm số lần suất hiện của 66
 var array = [1,5,9,100,55,66,66,66,4,5,66,65,66,76,109,23,66,34,23,43,34];

 
/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
var sum = 0;
var x= 66;
 for(var i=0; i<array.length;i++){
   if(array[i] == x){
         sum++
    }
 }
 console.log("Phần tử "+x+" xuất hiện "+sum+" lần");


// Lab5.1 kiểm tra mật khẩu 
var password = getValue('password');
var repassword = getValue('repassword');
if (password == '' || password.length < 8 || password != repassword){
    flag = false;
    showError('password', 'Vui lòng kiểm tra lại Password');
}


//lab 5.1 tạo dãy số 
var array= [0,1,2,3,4,5,6,7,8,9]
function check(arr){
    const Arr =[]
    for(var i=0; i<arr.length; i++){
        Arr.push(i)
        const newStr = Arr.join("");    
        document.write(newStr + "<br>")    
    }
}
check(array)

// if(a == 0){

//     console.log("phương trình có nghiệm" + -b/a);
// }
//     else {
//     let delta = Math.pow(b, 2) -4 * a *c;

//     if(delta == 0){
//         const x = -b/ (2 * a);
//         console.log("phương trình có nghiệm kép: x = ${x} ");
//     }else if(delta < 0) {
//         console.log("phương trình vô nghiệm");
//     } else{
//         const x1 =((-b + Math.sqrt(delta))/ 2) *a ;
//         const x2 =((-b - Math.sqrt(delta))/ 2) *a ;
         
//         console.log("Nghiệm x1 = ")
//         console.log("Nghiệm x2 = ${x2}")

//     }

// }
