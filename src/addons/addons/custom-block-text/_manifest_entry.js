/* generated by pull.js */
const manifest = {
  "name": "Customizable block text style",
  "description": "Lets you customize the style of text on blocks, including adjusting the size, using bold text, or adding a shadow.",
  "tags": [],
  "credits": [
    {
      "name": "Secret-chest"
    },
    {
      "name": "_nix",
      "link": "https://scratch.mit.edu/users/_nix/"
    },
    {
      "name": "DNin01"
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "name": "Text size (%)",
      "id": "size",
      "type": "integer",
      "min": 75,
      "max": 200,
      "default": 100
    },
    {
      "name": "Bold text",
      "id": "bold",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Shadow under text",
      "id": "shadow",
      "type": "boolean",
      "default": false
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": false
};
export default manifest;
