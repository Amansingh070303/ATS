const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Application = require('../models/application');
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/dashboard', async (req, res) => {
    const jobs = await Job.find();
    res.render('dashboard', { jobs });
});

router.get('/create-job', (req, res) => {
    res.render('create-job');
});

router.post('/create-job', async (req, res) => {
    const { title, location, salary, responsibilities, r1Check } = req.body;
    const job = new Job({ title, location, salary, responsibilities, r1Check });
    await job.save();
    res.redirect('/dashboard');
});

router.get('/jobs/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.render('jobs', { job });
});

router.post('/apply/:id', async (req, res) => {
    const { resume, r1Responses } = req.body;
    const application = new Application({
        candidate: req.session.userId,
        job: req.params.id,
        resume,
        r1Responses
    });
    await application.save();
    res.redirect('/dashboard');
});

router.get('/applications', async (req, res) => {
    const applications = await Application.find({ job: req.params.id });
    res.render('application', { applications });
});

module.exports = router;
