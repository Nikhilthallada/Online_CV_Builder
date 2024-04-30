
function addNewWEField() {
  

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}





function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let contactField = document.getElementById("contactField").value;
  let addressField = document.getElementById("addressField").value;
  let GeeksforGeeksField = document.getElementById("GeeksforGeeksField").value;
  let GithubField = document.getElementById("GithubField").value;
  let linkedField = document.getElementById("linkedField").value;
  let objectiveField = document.getElementById("objectiveField").value;
  let skillField = document.getElementById("skillField").value;
  let publicationField = document.getElementById("publicationField").value;

  // Select the template
  let templateSelect = document.getElementById("template-select");
  let selectedTemplate = templateSelect.value; // Get the selected template value
  let selectedTemplateSection = document.getElementById(selectedTemplate);

  if (selectedTemplateSection) {
    // Fill details based on the selected template
    switch (selectedTemplate) {
      case "template1":
        document.getElementById("nameT1").innerHTML = nameField;
        document.getElementById("contactT").innerHTML = contactField;
        document.getElementById("addressT").innerHTML = addressField;
        document.getElementById("GeeksforGeeksT").innerHTML = GeeksforGeeksField;
        document.getElementById("GithubT").innerHTML = GithubField;
        document.getElementById("linkedT").innerHTML = linkedField;
        document.getElementById("objectiveT").innerHTML = objectiveField;
        document.getElementById("SkillT").innerHTML = skillField;
        document.getElementById("PublicationT").innerHTML = publicationField;
        break;
      case "template2":
        // Fill details for template 2
        document.getElementById("nameT2").innerHTML = nameField; // Change to nameT2 for Template 2
        document.getElementById("contactT").innerHTML = contactField;
        document.getElementById("addressT").innerHTML = addressField;
        document.getElementById("GeeksforGeeksT").innerHTML = GeeksforGeeksField;
        document.getElementById("GithubT").innerHTML = GithubField;
        document.getElementById("linkedT").innerHTML = linkedField;
        document.getElementById("objectiveT").innerHTML = objectiveField;
        document.getElementById("SkillT").innerHTML = skillField;
        document.getElementById("PublicationT").innerHTML = publicationField;
        break;
      case "template3":
        // Fill details for template 3
        document.getElementById("nameT3").innerHTML = nameField; // Change to nameT3 for Template 3
        document.getElementById("contactT").innerHTML = contactField;
        document.getElementById("addressT").innerHTML = addressField;
        document.getElementById("GeeksforGeeksT").innerHTML = GeeksforGeeksField;
        document.getElementById("GithubT").innerHTML = GithubField;
        document.getElementById("linkedT").innerHTML = linkedField;
        document.getElementById("objectiveT").innerHTML = objectiveField;
        document.getElementById("SkillT").innerHTML = skillField;
        document.getElementById("PublicationT").innerHTML = publicationField;
        break;
      default:
        break;
    }
  }
  selectTemplate();

  // Show the CV template section
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

  
function selectTemplate() {
  let templateSelect = document.getElementById("template-select");
  let selectedTemplate = templateSelect.value;

  // Hide all template sections
  let templateSections = document.querySelectorAll(".template-section");
  templateSections.forEach(section => {
    section.style.display = "none";
  });

  // Show the selected template section
  let selectedTemplateSection = document.getElementById(selectedTemplate);
  if (selectedTemplateSection) {
    selectedTemplateSection.style.display = "block";
  }
}
function generateTemplate1() {
  // Update content for Template 1
  document.querySelector(".template1").innerHTML = `
    <!-- Template 1 content -->
    <h1>Template 1</h1>
    <!-- Add more HTML content here -->
  `;
}

function generateTemplate2() {
  // Update content for Template 2
  document.querySelector(".template2").innerHTML = `
    <!-- Template 2 content -->
    <h1>Template 2</h1>
    <!-- Add more HTML content here -->
  `;
}

function generateTemplate3() {
  // Update content for Template 3
  document.querySelector(".template3").innerHTML = `
    <!-- Template 3 content -->
    <h1>Template 3</h1>
    <!-- Add more HTML content here -->
  `;
}
function printCV() {
  window.print();
}
