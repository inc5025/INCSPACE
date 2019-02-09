var express = require('express');
var router = express.Router();
var Post = require("../models/post");
var Counter = require("../models/counter");
const jwt = require('jsonwebtoken')

const auth = (req, res) => {
    // read the token from header or url 
    const token = req.headers['x-access-token'] || req.query.token;
    var ret = true;
    // token does not exist
    if(!token) {
        return false;
    }

    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
        if(err) ret = false;
    })

    return ret;
}

router.post('/', (req, res) => {
    if(!auth(req, res)){
        return res.status(401).json({ error: 'Unauthenticated' });
    }
    
    Counter.increment("post_id", function(err, result){
        if(!err){
            var post = new Post({
                post_id: result.value,
                
                title: req.body.title,
                tag: req.body.tag,
                desc: req.body.desc,
                content: req.body.content
            });
            
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
    if(!auth(req, res)){
        return res.status(401).json({ error: 'Unauthenticated' });
    }
    
    Post.findOne({post_id: req.params.id}, (err, post) => {
        if(err) return res.status(500).json({ error: 'database failure' });
        if(!post) return res.status(404).json({ error: 'post not found' });

        if(req.body.post_id)    post.post_id = req.body.post_id;
        if(req.body.title)      post.title = req.body.title;
        if(req.body.tag)        post.tag = req.body.tag;
        if(req.body.desc)       post.desc = req.body.desc;
        if(req.body.content)    post.content = req.body.content;
        
        post.save(function(err){
            if(err) return res.status(500).json({error: 'failed to update'});
            return res.status(200).json({message: 'post updated'});
        });

    });
});
 
router.delete('/:id', (req, res) => {
    if(!auth(req, res)){
        return res.status(401).json({ error: 'Unauthenticated' });
    }
    
    Post.remove({post_id: req.params.id}, (err, output) => {
        if(err) return res.status(500).json({error: 'database failure'});
        
        return res.status(204).end();
    });
});

module.exports = router;
