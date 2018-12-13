// <<-------------------------------Routes------------------------------->>
const mongoose = require('mongoose'),
    User = mongoose.model('User')

//Talk to Controller
const users = require("../controllers/users");

// Root Request

module.exports = function(app) {
    // Show all tasks
    app.get('/tasks', users.index);
    
    // Add new task
    app.post('/tasks', users.create);
    
    // Update task
    app.put('/tasks/:id/', users.update);

    // Show specific task
    app.get('/tasks/:id/', users.show);

    // DeleteFerret Post
    app.delete('/tasks/:id/', users.delete);
}
