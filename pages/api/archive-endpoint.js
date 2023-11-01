// pages/api/archive-spotify-playlist-api-endpoint.js
import spotifyArchiver from '../../utils/spotifyArchiver';


// This file is no longer used in the project and was swapped out
// for exportSpotifyPlaylist.js

// only keeping this here in case I need to revert back to the
// original implementation of the project

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { playlistURL } = req.body;

    // Call your Spotify archiver logic with the playlistURL
    const archiveResult = await spotifyArchiver(playlistURL);

    if (archiveResult.success) {
      res.status(200).json({ message: 'Playlist archived successfully' });
    } else {
      res.status(400).json({ error: archiveResult.error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
