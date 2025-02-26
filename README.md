# Replace-Element-Extension-Example

JSON Format
The API accepts JSON data in the following format:
```
{
  "element": "string",      // HTML element type
  "attributes": {           // Optional element attributes
    "id": "string",
    "class": "string",
    "style": {             // Optional CSS styles
      "property": "value"
    }
  },
  "content": "string",     // Optional text content
  "children": []           // Optional array of child elements
}
```

Usage Example
```
// Extension code
chrome.wootz.replaceElement(
  "#target-element",
  JSON.stringify({
    element: "div",
    attributes: {
      class: "new-container",
      style: {
        backgroundColor: "#fff",
        padding: "20px"
      }
    },
    children: [{
      element: "p",
      content: "New content"
    }]
  })
);
```
