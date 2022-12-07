const customerController=require("../controllers/customerController");
const router=require("express").Router();
router.get("/getAllCustomers",customerController.GetAllCustomers);
router.get("/:id",customerController.GetCustomer);
router.post("/createCustomer",customerController.CreateCustomer)
router.put("/:id",customerController.UpdateCustomer)
router.delete("/:id",customerController.DeleteCustomer)
module.exports=router;