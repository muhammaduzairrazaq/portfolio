/* eslint-disable max-len */
class Object {
  constructor(
    projName,
    projDescription,
    projImage,
    projTechnologies,
    projTechnologiesDesk,
    projLinkLive,
    projLinkSource
  ) {
    this.projectDetails = {
      name: projName,
      description: projDescription,
      image: projImage,
      technologies: projTechnologies,
      technologiesDesk: projTechnologiesDesk,
      linkLive: projLinkLive,
      linkSource: projLinkSource,
    };
  }

  returnName() {
    return this.projectDetails.name;
  }

  returnDescription() {
    return this.projectDetails.description;
  }

  returnImage() {
    return this.projectDetails.image;
  }

  returnList() {
    let dynamicList = "";
    for (let i = 0; i < this.projectDetails.technologies.length; i += 1) {
      dynamicList += `<li class="tag tag-mobile">${this.projectDetails.technologies[i]}</li>`;
      dynamicList += "\n";
    }

    for (let i = 0; i < this.projectDetails.technologiesDesk.length; i += 1) {
      dynamicList += `<li class="tag tag-desk">${this.projectDetails.technologiesDesk[i]}</li>`;
      dynamicList += "\n";
    }

    return dynamicList;
  }

  returnWorkList() {
    let dynamicList = "";
    for (let i = 0; i < this.projectDetails.technologies.length; i += 1) {
      dynamicList += `<li class="tag">${this.projectDetails.technologies[i]}</li>`;
      dynamicList += "\n";
    }

    return dynamicList;
  }

  returnLinks() {
    const dynamicbutton = `<a href='${this.projectDetails.linkLive}'>  
    <button type="button" class="button icon-buttonn">
    See live
    <svg  class="icon-button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
</svg>
</button>
</a>
<a href='${this.projectDetails.linkSource}'>
<button type="button" class="button icon-buttonn">
    See source
    <svg class="icon-button" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <g clip-path="url(#clip0_34_3031)">
    <path d="M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_34_3031">
      <rect width="18" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
</button>
</a>`;

    return dynamicbutton;
  }
}

const project1 = new Object(
  "Online AI Courses Website",
  `In this project I have created an educational website which offers free
  Artifical Intelligence courses. Although the site is currently in a wireframe phase,
  its purpose is clear—to ignite curiosity and encourage discovery.
  The Home page serves as a gateway, offering glimpses into various AI topics,
  from fundamental concepts to advanced applications.
  On the About page, you'll find insights into the mission and the dedicated
  team behind this initiative, all working towards democratizing AI education.
  While the website doesn't currently provide courses,
  it sets the stage for future learning experiences.`,
  "assests/project1.png",
  ["JavaScript", "HTML", "CSS"],
  ["Github", "Javascript", "Bootstrap", "HTML", "CSS"],
  "https://muhammaduzairrazaq.github.io/capstoneProject/",
  "https://github.com/muhammaduzairrazaq/capstoneProject"
);

const project2 = new Object(
  "Keeping track of hundreds of components",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.`,
  "",
  ["JavaScript", "Rubby on Rails", "CSS"],
  ["Codekit", "Github", "Javascript", "Bootstrap", "Terminal", "Codepen"],
  "https://example.com/live",
  "https://github.com/example/project_x"
);

const project3 = new Object(
  "Keeping track of hundreds of components",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.`,
  "",
  ["JavaScript", "Rubby on Rails", "CSS"],
  ["Codekit", "Github", "Javascript", "Bootstrap", "Terminal", "Codepen"],
  "https://example.com/live",
  "https://github.com/example/project_x"
);

const project4 = new Object(
  "Keeping track of hundreds of components",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.`,
  "",
  ["JavaScript", "Rubby on Rails", "CSS"],
  ["Codekit", "Github", "Javascript", "Bootstrap", "Terminal", "Codepen"],
  "https://example.com/live",
  "https://github.com/example/project_x"
);

const project5 = new Object(
  "Keeping track of hundreds of components",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.`,
  "",
  ["JavaScript", "Rubby on Rails", "CSS"],
  ["Codekit", "Github", "Javascript", "Bootstrap", "Terminal", "Codepen"],
  "https://example.com/live",
  "https://github.com/example/project_x"
);

