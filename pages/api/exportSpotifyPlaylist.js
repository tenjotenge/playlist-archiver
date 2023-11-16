import SpotifyWebApi from 'spotify-web-api-node';
import fs from 'fs/promises';
import path from 'path';
const { Dropbox } = require('dropbox');

require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

const dropboxToken = process.env.NEXT_PUBLIC_DROPBOX_ACCESS_TOKEN;
const dropbox = new Dropbox({ accessToken: dropboxToken });

export default async (req, res) => {
  const { playlistURL } = req.body;

  try {
    // Step 1: Set up authentication and obtain an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    // Step 2: Extract the playlist ID from the URL
    const playlistIdMatch = playlistURL.match(/playlist\/(\w+)/);
    if (!playlistIdMatch) {
      throw new Error('Invalid playlist URL');
    }
    const playlistId = playlistIdMatch[1];

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

    // Construct the filename with the playlist name
    const fileName = `${playlistName}-pl.json`;

    // Write the playlist data to the server's downloads directory
    //const filePath = path.join(process.cwd(), 'downloads', fileName);
    //await fs.writeFile(filePath, JSON.stringify(playlistData, null, 2));

    const dropboxFilePath = `/playlists/${fileName}`;
    const fileContent = await fs.readFile(filePath);

    await dropbox.filesUpload({
      path: dropboxFilePath,
      contents: fileContent,
    });

    console.log(`Playlist data uploaded to Dropbox: ${dropboxFilePath}`);

    // Optional: Delete the local file if needed
    // await fs.unlink(filePath);

    // Send the file name as a JSON response
    res.status(200).json({
      success: true,
      data: {
        message: `Playlist data uploaded to Dropbox: ${dropboxFilePath}`,
        filePath: dropboxFilePath,
      },
    });
  } catch (err) {
    // Error handling
    console.error(err);

    // Send an error response
    res.status(500).json({ error: 'Playlist archiving failed', errorMessage: err.message });
  }
};
