import browser from "webextension-polyfill";

console.log("Hello from the Digital Board");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});
