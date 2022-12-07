const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const admin = require("firebase-admin");
// var serviceAccount = require("./keys/key_test.json");
const accountRoute = require("./routes/account");
const bookRoute = require("./routes/book");
const billRoute = require("./routes/bill");
const cartRoute = require("./routes/cart");
const categoryRoute = require("./routes/category");
const customerRoute = require("./routes/customer");


const { db } =require("./config/admin");
const app=express();

// var db = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// module.exports.db = db.firestore(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
// app.use("/account/",accountRoute);
app.use("/book/",bookRoute);
app.use("/account/",accountRoute);
app.use("/bill/",billRoute);
app.use("/cart/",cartRoute);
app.use("/category/",categoryRoute);
app.use("/customer/",customerRoute);

const items = [
  {
    id: 1,
    name: "Learn Python: The complete Python Programming Course",
    img:"https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
    teacher:'Avan',
    price:89,
    rating:4.4
  }, 
  {
    id: 2,
    name: "Learn HTML: The complete HTML Programming Course",
    img:"https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
    teacher:'Avan',
    price:89,
    rating:4.4
  }
]

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});


app.get("/getAllSubscribes", async function (req, res) {
  try {
    let arrToken = []
    db.collection("subscribes").get().then((snapshot) => {
      snapshot.docs.map((value) => {
        arrToken.push((value.data()).tokenDivice)
      }
      );
      res.status(200).json(arrToken);
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// app.get("/getAllItems", async function (req, res) {
//   try {
//     db.collection("items").get().then((snapshot) => {
//       const data = snapshot.docs.map((value) => (
//         {
//           id: value.id,
//           ...value.data(),
//         }
//       ));
//       res.status(200).json(data);
//     })
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // // app.get("/getNameClothes", async function (req, res) {
// // //   let resul = await (
// // //     await firestore.collection("listclothes").get()
// // //   ).docs.map((value) => {
// // //     let temp = value.data().name+"-"+value.id;
// // //     return temp;
// // //   });
// // //   res.send(resul);
// // // });

// app.post("/createBook", async (req, res) => {
//   try {
//     const newBook={
//       "nameBook": "Gói mùa",
//       "author": "ggggg",
//       "price": 63000,
//     }
//     db.collection("books").add(newBook);
//     res.status(200).send({
//       status:'success',
//       mes:"Thêm mới book",
//       data:newBook
//     })
// } catch (err) {
//     res.status(500).json(err.message);
// }
// });
// // "id":"ABCs9OPFvtYi5c2spt5A",
// // "price": 385000,
// // "name": "Áo Khoác Hoodie Y Nguyên Bản 18+ Ver15",
// // "photoURL": "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-y-nguyen-ban-18-ver15-0020467/be54ce4f-158d-c201-c8e8-00189c18ef5f.jpg?w=540&h=756",
// // "Size": [
// //     "S;30 ",
// //     "M;32",
// //     "L;29",
// //     "XL;31 "
// // ],
// // "description": [
// //     "Áo Khoác Hoodie Y Nguyên Bản 18+ Ver15",
// //     "Chất liệu: FRENCH TERRY",
// //     "Thành phần: 100% cotton"
// // ]

// app.put("/editClothes", async (req, res) => {
//   let body = req.body;
//   let t=body.data
//   // console.log(t.name+" "+t.price+" "+t.photoURL)
//   if(t.name==''){
//     delete t["name"];
//   }
//   if(t.photoURL==''){
//     delete t["photoURL"];
//   }
//   if(t.price==''||t.price==0){
//     delete t["price"];
//   }
//   await firestore.collection("listclothes")
//                  .doc(body.idDoc)
//                   .update(t);
//                   // console.log(t);
//     res.send({
//       message: "Cập nhật thành công"
//     });
// });

// app.delete("/deleteClothes", async (req, res) => {
//   let body = req.body;
//   await firestore.
//   collection("listclothes")
//   .doc(body.idDoc).delete();
//   res.send({
//     message: "Xóa thành công",
//   });
// });

// // app.delete("/deleteClothes", async (req, res) => {
// // let body=req.body;
// //   await firestore.collection("listclothes")
// //   .where('name', '==', body.name).get()
// //   .then(res => {
// //     // console.log(res.id);
// //     res.forEach(element => {
// //       // console.log(element.id);
// //        element.ref.delete();
// //     });
// //   });
// //   res.send({
// //     message: "Xóa thành công",
// //   });
// // });


app.listen(3000,() => {
  console.log("Server is running!!");
});

