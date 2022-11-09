const filter = {
  url: [
    {
      urlContains: "https://clients.mindbodyonline.com/classic/mainclass",
    },
  ],
};

function checkSignIn() {
  document.getElementById("signInContainer");
}

chrome.action.onClicked.addListener(function (tab) {
  if (tab.url.includes("clients.mindbodyonline.com/classic/mainclass")) {
    console.log("Hello");
  }
});
