const { db } = require("../config/admin");
const items = [
    {
        "id": "20yAMenArlRBTioCSAL3",
        "descriptionBook": "Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối",
        "releaseDate": "1/9/2019",
        "idCate": "uLWLBvrS9QnhYt6RWQmg",
        "photoBook": "LamBanVoiBauTroi.jpg",
        "oldPrice": 198100,
        "nameBook": "Làm Bạn Với Bầu Trời ( Bìa Cứng)",
        "newPrice": 120000,
        "view": 2143,
        "quantityRemaining": 20,
        "author": "Nguyễn Nhật Ánh"
    },
    {
        "id": "emNHQJeUnkpklLId0vHa",
        "photoBook": "spy-x-family-tap-1.jpg",
        "view": 2200,
        "author": "Tatsuya Endo",
        "nameBook": "Spy X Family - Tập 7",
        "releaseDate": "23/7/2007",
        "oldPrice": 50000,
        "descriptionBook": "Cuối cùng thì Twilight cũng tiếp xúc được với mục tiêu Desmond lần đầu tiên bằng cách xen vào cuai thứ",
        "idCate": "S3YUPVQVIzdl7mDueB0L",
        "quantityRemaining": 50,
        "newPrice": 35000
    },
    {
        "id": "xHtitC8ZS9GVHB8zKLsU",
        "nameBook": "heroX",
        "idCate": "uLWLBvrS9QnhYt6RWQmg"
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
    filterBook: (listBook, view, idCate) => {
        let listfilterBook = [];
        if (view > 0) {
            listfilterBook = listBook.filter(item =>
                item.view >= view);
        }
        else {
            listfilterBook = listBook.filter(item =>
                item.idCate == idCate);
        }
        return listfilterBook
    },
    GetAllBooksToHome: async (req, res) => {
        try {
            db.collection("books").get().then(async (snapshot) => {
                let data = snapshot.docs.map((value) => (
                    {
                        id: value.id,
                        ...value.data(),
                    }
                ));
                const myArray = [{
                    title: 'Mua nhiều nhất',
                },
                {
                    title: 'Hot',
                },
                {
                    title: 'Manga-Comic',
                },
            ];
                let dataHome = []
                myArray.forEach(async (element, index, array) => {
                    if (element.title == "Hot") {
                        dataHome.push({
                            id: index,
                            title: element.title,
                            data: bookController.filterBook(data,1000,"")
                        })
                    }
                    else if (index > 1) {
                        let idcatee;
                        await db.collection("categories")
                            .where('nameCate', '==', element.title).get()
                            .then((res) => {
                                res.forEach((item) => {
                                    return(idcatee=item.id)
                                });
                            });
                            let dataBook = bookController.filterBook(data, 0, idcatee)
                            dataHome.push({
                                id: index,
                                title: element.title,
                                data: dataBook
                            })
                    }

                    else{
                        dataHome.push({
                            id: index,
                            title: element.title,
                            data: data
                        })
                    }
                    if(index == myArray.length-1){
                        res.status(200).json(dataHome);
                    }
                });
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
                "descriptionBook": req.body.descriptionBook,
                "photoBook": req.body.photoBook,
                "idCate": req.body.idCate,
                "newPrice": req.body.newPrice,
                "oldPrice": req.body.oldPrice,
                "quantityRemaining": req.body.quantityRemaining,
                "releaseDate": req.body.releaseDate,
                "view": req.body.view
            }
            //   console.log(newBook)
            await db.collection("books").add(newBook);
            res.status(200).json({ mse: true })
        } catch (err) {
            res.status(500).json({ mse: false });
        }
    },
    UpdateBook: async (req, res) => {
        try {
            let newBook = {
                "nameBook": req.body.nameBook,
                "author": req.body.author,
                "descriptionBook": req.body.descriptionBook,
                "photoBook": req.body.photoBook,
                "idCate": req.body.idCate,
                "newPrice": req.body.newPrice,
                "oldPrice": req.body.oldPrice,
                "quantityRemaining": req.body.quantityRemaining,
                "releaseDate": req.body.releaseDate,
                "view": req.body.view
            }
            await db.collection("books").doc(req.params.id).update(newBook);
            res.status(200).json({ mse: true })
        } catch (err) {
            res.status(500).json({ mse: false });
        }
    },
    DeleteBook: async (req, res) => {
        try {
            await db.collection("books").doc(req.params.id).delete();
            res.status(200).json({ mse: true })
        } catch (err) {
            res.status(500).json({ mse: false });
        }
    }
}
module.exports = bookController;