const { Router } = require("express");
const { getActivitiesHandler } = require("../controllers/activity/getActivities");
const { postActivitiesHandler } = require("../controllers/activity/postActivities");


 const activitiesRouter = Router();

 activitiesRouter.post('/', postActivitiesHandler); //body
 activitiesRouter.get('/', getActivitiesHandler);  // params

 module.exports = { activitiesRouter };