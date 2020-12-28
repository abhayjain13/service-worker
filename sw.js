if ("serviceWorker" in navigator) {
  console.log("Browser support Service Worker");
  navigator.serviceWorker.register("service-worker.js");
}
