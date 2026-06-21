/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************************!*\
  !*** ./src/exercises/ulamSpiral.ts ***!
  \*************************************/

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const originX = canvasWidth / 2;
    const originY = canvasHeight / 2;
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91bGFtU3BpcmFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDbEQsTUFBTSxNQUFNLEdBQTBDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0YsTUFBTSxHQUFHLEdBQTZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsTUFBTSxXQUFXLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6QyxNQUFNLFlBQVksR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzNDLE1BQU0sT0FBTyxHQUFXLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDeEMsTUFBTSxPQUFPLEdBQVcsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvZXhlcmNpc2VzL3VsYW1TcGlyYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoQ2FudmFzXCIpO1xyXG5cdGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHRjb25zdCBjYW52YXNXaWR0aDogbnVtYmVyID0gY2FudmFzLndpZHRoO1xyXG5cdGNvbnN0IGNhbnZhc0hlaWdodDogbnVtYmVyID0gY2FudmFzLmhlaWdodDtcclxuXHRjb25zdCBvcmlnaW5YOiBudW1iZXIgPSBjYW52YXNXaWR0aCAvIDI7XHJcblx0Y29uc3Qgb3JpZ2luWTogbnVtYmVyID0gY2FudmFzSGVpZ2h0IC8gMjtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9