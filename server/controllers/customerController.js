const { db } =require("../config/admin");
const customerController={
    GetAllCustomers: async (req, res) => {
        try {
            db.collection("customers").get().then((snapshot) => {
                const data = snapshot.docs.map((value) => (
                  {
                    id: value.id,
                    ...value.data(),
                  }
                ));
                res.status(200).json(data);
            })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    GetCustomer: async (req, res) => {
        try {
            db.collection("customers").doc(req.params.id).get().
                then((value) => {
                    let data = {
                        id: value.id,
                        ...value.data(),
                    }
                    res.status(200).json(data);
                });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    GetCustomersByAccount: async (req, res) => {
        try {
            let account 
            await db.collection("customers")
                .where('idAccount', '==', req.params.id).get()
                .then((res) => {
                    res.forEach((element) => {
                        return(account= {id:element.id,...element.data()})
                    });
                });
            res.status(200).json(account);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    UpdateCustomer: async (req, res) => {
        try {
            let newCus = {
                "BoD":  req.body.BoD,
                "adderss":  req.body.adderss,
                "nameCus" : req.body.nameCus,
                "phoneCus": req.body.phoneCus,
                "sexCus": req.body.sexCus
              }
            await db.collection("customers").doc(req.params.id).update(newCus);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
}
module.exports=customerController;