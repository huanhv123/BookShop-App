const { db } =require("../config/admin");
const billController={
    GetAllBills: async (req, res) => {
        try {
            db.collection("bills").get().then((snapshot) => {
                const data = snapshot.docs.map((value) => 
                (
                    {
                        id: value.id,
                        "address": value.data().address,
                        "total": value.data().total,
                        "products": value.data().products,
                        "status": value.data().status,
                        "phoneCus": value.data().phoneCus,
                        "nameCus": value.data().nameCus,
                        "datePayment":  new Date(value.data().datePayment._seconds*1000).toLocaleString().replace(',',''),
                        "idCus":  value.data().idCus
                    }
                )
                );
                res.status(200).json(data);
            })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // [
    //     {
    //         "id": "AOYC1r6W7Dptn8VeEFhH",
    //         "address": "dfdasgfa",
    //         "total": 198.15,
    //         "products": [
    //             {
    //                 "idBook": "dsfasfa",
    //                 "quantityBuy": "1"
    //             },
    //             {
    //                 "idBook": "sdafasdf",
    //                 "quantityBuy": 2
    //             }
    //         ],
    //         "status": "Đã thanh toán",
    //         "phoneCus": "0133434",
    //         "nameCus": "sdfdsagf",
    //         "datePayment": {
    //             "_seconds": 1663230012,
    //             "_nanoseconds": 477000000
    //         }
    //     }
    // ]

    // timestamp = {
    //     nanoseconds: 0,
    //     seconds: 1562524200
    //   }
      
    //   console.log(new Date(timestamp.seconds*1000))
//     var gg=new Date(datePayment._seconds).toLocaleString().replace(',','')
// const unixTimeZero = Date.parse(gg);
// let text = unixTimeZero.toString();

// dateFormat = new Date(unixTimeZero).toLocaleString().replace(',','');

// console.log(dateFormat);
    SearchBill: async (req, res) => {
        try {
            // 12/7/2022
            // 12-7/2022
            // 2022-12-7
            let start = new Date(req.body.startDate);
            let end = new Date(req.body.endDate);
            db.collection("bills")
            .where('datePayment', '>=', start)
            .where('datePayment', '<=', end)
            .get().then((snapshot) => {
                    const data = snapshot.docs.map((value) => (
                        {
                            id: value.id,
                            "address": value.data().address,
                            "total": value.data().total,
                            "products": value.data().products,
                            "status": value.data().status,
                            "phoneCus": value.data().phoneCus,
                            "nameCus": value.data().nameCus,
                            "datePayment":  new Date(value.data().datePayment._seconds*1000).toLocaleString().replace(',',''),
                            "idCus":  value.data().idCus
                        }
                    ));
                    res.status(200).json(data);
                    });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    GetBill: async (req, res) => {
        try {
            db.collection("bills").doc(req.params.id).get().
                then((value) => {
                    let data = {
                        id: value.id,
                        "address": value.data().address,
                        "total": value.data().total,
                        "products": value.data().products,
                        "status": value.data().status,
                        "phoneCus": value.data().phoneCus,
                        "nameCus": value.data().nameCus,
                        "datePayment":  new Date(value.data().datePayment._seconds*1000).toLocaleString().replace(',',''),
                        "idCus":  value.data().idCus
                    }
                    res.status(200).json(data);
                });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    CreateBill: async (req, res) => {
        try {
            let newBook = {
                "address": req.body.address,
                "total": req.body.total,
                "products": req.body.products,
                "status": "Đã thanh toán",
                "phoneCus": req.body.phoneCus,
                "nameCus": req.body.nameCus,
                "datePayment": new Date(),
                "idCus":  req.body.idCus
            }
            //   console.log(newBook)
            await db.collection("bills").add(newBook);
            res.status(200).json({ mse: true })
        } catch (err) {
            res.status(500).json({ mse: false });
        }
    },
    UpdateBill: async (req, res) => {
        try {
            let newBook={
                "status":req.body.status,
              }
            // await db.collection("bills").doc(req.params.id).update(newBook);
            res.status(200).json({mse:new Date(1670355647000).toLocaleString().replace(',','')})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
}
module.exports=billController;