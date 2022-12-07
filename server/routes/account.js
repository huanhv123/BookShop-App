const accountController=require("../controllers/accountController");
const router=require("express").Router();
router.get("/getAllAccounts",accountController.getAllAccounts);
router.get("/:id",accountController.GetAccount);
router.post("/login",accountController.loginAccount)
router.post("/getAccount",accountController.createAccount)
router.put("/:id",accountController.UpdateAccount)
router.delete("/:id",accountController.DeleteAccount)
module.exports=router;