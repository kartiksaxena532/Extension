
# Digital Notice Board
 A chrome extension to make a custom notice board for collaboration with your peers on the go having various features to interact in a fun way.
Loom Link for proejct demo

## Installation

git clone "the repo link" ./ 
then do "git checkout -b "your branch name"
then git add .
git commit -m "message"
git push

Install my-project with npm

```bash
  npm i
  npm run dev
```
    
## Documentation

# Tech stack used : 

Vite-web-extension Framework + Tailwind Css + Expressjs

# Project

Building this chrome extension with the latest design trend inspired from the japanese bento boxes to increase reader retention and utilising space efficently.







## Layout design.
![Screenshot 2024-07-22 202548](https://github.com/user-attachments/assets/2a9cadc5-73b7-4b65-bcf8-cd8866126965)
https://bentogrids.com/shots/clsbotf1c005hers3wd4lp4v4
## Layout CSS.
```
body {
  background: hsla(0, 0%, 0%, 1);

background: radial-gradient(circle, hsla(0, 0%, 0%, 1) 9%, hsla(247, 60%, 21%, 1) 54%);

background: -moz-radial-gradient(circle, hsla(0, 0%, 0%, 1) 9%, hsla(247, 60%, 21%, 1) 54%);

background: -webkit-radial-gradient(circle, hsla(0, 0%, 0%, 1) 9%, hsla(247, 60%, 21%, 1) 54%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#1C1554", GradientType=1 );
}
.container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.2fr 1fr 1fr 0.8fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "slides keep Pomodoro"
    "Forma Spreadsheet Spreadsheet"
    "Forma Quote Poll"
    "Steps google-meet Google-Calender";
}

.Pomodoro { grid-area: Pomodoro; }

.Spreadsheet { grid-area: Spreadsheet; }

.Forma { grid-area: Forma; }

.Quote { grid-area: Quote; }

.Poll { grid-area: Poll; }

.Steps { grid-area: Steps; }

.Google-Calender { grid-area: Google-Calender; }

.slides { grid-area: slides; }

.keep { grid-area: keep; }

.google-meet { grid-area: google-meet; }

```

## Usage/Examples

```javascript
{
  "manifest_version": 3,
  "name": "Digital Notice Board",
  "version": "1.0",
  "description": "A digital notice board for your new tab page.",
  "permissions": [
    "storage"
  ],
  "background": {
    "service_worker": "src/background.js"
  },
  "chrome_url_overrides": {
    "newtab": "src/popup.html" //make the default page as the extension
  },
  "action": {
    "default_popup": "src/popup.html"
  },
  "icons": {
    "16": "icon/16.png",
    "32": "icon/32.png",
    "48": "icon/48.png",
    "96": "icon/96.png",
    "128": "icon/128.png"
  }
}

```


## Authors

- [@kartiksaxena532](https://www.github.com/kartiksaxena532)

- [@Yash-version-Shekhawat](https://www.github.com/Yash-version-Shekhawat)

