const filter = {
  url: [
    {
      urlContains: "https://clients.mindbodyonline.com/classic/mainclass",
    },
  ],
};

function displayAvailableTimes() {
    let url_base = "https://clients.mindbodyonline.com"

    function checkSignIn() {
      let signInButton = document.getElementById("btnSignIn");
      if (signInButton !== null) {
          alert("Please sign in to use this extension");
            return false
      }
      return true
    }

    function addCheckIfAvailable() {
        let els = document.getElementsByClassName("SignupButton");
        Array.from(els).forEach((el) => {
            let start = el.outerHTML.indexOf("/ASP")
            let end = el.outerHTML.indexOf("';\"")
            url_path = url_base + el.outerHTML.substring(start, end)
            url_path = url_path.replaceAll("amp", "").replaceAll(";", "")
            console.log(url_path)
        });

    }



    if (!checkSignIn()){
        return
    }
    console.log("You're signed in already, great!")
    addCheckIfAvailable()

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

