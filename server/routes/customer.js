const customerController=require("../controllers/customerController");
const router=require("express").Router();
router.get("/getAllCustomers",customerController.GetAllCustomers);
router.get("/:id",customerController.GetCustomer);
router.get("/getCustomer/:id",customerController.GetCustomersByAccount);
router.put("/:id",customerController.UpdateCustomer)
module.exports=router;