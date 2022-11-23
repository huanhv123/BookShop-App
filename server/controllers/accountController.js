const { db } =require("../config/admin");
const bcrypt=require("bcrypt");
const accountController={
    getAllUsers:async(req,res)=>{
        try{
            let resul = await (
            await db.collection("user").get()
            ).docs.map( (value) => {
            temp=value.data();
            return temp;
            });
            // console.log(resul['username'])
            res.send(resul);
            // tạo secrect key
            // const key=  require('crypto').randomBytes(64).toString('hex');
            // console.log("secrect key",key)
        }catch(err){
            res.status(500).json(err);
        }
    },
    createUser:async(req,res)=>{
        try{
            // const salt =await bcrypt.genSalt(10);
            // const hashed =await bcrypt.hash(req.body.password, salt);
            // await firestore.db.collection("user").add({
            //     "email": req.body.email,
            //     "username": req.body.username,
            //     "password": hashed,
            //     "roles":'viewer'
            // });
            // res.send("Thêm mới user")
            let user={
                "username": req.body.username,
                 "password": req.body.password,
            } 

            res.json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser:async(req,res)=>{
        try{
            await db.collection("user")
            .where("username", "==", req.body.username).get()
            .then((user) => {
              user.forEach(async (element) => {
                await db.collection("user").doc(element.id).delete();
                res.send("Xóa user")
              });
            });
        }catch(err){
            res.status(500).json(err);
        }
    },
    registerUser:async(req,res)=>{
        try{
            const salt =await bcrypt.genSalt(10);
            const hashed =await bcrypt.hash(req.body.password, salt);
            let resul = await db.collection("user").add({
                email: req.body.email,
                username: req.body.username,
                password: hashed,
                "roles":'viewer'
            });
            res.send(resul);
        }catch(err){
            res.status(500).json(err);
        }
    },
    loginUser:async(req,res)=>{
        try{
            let user;
            await db.collection("user")
            .where("username", "==", req.body.username).get()
            .then((temp) => {
              temp.forEach( (element) => {
                return(user= element.data())
              });
            });
            if(!user){
                return res.status(404).json("Sai username");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                return res.status(404).json("Sai password!");
            }
            if(user && validPassword){
                let pages;
                await db.collection("roles")
                .where("name", "==", user.roles).get()
                .then((user) => {
                user.forEach(async (element) => {
                    pages=element.data().pages
                    });
                });
                user.roles=pages
                // console.log(pages)
                // console.log(temp.roles)
                const accessToken= authController.generateAccessToken(user);
                // res.status(200).json(accessToken);
                const refreshToken= authController.generateRefreshToken(user);
                // refreshTokens.push(refreshToken);
                // //REX STORE ->ACCESSTOKEN
                // //HTTPONLY COOKIE ->REFRESHTOKEN
                // res.cookie("refreshToken",refreshToken,{
                //     httpOnly:true,
                //     secure:false,
                //     path:"/",
                //     sameSite:"strict",
                // })
                // const{password,...others}=user;
                // res.status(200).json({...others,accessToken});
                res.status(200).json({accessToken,refreshToken});
            }
        }catch(err){
            res.status(500).json(err);
        }
    },
}
module.exports=accountController;