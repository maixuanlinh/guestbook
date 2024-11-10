const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to display the "Add New Message" form
app.get('/newmessage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'newmessage.html'));
});

// Route to provide guestbook entries as JSON "/guestbook"
app.get('/guestbook', (req, res) => {
  const messages = JSON.parse(fs.readFileSync('messages.json', 'utf8'));
  res.json(messages); // Send JSON data directly to the client
});

// Route to handle new messages "/newmessage"
app.post('/newmessage', (req, res) => {
  const { username, country, message } = req.body;

  if (!username || !country || !message) {
    return res.status(400).send('All fields are required!');
  }

  const messages = JSON.parse(fs.readFileSync('messages.json', 'utf8'));
  const newMessage = {
    id: messages.length + 1,
    username,
    country,
    date: new Date().toISOString(),
    message
  };

  messages.push(newMessage);
  fs.writeFileSync('messages.json', JSON.stringify(messages, null, 2));

  res.redirect('/'); // Redirect back to the homepage
});

// Route to display the AJAX message submission form
app.get('/ajaxmessage', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ajaxmessage.html'));
  });
  

// Route to handle AJAX submission "/ajaxmessage"
app.post('/ajaxmessage', (req, res) => {
  const { username, country, message } = req.body;

  if (!username || !country || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  const messages = JSON.parse(fs.readFileSync('messages.json', 'utf8'));
  const newMessage = {
    id: messages.length + 1,
    username,
    country,
    date: new Date().toISOString(),
    message
  };

  messages.push(newMessage);
  fs.writeFileSync('messages.json', JSON.stringify(messages, null, 2));

  res.json(messages); // Respond with the updated list of messages
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
