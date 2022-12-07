const { db } =require("../config/admin");
const accountController={
    getAllAccounts:async(req,res)=>{
        try {
            db.collection("accounts").get().then((snapshot) => {
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
    GetAccount: async (req, res) => {
        try {
            db.collection("accounts").doc(req.params.id).get().
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
    loginAccount:async(req,res)=>{
        try{
            let user;
            await db.collection("accounts")
            .where("user", "==", req.body.user).get()
            .then((temp) => {
              temp.forEach( (element) => {
                return(user= element.data())
              });
            });
            if(user.user== req.body.user && user.password==  req.body.password){
                res.status(200).json({mse:true})
            }else{
                res.status(200).json({mse:false})
            }
        }catch(err){
            res.status(500).json({mse:false});
        }
    },
    createAccount:async(req,res)=>{
        try{
            let newAccount={
                "Type":"customer",
                "password": req.body.password,
                "user": req.body.user,
            } 
            await db.collection("accounts").add(newAccount);
            res.status(200).json({mse:true})
        }catch(err){
            res.status(500).json({mse:false});
        }
    },
    UpdateAccount: async (req, res) => {
        try {
            let newAccount={
                "Type":"customer",
                "password": req.body.password,
                "user": req.body.user,
              }
            await db.collection("accounts").doc(req.params.id).update(newAccount);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    DeleteAccount: async (req, res) => {
        try {
            await db.collection("accounts").doc(req.params.id).delete();
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
}
module.exports=accountController;