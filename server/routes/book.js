const bookController=require("../controllers/bookController");
const router=require("express").Router();
router.get("/getAllBooks",bookController.GetAllBooks);
router.get("/search/:keyword",bookController.SearchBooks);
router.get("/getAllBooks/:idCate",bookController.GetALLBooksByCate);
router.get("/GetAllBooksToHome",bookController.GetAllBooksToHome);
router.post("/createBook",bookController.CreateBook)
router.put("/:id",bookController.UpdateBook)
router.delete("/:id",bookController.DeleteBook)
module.exports=router;