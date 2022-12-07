const { db } =require("../config/admin");
const items=[
    {
        "id": "KgU3amaqKAfnIXNSZ5Lp",
        "price": 190000,
        "nameBook": "Làm Bạn Với Bầu Trời(Bìa Cứng)",
        "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2FLamBanVoiBauTroi.jpg?alt=media&token=44dec27d-e84a-4a3a-8f9c-9191172f1975",
        "author": "Nguyễn Nhật Ánh"
    },
    {
        "id": "YEu6vuffiCFNZUJOtJcu",
        "nameBook": "Xã Hội Việt Nam",
        "price": 900000,
        "author": "Lương Đức Thiệp",
        "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fxa-hoi-viet-nam.jpg?alt=media&token=f75b87ea-836a-4359-a897-040c78d2caca"
    },
    {
        "id": "ZNqVK1WjQYvp9zfLq8xo",
        "nameBook": "Xa hhhh"
    },
    {
        "id": "u3aBKDpKY3w5HURpltbP",
        "nameBook": "Spy X Family",
        "author": "Tatsuya Endo",
        "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=09f42923-4e71-4864-a292-66426df3b2f7",
        "price": 59000
    }
]
const bookController = {
    GetAllBooks: async (req, res) => {
        try {
            db.collection("books").get().then((snapshot) => {
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
    SearchBooks: async (req, res) => {
        try {

            // db.collection("books")
            // .orderBy('nameBook')
            // .startAt("Xa")
            // .endAt( "Xa"+"\uf8ff")
            // .get()
            // .then((book) => {
            //   book.forEach((doc) => {
            //     console.log("www");
            //     console.log(doc.id, " => ", doc.data());
            //     // console.log(element.data())
            //     // temp=[...temp,element.data()];

            //   });
            // });
            db.collection("books").get().then((snapshot) => {
                const data = snapshot.docs.map((value) => (
                    {
                        id: value.id,
                        ...value.data(),
                    }
                ));
                let text = req.params.keyword
                const newData = data.filter((item) => {
                    const itemData = item.nameBook
                        ? item.nameBook.toLowerCase()
                        : ''.toLowerCase();
                    const textData = text.toLowerCase();
                    return itemData.indexOf(textData) > -1;
                });
                res.status(200).json(newData);
            })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    GetALLBooksByCate: async (req, res) => {
        try {
            let temp = [];
            await db.collection("books")
                .where('idCate', '==', req.params.idCate).get()
                .then((res) => {
                    res.forEach((element) => {
                        temp.push({
                            id: element.id,
                            ...element.data(),
                        });
                    });
                });
            res.status(200).json(temp);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    CreateBook: async (req, res) => {
        try {
            let newBook = {
                "nameBook": req.body.nameBook,
                "author": req.body.author,
                "price": req.body.price,
                "descriptionBook": req.body.descriptionBook,
                "photoBook": req.body.photoBook,
                "idCate":req.body.idCate,
                "newPrice":req.body.newPrice,
                "oldPrice":req.body.oldPrice,
                "quantityRemaining":req.body.quantityRemaining,
                "releaseDate":req.body.releaseDate,
                "view":req.body.view
              }
            //   console.log(newBook)
            await db.collection("books").add(newBook);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    UpdateBook: async (req, res) => {
        try {
            let newBook={
                "nameBook": req.body.nameBook,
                "author": req.body.author,
                "price": req.body.price,
                "descriptionBook": req.body.descriptionBook,
                "photoBook": req.body.photoBook,
                "idCate":req.body.idCate,
                "newPrice":req.body.newPrice,
                "oldPrice":req.body.oldPrice,
                "quantityRemaining":req.body.quantityRemaining,
                "releaseDate":req.body.releaseDate,
                "view":req.body.view
              }
            //   console.log(newBook)
            //   console.log(req.params.id)
            await db.collection("books").doc(req.params.id).update(newBook);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    DeleteBook: async (req, res) => {
        try {
            await db.collection("books").doc(req.params.id).delete();
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    }
}
module.exports = bookController;