/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "name": "Insert blocks by name",
  "description": "Middle or shift-click the code area, or press Ctrl+Space to bring up a block search window. Type block names (or parts of them) and drag them into the code area to add them to your project. The menu can be navigated with the arrow keys and Enter and supports autocompleting with Tab. To prevent the menu from closing, hold Shift while dragging blocks out of it.",
  "credits": [
    {
      "name": "Tacodiva",
      "link": "https://scratch.mit.edu/users/Tacodiva7729/"
    },
    {
      "name": "griffpatch"
    },
    {
      "name": "TheColaber",
      "link": "https://scratch.mit.edu/users/TheColaber/"
    },
    {
      "name": "CST1229",
      "link": "https://scratch.mit.edu/users/CST1229/"
    }
  ],
  "tags": [
    "recommended"
  ],
  "enabledByDefault": true,
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "userstyles": [
    {
      "url": "userstyle.css"
    }
  ],
  "settings": [
    {
      "name": "Popup Block Size",
      "id": "popup_scale",
      "type": "integer",
      "min": 1,
      "max": 100,
      "default": 48
    },
    {
      "name": "Popup Width",
      "id": "popup_width",
      "type": "integer",
      "min": 1,
      "max": 100,
      "default": 16
    },
    {
      "name": "Popup Maximum Height",
      "id": "popup_max_height",
      "type": "integer",
      "min": 1,
      "max": 100,
      "default": 40
    }
  ],
  "info": [
    {
      "text": "This addon was previously part of the \"developer tools\" addon but has moved here.",
      "id": "developer-tools"
    }
  ]
};
export default manifest;
