const bookController=require("../controllers/bookController");
const router=require("express").Router();
router.get("/getAllBooks",bookController.GetAllBooks);
router.post("/createBook",bookController.CreateBook)
router.put("/:id",bookController.UpdateBook)
router.delete("/:id",bookController.DeleteBook)
router.get("/:keyword",bookController.SearchBooks);
// router.delete("/:username",middlewareController.verifyTokenAndAdminAuth,userController.deleteUser);
module.exports=router;