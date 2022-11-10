const filter = {
  url: [
    {
      urlContains: "https://clients.mindbodyonline.com/classic/mainclass",
    },
  ],
};



function displayAvailableTimes() {
    function checkSignIn() {
      let signInButton = document.getElementById("btnSignIn");
      if (signInButton !== null) {
          alert("Please sign in to use this extension");
      }
    }
  checkSignIn();
 
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("clients.mindbodyonline.com/classic/mainclass")) {
    console.log()
     chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: displayAvailableTimes
    });
  }
});

