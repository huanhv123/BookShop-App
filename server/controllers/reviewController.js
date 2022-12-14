const { db } =require("../config/admin");
const reviewController={
    GetAllReviews: async (req, res) => {
        try {
            db.collection("reviews").get().then((snapshot) => {
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
    GetALLReviewsByBook: async (req, res) => {
        try {
            let temp = [];
            await db.collection("reviews")
                .where('idBook', '==', req.params.idBook).get()
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
    GetReview: async (req, res) => {
        try {
            db.collection("reviews").doc(req.params.id).get().
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
    CreateReview: async (req, res) => {
        try {
            let newReview = {
                    "Star": req.body.Star,
                    "content": req.body.content,
                    "dateRev": req.body.dateRev,
                    "idBook": req.body.idBook,
                    "idCus":req.body.idCus,
              }
            //   console.log(newBook)
            await db.collection("reviews").add(newReview);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    UpdateReview: async (req, res) => {
        try {
            let newReview = {
                "Star": req.body.Star,
                "content": req.body.content,
                "dateRev": req.body.dateRev,
                "idBook": req.body.idBook,
                "idCus":req.body.idCus,
            }
            await db.collection("reviews").doc(req.params.id).update(newReview);
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    },
    DeleteReview: async (req, res) => {
        try {
            await db.collection("reviews").doc(req.params.id).delete();
            res.status(200).json({mse:true})
        } catch (err) {
            res.status(500).json({mse:false});
        }
    }
}
module.exports=reviewController;