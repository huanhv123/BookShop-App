const bookController=require("../controllers/bookController");
const router=require("express").Router();
router.get("/getAllBooks",bookController.GetAllBooks);
router.get("/:keyword",bookController.SearchBooks);
router.get("/getAllBooks/:idCate",bookController.GetALLBooksByCate);
router.post("/createBook",bookController.CreateBook)
router.put("/:id",bookController.UpdateBook)
router.delete("/:id",bookController.DeleteBook)
module.exports=router;