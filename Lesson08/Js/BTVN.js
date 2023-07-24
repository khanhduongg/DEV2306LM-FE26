// btvn: tạo 1 arrayobject  về 3 thành phố - mỗi tp lấy 3 quận huyện
// - mỗi quận huyện gồm 3 phường
// viết funtion: khi nhập tên phường => log ra tên quận huyện - thành phố tương ứng


var arrayobject =
[

    {
        TP :"Ha Noi",
        listQuan :[
            {
                tenQuan:"DongDa",
                listphuong :[
                    {
                        tenphuong:"DongDa1"
                    },
                    {
                        tenphuong:"DongDa2"

                    },
                    {
                        tenphuong:"DongDa2"

                    }

                ]
            },
            {
                tenQuan:"Caugiay",
                listphuong :[
                    {
                        tenphuong:"Caugiay1"
                    },
                    {
                        tenphuong:"Caugiay2"

                    },
                    {
                        tenphuong:"Caugiay3"

                    }

                ]
            },
            {
                tenQuan:"ThanhXuan",            
                listphuong :[
                    {
                        tenphuong:"Thanhxuan1"
                    },
                    {
                        tenphuong:"Thanhxuan2"

                    },
                    {
                        tenphuong:"Thanhxuan3"

                    }

                ]
            }
        ]

    },
    {
        TP :"Ha Nam",
        listQuan :[
            {
                tenQuan:"Lienhiep",
                listphuong :[
                    {
                        tenphuong:"Lienhiep1"
                    },
                    {
                        tenphuong:"Lienhiep2"

                    },
                    {
                        tenphuong:"Lienhiep3"

                    }

                ]
            },
            {
                tenQuan:"Tamhiep",
                listphuong :[
                    {
                        tenphuong:"Tamhiep1"
                    },
                    {
                        tenphuong:"Tamhiep2"

                    },
                    {
                        tenphuong:"Tamhiep3"

                    }

                ]
            },
            {
                tenQuan:"Hiepthuan",
                
                listphuong :[
                    {
                        tenphuong:"Hiepthuan1"
                    },
                    {
                        tenphuong:"Hiepthuan2"

                    },
                    {
                        tenphuong:"Hiepthuan3"

                    }

                ]
            }
        ]

    },
    {
        TP :"Ha Dong",
        listQuan :[
            {
                tenQuan:"Bavi",
                listphuong :[
                    {
                        tenphuong:"Bavi1"
                    },
                    {
                        tenphuong:"Bavi2"

                    },
                    {
                        tenphuong:"Bavi3"

                    }

                ]
            },
            {
                tenQuan:"Danphuong",
                listphuong :[
                    {
                        tenphuong:"Danphuong1"
                    },
                    {
                        tenphuong:"Danphuong2"

                    },
                    {
                        tenphuong:"Danphuong3"

                    }

                ]
            },
            {
                tenQuan:"Tayho",
                
                listphuong :[
                    {
                        tenphuong:"Tayho1"
                    },
                    {
                        tenphuong:"Tayho2"

                    },
                    {
                        tenphuong:"Tayho3"

                    }

                ]
            }
        ]

    },
    
]


function checkList (){
    var value =document.getElementById("listphuong").value;
     for(let i = 0; i <arrayobject.length;i++ ){
        for(let j = 0;j < arrayobject[i].listQuan.length;j++){
            for(let k = 0;k< arrayobject[i].listQuan[j].listphuong.length;k++){
                if(arrayobject[i].listQuan[j].listphuong[k].tenphuong == value){
                    document.write("Phường "+arrayobject[i].listQuan[j].listphuong[k].tenphuong+" Quận "+arrayobject[i].listQuan[j].tenQuan +"Thành Phố "+arrayobject[i].TP)
                }
            }
        }
     }
}


