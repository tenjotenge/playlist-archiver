// pages/api/download.js
const { Dropbox } = require('dropbox');
const { Readable } = require('stream');

require('dotenv').config();

const dropboxToken = process.env.NEXT_PUBLIC_DROPBOX_ACCESS_TOKEN;
const dropbox = new Dropbox({ accessToken: dropboxToken });

export default async (req, res) => {
  try {
    const filePath = req.query.filePath;

    // Download the file content from Dropbox
    const { result } = await dropbox.filesDownload({ path: filePath });

    // Convert the file content to a readable stream
    const fileStream = new Readable();
    fileStream.push(result.fileBinary.toString('utf-8'));
    fileStream.push(null);

    // Set response headers for file download
    res.setHeader('Content-Disposition', `attachment; filename=${req.query.filePath}`);
    res.setHeader('Content-Type', 'application/json');

    // Pipe the file stream to the response
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
