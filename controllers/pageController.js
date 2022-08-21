const express = require('express');
const path = require('path');

const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

const showMenuPage = (req, res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/menu.html'));
}

const showGalleryPage = (req, res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/gallery.html'));
}

const showStoryPage = (req, res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/story.html'));
}

const showNewsPage = (req, res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/news.html'));
}

const showContactPage = (req, res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/contact.html'));
}


module.exports = {
    showHomePage,
    showMenuPage,
    showGalleryPage,
    showStoryPage,
    showNewsPage,
    showContactPage
}