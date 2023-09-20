// components/DownloadButton.js

export default function DownloadButton() {
  return (
    <a href="/api/archive-spotify-playlist-api-endpoint" download="playlist.json">
      Download Playlist
    </a>
  );
}