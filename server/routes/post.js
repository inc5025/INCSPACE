var express = require('express');
var router = express.Router();
var Post = require("../models/post");
var Counter = require("../models/counter");
var App = require("../app");

router.post('/', (req, res) => {
    Counter.increment("post_id", function(err, result){
        if(!err){
            var post = new Post({
                post_id: result.value,
                title: req.body.title,
                content: req.body.content
            });
            
            console.log(result);
            post.save((err) => {
                if(err){
                    console.error(err);
                    res.json({result: 0});
                    return;
                } 
                
                res.json({result: 1});
            });
        } else {
            console.error(err);
        }
    });
});

router.get('/', (req, res) => {
    Post.find((err, posts) => {
        if(err) return res.status(500).send({error: 'database failure'});
        return res.status(200).json(posts);
    });
});
 
router.get('/:id', (req, res) => {
    Post.findOne({post_id: req.params.id}, (err, post) => {
        if(err) return res.status(500).json({error: err});
        if(!post) return res.status(404).json({error: 'post not found'});
        
        return res.status(200).json(post);
    });
});
 
router.put('/:id', (req, res) => {
    Post.findOne({post_id: req.params.id}, (err, post) => {
        if(err) return res.status(500).json({ error: 'database failure' });
        if(!post) return res.status(404).json({ error: 'post not found' });

        if(req.body.title)  post.title = req.body.title;
        if(req.body.content) post.content = req.body.content;
        if(req.body.post_id) post.post_id = req.body.post_id;
        
        post.save(function(err){
            if(err) return res.status(500).json({error: 'failed to update'});
            return res.status(200).json({message: 'post updated'});
        });

    });
});
 
router.delete('/:id', (req, res) => {
    Post.remove({post_id: req.params.id}, (err, output) => {
        if(err) return res.status(500).json({error: 'database failure'});
        
        return res.status(204).end();
    });
});

module.exports = router;
