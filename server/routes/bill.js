const billController=require("../controllers/billController");
const router=require("express").Router();
router.get("/getAllBills",billController.GetAllBills);
router.get("/search",billController.SearchBill);
router.get("/:id",billController.GetBill);
router.post("/createBill",billController.CreateBill)
router.put("/:id",billController.UpdateBill)
module.exports=router;