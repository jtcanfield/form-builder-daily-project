// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let createLinkParent = document.querySelector("head");
let createLink = document.createElement("link");
createLink.setAttribute("charset", "utf-8");
createLink.setAttribute("href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css");
createLink.setAttribute("rel", "stylesheet");
createLinkParent.appendChild(createLink);
for (i = 0; i < formData.length; i++){
  //Grab Parent
  let setParent = document.getElementById("fields");
  //Create Input Field
  let createInput = "";
  if (formData[i].type === "select"){
    createInput = document.createElement("select");
  } else if (formData[i].type === "textarea"){
    createInput = document.createElement("textarea");
  } else {
    createInput = document.createElement("input");
  }
  //Set Attributes for Tag
  createInput.setAttribute("type", formData[i].type);
  createInput.setAttribute("id", formData[i].id);
  createInput.setAttribute("icon", formData[i].icon);
  createInput.setAttribute("placeholder", formData[i].label);
  setParent.appendChild(createInput);
  //Check if object has options
  if (formData[i].options.length !== 0){
    for (let z = 0; z < formData[i].options.length; z++){
      let createOptions = document.createElement("option");
      createOptions.setAttribute("value", formData[i].options[z].value);
      createOptions.textContent = (formData[i].options[z].label);
      createInput.appendChild(createOptions);
    }
  }
}
