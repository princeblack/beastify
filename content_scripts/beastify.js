/*
beastify():
* removes every node in the document.body,
* then inserts the chosen beast
* then removes itself as a listener
*/
function beastify(request, sender, sendResponse) {
    removeEverything();
    insertBeast(request.beastURL);
    browser.runtime.onMessage.removeListener(beastify);
  }
  
  /*
  Remove every node under document.body
  */
  function removeEverything() {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
  }
  
  /*
  Given a URL to a beast image, create and style an IMG node pointing to
  that image, then insert the node into the document.
  */

  function insertBeast(beastURL) {
    var bis = window.location.href
    var beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.setAttribute("style", "width: 100vw");
    beastImage.setAttribute("style", "height: 100vh");
    document.body.appendChild(beastImage);
    var test = document.createElement('a');
    test.innerHTML= bis;
    document.body.appendChild(test).after(firstChild)
  }
  let array = [];
  // function getUrls(){
   let url =  window.location.href
    array.push(url)
    console.log(array);
  // }
  // getUrls()
  
  /*
  Assign beastify() as a listener for messages from the extension.
  */
  browser.runtime.onMessage.addListener(beastify);