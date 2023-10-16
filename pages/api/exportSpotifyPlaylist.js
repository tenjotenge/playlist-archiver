import SpotifyWebApi from 'spotify-web-api-node';
import fs from 'fs/promises';

require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export default async (req, res) => {
  const { playlistURL } = req.body;

  try {
    // Set up authentication and obtain an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    // Extract the playlist ID from the URL
    const playlistId = playlistURL.match(/playlist\/(\w+)/)[1];

    // Fetch the playlist data
    const playlistInfo = await spotifyApi.getPlaylist(playlistId);
    const playlistName = playlistInfo.body.name; // Get the playlist name
    console.log(`${playlistName} has been fetched.`)

    // Fetch the playlist tracks
    const playlistTracks = await spotifyApi.getPlaylistTracks(playlistId);

    const playlistData = playlistTracks.body.items.map((item) => ({
      title: item.track.name,
      album: item.track.album.name,
      artist: item.track.artists.map((artist) => artist.name).join(', '),
      spotifyLink: item.track.external_urls.spotify,
    }));

    const fileName = `public/downloads/playlist.json`;

    // Save the playlist data to a JSON file with the playlist name
    await fs.writeFile(fileName, JSON.stringify(playlistData, null, 2));
    console.log(`${playlistName} Playlist data saved to ${fileName}`);

    res.status(200).json({ message: `Playlist data saved to ${fileName}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Playlist archiving failed' });
  }
};
