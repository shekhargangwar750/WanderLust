const express=require('express');
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync")

const ExpressError=require("../utils/ExpressError");
const Listing=require("../models/listing")

const Review=require("../models/review.js")
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js")
const reviewController=require("../controllers/reviews.js")


router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));


//delete review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports=router;