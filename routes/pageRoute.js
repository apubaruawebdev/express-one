const express = require('express');
const { showHomePage, showMenuPage, showGalleryPage, showStoryPage, showNewsPage, showContactPage } = require('../controllers/pageController');


// init route
const router = express.Router();

router.get('/', showHomePage);
router.get('/menu', showMenuPage);
router.get('/gallery', showGalleryPage);
router.get('/story', showStoryPage);
router.get('/news', showNewsPage);
router.get('/contact', showContactPage);


// exports module
module.exports = router;