const project6 = new Object(
  "Keeping track of hundreds of components",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s.`,
  "",
  ["JavaScript", "Rubby on Rails", "CSS"],
  ["Codekit", "Github", "Javascript", "Bootstrap", "Terminal", "Codepen"],
  "https://example.com/live",
  "https://github.com/example/project_x"
);

const objectsArray = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

function displayWorksection() {
  let dynamicWorksection = "";
  for (let i = 0; i < objectsArray.length; i += 1) {
    dynamicWorksection += `
    <div class="work" style="background-image: url('${objectsArray[i].returnImage()}');">
      <div class="work-inside">
        <p>
          ${objectsArray[i].returnName()}
        </p>
        <ul class="work-inside-tags">
          ${objectsArray[i].returnWorkList()}
        </ul>
        <button type="button" class="button" onclick="projectDetailWindowOpenClose(${i})">See
        project</button>
      </div>
    </div>
    \n
    `;
  }
  document.querySelector(".recent-works-container").innerHTML =
    dynamicWorksection;
}

displayWorksection();

function removeHighlight() {
  const list = document.querySelectorAll('[class^="high"]');
  list[0].classList.remove("underline");
  list[1].classList.remove("underline");
  list[2].classList.remove("underline");
}

// eslint-disable-next-line no-unused-vars
function showMenu() {
  removeHighlight();
  document.querySelector(".nav-bar").classList.add("open");
  document.querySelector(".menu-btn").classList.add("hide");
  document.querySelector(".menu-btnn").classList.add("show");
}

function closeMenu() {
  document.querySelector(".nav-bar").classList.remove("open");
  document.querySelector(".menu-btn").classList.remove("hide");
  document.querySelector(".menu-btnn").classList.remove("show");
}

// eslint-disable-next-line no-unused-vars
function highLight(name) {
  closeMenu();
  const width = window.innerWidth;
  if (width >= 768) {
    removeHighlight();
    document.querySelector(name).classList.add("underline");
  }
}

// eslint-disable-next-line no-unused-vars
function projectDetailWindow(projectName) {
  document.getElementById(
    "projbk"
  ).style.backgroundImage = `url("${objectsArray[projectName].returnImage()}")`;
  document.querySelector("#name").innerHTML =
    objectsArray[projectName].returnName();
  document.querySelector(".project-detail-tags").innerHTML =
    objectsArray[projectName].returnList();
  document.querySelector("#description").innerHTML =
    objectsArray[projectName].returnDescription();
  document.querySelector(".pro-detail-button").innerHTML =
    objectsArray[projectName].returnLinks();
}

// eslint-disable-next-line no-unused-vars
function projectDetailWindowOpenClose(status) {
  if (status === "close") {
    document.querySelector(".project-details-bkg").classList.remove("top-open");
  } else {
    document.querySelector(".project-details-bkg").classList.add("top-open");
  }
  projectDetailWindow(status);
}

const button = document.querySelector(".form-button");
button.addEventListener("click", (event) => {
  const email = document.getElementById("email-address");
  const emailAddress = email.value;
  const lowerCase = emailAddress.toLowerCase();
  if (emailAddress !== lowerCase) {
    document.querySelector(".error").classList.add("display-flex");
    event.preventDefault();
  } else {
    document.querySelector(".error").classList.remove("display-flex");
  }
});

const userName = document.querySelector("#user-name");
const emailAddress = document.querySelector("#email-address");
const message = document.querySelector("#text-area");

function dataStorage() {
  const formData = {
    name: userName.value,
    email: emailAddress.value,
    message: message.value,
  };
  localStorage.setItem("data", JSON.stringify(formData));
}

const elements = [userName, emailAddress, message];
for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener("focusout", dataStorage);
}
const userData = JSON.parse(localStorage.getItem("data"));
if (userData) {
  userName.value = userData.name;
  emailAddress.value = userData.email;
  message.value = userData.message;
}
