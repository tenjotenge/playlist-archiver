import SpotifyWebApi from 'spotify-web-api-node';
import fs from 'fs/promises';

require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

export default async (req, res) => {
  const { playlistURL } = req.body;

  try {
    // Step 1: Set up authentication and obtain an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    // Step 2: Extract the playlist ID from the URL
    const playlistId = playlistURL.match(/playlist\/(\w+)/)[1];

    // Step 3: Fetch the playlist data
    const playlistInfo = await spotifyApi.getPlaylist(playlistId);
    const playlistName = playlistInfo.body.name; // Get the playlist name
    console.log(`${playlistName} has been fetched.`);

    // Step 4: Fetch the playlist tracks
    const playlistTracks = await spotifyApi.getPlaylistTracks(playlistId);

    // Step 5: Transform the data into the desired format
    const playlistData = playlistTracks.body.items.map((item) => ({
      title: item.track.name,
      album: item.track.album.name,
      artist: item.track.artists.map((artist) => artist.name).join(', '),
      spotifyLink: item.track.external_urls.spotify,
    }));

    const fileName = `public/downloads/playlist.json`;

    // Step 6: Save the playlist data to a JSON file with the playlist name
    await fs.writeFile(fileName, JSON.stringify(playlistData, null, 2));
    console.log(`${playlistName} Playlist data saved to ${fileName}`);

    // Step 7: Send a success response
    res.status(200).json({ message: `Playlist data saved to ${fileName}` });
  } catch (err) {
    // Error handling
    console.error(err);

    // Step 8: Send an error response
    res.status(500).json({ error: 'Playlist archiving failed', errorMessage: err.message });
  }
};
