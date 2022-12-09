const categoryControllr=require("../controllers/categoryControllr");
const router=require("express").Router();
router.get("/getAllCategories",categoryControllr.GetAllCategories);
router.get("/search/:keyword",categoryControllr.SearchCategories);
router.get("/:id",categoryControllr.GetCategory);
router.post("/createCategory",categoryControllr.CreateCategory)
router.put("/:id",categoryControllr.UpdateCategory)
router.delete("/:id",categoryControllr.DeleteCategory)
module.exports=router;