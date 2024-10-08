const express = require('express');
const router = express.Router();
const Joi = require('joi'); // return class

const courses = [
    {id:1, name:'java'},
    {id:2, name:'Python'},
    {id:3, name: 'JavaScript'},


];

router.get('/', (req, res)=> {
    res.send("Hello World")
})

router.get('/count', (req,res)=>{
    res.send([1, 2, 3 ]);
})

router.get('/courses', (req, res) =>{
    res.send(courses);
})

router.get('/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) {
        return res.status(404).send("The course is not found");
    }
    res.send(course);

});

router.post('/', (req,res) => {
    
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course){
        return res.status(404).send("The course is not found");
    }
   
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(! course) {
        return res.status(404).send("The course is not found");
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.valid(course, schema);

}

module.exports = router;