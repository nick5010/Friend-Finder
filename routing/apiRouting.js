app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'))
});

app.post('/api/friends', function(req, res){
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    reservations.push(newFriend);
    res.json(newFriend);

})