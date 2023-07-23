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
 let array = [1,5,9,100,55,66,66,66,4,5,66,65,66,76,109,23,66,34,23,43,34];

 
/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
        count ++;
    }
    console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}




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
