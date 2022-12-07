const { db } =require("../config/admin");
const categoryControllr={
    GetAllCategories: async (req, res) => {
        try {
            db.collection("categories").get().then((snapshot) => {
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
    SearchCategories: async (req, res) => {
        try {
            db.collection("categories").get().then((snapshot) => {
                const data = snapshot.docs.map((value) => (
                    {
                        id: value.id,
                        ...value.data(),
                    }
                ));
                let text = req.params.keyword
                const newData = data.filter((item) => {
                    const itemData = item.nameCate
                        ? item.nameCate.toLowerCase()
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
    GetCategory: async (req, res) => {
        try {
            db.collection("categories").doc(req.params.id).get().
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
    CreateCategory: async (req, res) => {
        try {
            let newBook = {
                "nameCate": req.body.nameCate,
              }
            //   console.log(newBook)
            await db.collection("categories").add(newBook);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    UpdateCategory: async (req, res) => {
        try {
            let newBook={
                "nameCate": req.body.nameCate,
              }
            await db.collection("categories").doc(req.params.id).update(newBook);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    DeleteCategory: async (req, res) => {
        try {
            await db.collection("categories").doc(req.params.id).delete();
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    }
}
module.exports=categoryControllr;