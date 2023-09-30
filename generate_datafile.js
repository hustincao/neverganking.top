import * as fs from 'fs';
import "dotenv/config.js";

const API_KEY = process.env.API_KEY;
const PLAYLIST_ID = process.env.PLAYLIST_ID;

let videos = [];
let next_page_token = "";
let total_results = 1;

while(videos.length < total_results){
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${PLAYLIST_ID}${next_page_token ? "&pageToken=" + next_page_token : ""}&key=${API_KEY}`;

    const response = await fetch(url);
    const j = await response.json();

    const {
        items,
        nextPageToken,
        pageInfo: { totalResults, resultsPerPage },
    } = j;

    videos = [...videos, ...items.map((i) => i.contentDetails.videoId)];

    next_page_token = nextPageToken;
    total_results = totalResults;
}

// videos = [
//     'y6zmErzdCOU', 'EQHijWxwdro', 'uXUFx_65sU0',
//     'eB7AHdrMum4', '7sUYp6D5EJA', 'CFjF3ILqlE4',
//     'wY1Y3X8QcFM', '75gXM45vH6s', '1oV8z3bjLBQ',
//     'y2IpG1kZbrs', 'yR3kHMIug2U', 'C1eMeCibWsM',
//     'I0-G98-XBLg', '0m3amLjdkUY', 'BUYErFDZ0Uo',
//     'AyOH58wP1d0', 'WutDn2fOl44', '6WrAlQroxUE',
//     'UngkzuTz4hY', 'fBgVj1zabVc', 'acaby4dBHuM',
//     '5mRJ97eV7M4', 'b8EC1sEZ4kQ', 'IRQS0GEDX-Q',
//     'whELOebSI9U', '3hDHZcTRlOc', '1SprY2WirqU',
//     'uZax6-Af6Bc', 'g9dbOqgY0b8', '3QAqk8-pToU',
//     '0SsAQ5ukjvg', 'PlwZNF7VE2U', '3NnLm3VsN-U',
//     'zbGLPqs9SeQ', 'ld5xRi3tYLE', '8Wo83JJnOI0',
//     'QFQze-9St20', 'PMfIbThVN2E', 'wAY-9lWGzsc',
//     'e77SpmRw_sY', '244zYe4MmW8', 'VRGLCB_OOn0',
//     'UTd6coM8NNE'
// ]

fs.writeFile("static/videos.json", `[${videos.map((v) => `"${v}"`)}]`, (err) => {
    if (err) {
        console.log(err);
    }
});
