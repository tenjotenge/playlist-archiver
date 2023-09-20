// pages/api/archive-spotify-playlist-api-endpoint.js
import exportSpotifyPlaylist from '../../utils/spotifyArchiver';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { playlistURL } = req.body;

    // Call your Spotify archiver logic with the playlistURL
    const archiveResult = await exportSpotifyPlaylist(playlistURL);

    if (archiveResult.success) {
      // Set headers to indicate that the response should be treated as a downloadable file
      res.setHeader('Content-Disposition', `attachment; filename="${archiveResult.fileName}"`);
      res.setHeader('Content-Type', 'application/json'); // Specify content type as JSON
      res.status(200).send(archiveResult.data); // Send the JSON data as the response
    } else {
      res.status(400).json({ error: archiveResult.error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
