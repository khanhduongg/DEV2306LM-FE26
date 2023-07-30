var list = [
    {
        thanh_pho : "HN",
        arrQuan : [
            {
                quan : "thanh xuan 1",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 2"
                    },
                    {
                        phuong: "phường 3"
                    }
                ]

            },
            
            {
                quan : "thanh xuan 2",
                arrPhuong : [
                    {
                        phuong: "phường 4"
                    },
                    {
                        phuong: "phường 5"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]
            },
            
            {
                quan : "thanh xuan 3",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]
            }
        ]
    },
    
    {
        thanh_pho : "HP",
        arrQuan : [
            {
                quan : "thanh xuan 1",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]

            },
            
            {
                quan : "thanh xuan 2",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]
            },
            
            {
                quan : "thanh xuan 3",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]
            }
        ]
    },
    
    {
        thanh_pho : "QN",
        arrQuan : [
            {
                quan : "thanh xuan 1",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]

            },
            
            {
                quan : "thanh xuan 2",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 1"
                    }
                ]
            },
            
            {
                quan : "thanh xuan 9",
                arrPhuong : [
                    {
                        phuong: "phường 1"
                    },
                    {
                        phuong: "phường 26"
                    },
                    {
                        phuong: "phường 27"
                    }
                ]
            }
        ]
    }



]

// nhập vào tên phường => tên quận => tên thành phố
var listDemo = [
    {
        tp: "HN",
        quan: "thanh xuan",
        phuong: "demo 1"
    },
    {
        tp: "HN",
        quan: "thanh xuan",
        phuong: "demo 2"
    },
    
    {
        tp: "HN",
        quan: "thanh xuan",
        phuong: "demo 3"
    },
    {
        tp: "HN",
        quan: "Đống đa",
        phuong: "demo 1 dd"
    },
    
    {
        tp: "HN",
        quan: "Đống đa",
        phuong: "demo 2 dd"
    },
    
    {
        tp: "HN",
        quan: "Đống đa",
        phuong: "demo 3 dd"
    }

]

var listTemp = [];

for (let index = 0; index < list.length; index++) {
 
    for (let i = 0; i < list[index].arrQuan.length; i++) {
        
        for (let j = 0; j < list[index].arrQuan[i].arrPhuong.length; j++) {
            let objTemp = {};
            objTemp.tenPhuong = list[index].arrQuan[i].arrPhuong[j].phuong;
            objTemp.tenQuan = list[index].arrQuan[i].quan;
            objTemp.tenTP = list[index].thanh_pho;
            listTemp.push(objTemp);
        }
    }
    
}

function search(name) {
    var check  = false;
    for (let index = 0; index < listTemp.length; index++) {
     
        if(listTemp[index].tenPhuong ==  name){
            console.log("phường " + name + " thuộc tp: " + listTemp[index].tenTP + 
                         " thuộc quân: " + listTemp[index].tenQuan );
            check  = true;
        }
        
    }
    if(!check){
        console.log("no data");
    }
}
