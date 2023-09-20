const SpotifyWebApi = require('spotify-web-api-node');
const fs = require('fs');

const spotifyApi = new SpotifyWebApi({
  clientId: '269d2e30798546faa9630a94e7f9a23b',
  clientSecret: '36b051528cd84c869db13d4bf61dd54a',
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

    // Create a write stream to the JSON file
    const writeStream = fs.createWriteStream(fileName);

    // Write the opening bracket for the JSON array
    writeStream.write('[');

    // Iterate through the queue and write data to the file
    while (playlistDataQueue.length > 0) {
      const item = playlistDataQueue.shift();

      // Append the item to the JSON file
      writeStream.write(JSON.stringify(item, null, 2));

      // Add a comma and newline if there are more items in the queue
      if (playlistDataQueue.length > 0) {
        writeStream.write(',\n');
      }
    }

    // Write the closing bracket for the JSON array
    writeStream.write(']\n');

    // Close the write stream
    writeStream.end();

    console.log(`Playlist data saved to ${fileName}`);
  } catch (err) {
    // Handle errors gracefully and return an error object
    return {
      success: false,
      error: err.message,
    };
  }
}

module.exports = exportSpotifyPlaylist;
