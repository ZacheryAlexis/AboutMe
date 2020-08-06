const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.options('*', cors());

app.get('/Zachery',function(req,res){
    res.send({
        "Name": "Zachery",
        "Age": 16,
        "School": "Saint Joseph HighSchool",
        "Music": "Jazz",
        "Video_Game": "Final Fantasy VII REMAKE",
        "Field_of_Study": "Cyber Security"
    });
    
});
app.get('/Cloud', function(req,res){
    res.send({
        "Name": "Cloud",
        "Age": "21",
        "School": "Unknown School in Nebleheim",
        "Music": "EDM",
        "Video_Game": "None",
        "Field_of_Study":  "SHINRA SOLDIER PROGRAM"
    });
});

// Sets up the sever 
app.listen(3000, function() {
    console.log('Server running on port 3000!');
});