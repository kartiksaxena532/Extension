
# Digital Notice Board
 A chrome extension to make a custom notice board for collaboration with your peers on the go having various features to interact in a fun way.


 
## Installation

git clone "the repo link" ./ 

Install my-project with npm

```bash
  npm i
  npm run dev
```
    
## Documentation

Tech stack used : 

Vite-web-extension Framework + Tailwind Css + Expressjs

# Project

Building this chrome extension with the latest design trend inspired from the japanese bento boxes to increase reader retention and utilising space efficently.







## Layout design.
![Screenshot 2024-07-22 202548](https://github.com/user-attachments/assets/2a9cadc5-73b7-4b65-bcf8-cd8866126965)




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

