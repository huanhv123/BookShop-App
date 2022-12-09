const reviewController=require("../controllers/reviewController");
const router=require("express").Router();
router.get("/GetAllReviews",reviewController.GetAllReviews);
router.get("/getAllBooks/:idCate",reviewController.GetALLReviewsByBook);
router.get("/:id",reviewController.GetReview);
router.post("/createReview",reviewController.CreateReview)
router.put("/:id",reviewController.UpdateReview)
router.delete("/:id",reviewController.DeleteReview)
module.exports=router;