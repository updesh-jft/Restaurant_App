import express from  'express';
import  restaurantController from "../controllers/restaurantController";

const router = express.Router();

router.get("/listrestaurant", restaurantController.listrestaurant);
router.post("/registerrestaurant", restaurantController.registerrestaurant);
router.put("/updaterestaurant", restaurantController.updaterestaurant);


router.get("/restaurantProductsList", restaurantController.restaurantProductsList);
router.post("/createrestaurantProduct", restaurantController.createrestaurantProduct);
router.put("/changerestaurantProduct", restaurantController.changerestaurantProduct);
router.delete("/deleterestaurantProduct", restaurantController.deleterestaurantProduct);






export default  router;