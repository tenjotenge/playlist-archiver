// pages/api/archive-spotify-playlist-api-endpoint.js
import { NextApiRequest, NextApiResponse } from 'next';
import exportSpotifyPlaylist from '../../utils/spotifyArchiver';
// api endpoint so that the frontend can make requests to the program at filename

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { playlistURL } = req.body;
  
      // Call your Spotify archiver logic with the playlistURL
      const archiveResult = await exportSpotifyPlaylist(playlistURL);
  
      if (archiveResult.success) {
        // Set headers to indicate that the response should be treated as a downloadable file
        res.setHeader('Content-Disposition', `attachment; filename="${archiveResult.fileName}"`);
        res.status(200).json(archiveResult.data); // Assuming archiveResult.data contains the JSON data
      } else {
        res.status(400).json({ error: archiveResult.error });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
}