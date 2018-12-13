const mongoose = require('mongoose'),
    User = mongoose.model('User')

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, users) {
            if(err) {
                res.json({message: "Error", error:err})
              }
            else { 
                res.json({message: "Success", data:users})
            }
        })
    },

    create: function(req, res) {
        var user = new User({
            title: req.body.title,
            description: req.body.description,
            completed: false
        });
        
        user.save(function(err) {
            if(err) {
                res.json({message: "Error", error:err})
              }
            else { 
                res.redirect('/tasks')
            }
        })
    },

    update: function(req, res) {
        var this_id = req.params.id;
        var user = User.find({_id:this_id});
        user.update({title: req.body.title, description: req.body.description, },function(err) {
            if(err) {
                res.json({message: "Error", error:err})
              }
            else { 
                res.redirect('/tasks')
            }
        })
    },

    show: function(req, res) {
        var this_id = req.params.id;
        console.log("Displaying name in request parameters: " + this_id);
        User.findOne({_id:this_id}, function(err,user){
            console.log(user);
            res.json({message: "Success", data:user})
        }) 
    },

    delete: function(req,res) {
        var this_id = req.params.id;
    
        User.remove({_id:this_id}, function(err){
            res.json({message: "Success"})
        })
    }
}