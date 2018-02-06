require('./app.scss');

var removeIframeFromElement = require('./removeIframeFromElement');
var addIframeToElement = require('./addIframeToElement');

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    button.removeEventListener("click", appendListItem);
  });
}


var body = document.getElementsByTagName("body")[0];
removeIframeFromElement(body);
addIframeToElement(body);
