/*
let url = 'http://localhost:3000/Zachery';

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
*/

let url = 'https://accountdatapractice.herokuapp.com/Cloud';
fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })