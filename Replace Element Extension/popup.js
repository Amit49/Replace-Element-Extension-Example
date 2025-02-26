imageData = {
  "element": "div",
  "attributes": {
    "id": "main-container",
    "class": "container flex-box",
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "20px"
    }
  },
  "children": [
    {
      "element": "img",
      "attributes": {
        "src": "https://www.wootzapp.com/image/logo2.png",
        "alt": "Description",
        "width": "300",
        "height": "200",
        "class": "responsive-img",
        "style": {
          "objectFit": "cover",
          "borderRadius": "8px"
        }
      }
    },
    {
      "element": "div",
      "content": "Image caption"
    }
  ]
}

// Define different JSON data for each element type
const divData = {
  "element": "div",
  "attributes": {
    "id": "main-container",
    "class": "container flex-box",
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "20px"
    }
  },
  "children": [
    {
      "element": "div",
      "content": "This is a replaced div element"
    }
  ]
};

const urlData = {
  "element": "a",
  "attributes": {
    "href": "https://new_replace_url.com",
    "target": "_blank",
    "style": {
      "color": "#0066cc",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  },
  "content": "This is New URL which replace the previous one"
};

var urlElement = "body > p > a"
var divElement = "body > div"
var imageElement = "body > img"
// Add event listeners for each button
document.addEventListener('DOMContentLoaded', function() {
  // Custom replacement button
  document.getElementById('customReplaceButton').addEventListener('click', function() {
    const customSelector = document.getElementById('selectorInput').value;
    if (!customSelector) {
      alert('Please enter a selector');
      return;
    }
    
    // Get the type of element to determine which data to use
    chrome.wootz.replaceElement(customSelector, JSON.stringify(imageData), // Default to divData
      (result) => {
        console.log("Custom Element Replaced!");
      }
    );
  });
});