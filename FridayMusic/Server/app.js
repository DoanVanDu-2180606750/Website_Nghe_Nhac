const express = require('express'); 
const app = express(); 
const axios = require('axios');
const port = 8080; 
const cors = require("cors")

app.use(cors())

app.get('/play-list', async function(req, res) {
    let idPlaylist = req.query.id
    const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${idPlaylist}`,
        headers: {
          'X-RapidAPI-Key': 'ef68bc33a9mshfae434ca505b381p18e8bejsnd77e75b16521',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data)
      } catch (error) {
          console.error(error);
      }
  });
  app.get('/artist-list', async function(req, res) {
    let idArtist = req.query.id
    const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${idArtist}`,
        headers: {
          'X-RapidAPI-Key': 'ef68bc33a9mshfae434ca505b381p18e8bejsnd77e75b16521',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      try {
          const response = await axios.request(options);
         res.json(response.data)
      } catch (error) {
          console.error(error);
      }
  });

app.listen(port, function(){
    console.log("Server đang chạy ở cổng " + port);
})

