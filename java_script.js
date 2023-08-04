class Object {
  constructor(name, description, image, technologies, technologiesDesk, linkLive, linkSource) {
    this.projectDetails = {
      name,
      description,
      image,
      technologies,
      technologiesDesk,
      linkLive,
      linkSource,
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
    let dynamicList = '';
    for (let i = 0; i < this.projectDetails.technologies.length; i += 1) {
      dynamicList += `<li class="tag tag-mobile">${this.projectDetails.technologies[i]}</li>`;
      dynamicList += '\n';
    }

    for (let i = 0; i < this.projectDetails.technologiesDesk.length; i += 1) {
      dynamicList += `<li class="tag tag-desk">${this.projectDetails.technologiesDesk[i]}</li>`;
      dynamicList += '\n';
    }

    return dynamicList;
  }

  returnLinks() {
    const dynamicbutton = `<a href='${this.projectDetails.linkLive}'>  <button type="button" class="button icon-buttonn">
    See live
    <svg class="icon-button" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
            fill="white" />
    </svg>
</button>
</a>
<a href='${this.projectDetails.linkSource}'>
<button type="button" class="button icon-buttonn">
    See source
    <svg class="icon-button" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 18 20" fill="none">
        <g clip-path="url(#clip0_48_2225)">
            <path
                d="M17.9992 7.46114C17.9992 6.32124 17.6332 5.25043 16.9345 4.31779C17.2007 3.41969 17.2672 2.27979 17.2007 0.967185C17.1674 0.414508 16.7349 0 16.2025 0C15.9031 0 13.3744 0.0345423 11.9105 1.38169C10.6461 1.1399 9.31526 1.1399 8.01766 1.38169C6.58698 0.0345423 4.05833 0 3.72561 0C3.19326 0 2.76073 0.414508 2.72746 0.967185C2.62764 2.27979 2.72746 3.41969 2.99363 4.31779C2.29492 5.28497 1.92894 6.35579 1.92894 7.46114C1.92894 9.8791 3.72561 12.0553 6.45389 13.0915C6.35407 13.2988 6.28753 13.5406 6.22099 13.7824C3.32635 13.4715 1.96221 10.7427 1.89566 10.639C1.66276 10.1209 1.06387 9.91364 0.564795 10.19C0.0657196 10.4318 -0.133911 11.0535 0.132263 11.5717C0.198806 11.7444 2.02875 15.4404 6.05463 15.8549V18.9637C6.05463 19.5509 6.48716 20 7.05278 20H12.8753C13.441 20 13.8735 19.5509 13.8735 18.9637V14.8532C13.8735 14.2314 13.7404 13.6442 13.5075 13.1261C16.2025 12.0553 17.9992 9.91364 17.9992 7.46114Z"
                fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_48_2225">
                <rect width="18" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
</button>
</a>`;

    return dynamicbutton;
  }
}

const project1 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'assests/bottomframe.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

const project2 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'project1.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

const project3 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'project1.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

const project4 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'project1.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

const project5 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'project1.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

const project6 = new Object(
  'Keeping track of hundreds of components',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  'project1.png',
  ['JavaScript', 'Rubby on Rails', 'CSS'],
  ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  'https://example.com/live',
  'https://github.com/example/project_x',
);

function removeHighlight() {
  const list = document.querySelectorAll('[class^="high"]');
  list[0].classList.remove('underline');
  list[1].classList.remove('underline');
  list[2].classList.remove('underline');
}

// eslint-disable-next-line no-unused-vars
function showMenu() {
  removeHighlight();
  document.querySelector('.nav-bar').classList.add('open');
  document.querySelector('.menu-btn').classList.add('hide');
  document.querySelector('.menu-btnn').classList.add('show');
}

function closeMenu() {
  document.querySelector('.nav-bar').classList.remove('open');
  document.querySelector('.menu-btn').classList.remove('hide');
  document.querySelector('.menu-btnn').classList.remove('show');
}

// eslint-disable-next-line no-unused-vars
function highLight(name) {
  closeMenu();
  const width = window.innerWidth;
  if (width >= 768) {
    removeHighlight();
    document.querySelector(name).classList.add('underline');
  }
}

// eslint-disable-next-line no-unused-vars
function projectDetailWindow(projectName) {
  switch (projectName) {
    case 'project1':
      // document.getElementById('projbk').style.backgroundImage=`url("${project1.returnImage()}")`;
      document.querySelector('#name').innerHTML = project1.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project1.returnList();
      document.querySelector('#description').innerHTML = project1.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project1.returnLinks();
      break;
    case 'project2':
      document.querySelector('#name').innerHTML = project2.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project2.returnList();
      document.querySelector('#description').innerHTML = project2.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project2.returnLinks();
      break;
    case 'project3':
      document.querySelector('#name').innerHTML = project3.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project3.returnList();
      document.querySelector('#description').innerHTML = project3.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project3.returnLinks();
      break;
    case 'project4':
      document.querySelector('#name').innerHTML = project4.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project4.returnList();
      document.querySelector('#description').innerHTML = project4.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project4.returnLinks();
      break;
    case 'project5':
      document.querySelector('#name').innerHTML = project5.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project5.returnList();
      document.querySelector('#description').innerHTML = project5.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project5.returnLinks();
      break;
    default:
      document.querySelector('#name').innerHTML = project6.returnName();
      document.querySelector('.project-detail-tags').innerHTML = project6.returnList();
      document.querySelector('#description').innerHTML = project6.returnDescription();
      document.querySelector('.pro-detail-button').innerHTML = project6.returnLinks();
  }

  if (projectName === 'close') {
    document.querySelector('.project-details-bkg').classList.remove('top-open');
  } else {
    document.querySelector('.project-details-bkg').classList.add('top-open');
  }
}