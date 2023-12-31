const SpotifyWebApi = require('spotify-web-api-node');
const fs = require('fs/promises');
require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Function to export Spotify playlist data to a JSON object
async function exportSpotifyPlaylist(playlistURL) {
  try {
    // Set up authentication and obtain an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    // Extract the playlist ID from the URL
    const playlistId = playlistURL.match(/playlist\/(\w+)/)[1];

    // Fetch the playlist data
    const playlistInfo = await spotifyApi.getPlaylist(playlistId);
    const playlistName = playlistInfo.body.name; // Get the playlist name

    // Fetch the playlist tracks
    const playlistTracks = await spotifyApi.getPlaylistTracks(playlistId);

    // Create a queue for playlist data
    const playlistDataQueue = [];

    playlistTracks.body.items.forEach((item) => {
      const trackData = {
        title: item.track.name,
        album: item.track.album.name,
        artist: item.track.artists.map((artist) => artist.name).join(', '),
        spotifyLink: item.track.external_urls.spotify,
      };
      playlistDataQueue.push(trackData);
    });

    const fileName = `${playlistName}-playlist.json`;
    const filePath = path.join(__dirname, '..', 'public', 'downloads', fileName); // Construct the complete file path

    // Use fs.promises.writeFile to write the JSON file to the desired location
    await fs.writeFile(filePath, JSON.stringify(playlistDataQueue, null, 2));

    console.log(`Playlist data saved to ${fileName}`);

    return {
        success: true,
        data: { message: `Playlist data saved to ${fileName}` },
    };
    
  } catch (err) {
    // Handle errors gracefully and return an error object
    return {
      success: false,
      error: err.message,
    };
  }
}

module.exports = exportSpotifyPlaylist;
