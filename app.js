//------------------- Nav menu ----------------------
const bars = document.querySelector(".bars");
const navLinks = document.querySelectorAll(".nav-links");
const nav = bars.parentElement.parentElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 70) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});

bars.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
});

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => nav.classList.remove("open-menu"));
});

//----------------- Mode Toggle -----------------------

const mode = document.querySelector(".mode");
const modeImg = document.querySelector(".mode img");

mode.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark");

  body.classList.contains("dark")
    ? (modeImg.src = "./images/sun.svg")
    : (modeImg.src = "./images/moon.svg");
});

//------------------- Projects ---------------------

const projectContainer = document.querySelector("#projects .container");

const ProjectsData = [
  {
    name: "Amazon Clone",
    img: "./images/amazon.jpg",
    github: "https://github.com/Ammy129/amazon-responsive-clone",
    link: "https://amazon-responsive-clone.netlify.app/",
    skill: [{ name: "React JS", img: "./images/react.svg" }],
  },
  {
    name: "Disney+ Clone",
    img: "./images/disney.jpg",
    github: "https://github.com/Ammy129/Disneyplus-clone",
    link: "https://disneyplus-responsive-clone.netlify.app/",
    skill: [
      { name: "React JS", img: "./images/react.svg" },
      { name: "Styled Components", img: "./images/styled.svg" },
    ],
  },
  {
    name: "Bakery Website",
    img: "./images/bakery.jpg",
    github: "https://github.com/Ammy129/Bakery-Site",
    link: "https://bakery-shop-online.netlify.app/",
    skill: [
      { name: "HTML", img: "./images/html.svg" },
      { name: "CSS", img: "./images/css.svg" },
      { name: "JS", img: "./images/javascript.svg" },
    ],
  },
  {
    name: "Pinterest Clone",
    img: "./images/pinterest.jpg",
    github: "https://github.com/Ammy129/pinterest-clone",
    link: "https://pinterest-responsive-clone.netlify.app/",
    skill: [
      { name: "React JS", img: "./images/react.svg" },
      { name: "Styled Components", img: "./images/styled.svg" },
    ],
  },
  {
    name: "Google Keep Clone",
    img: "./images/google-keep.jpg",
    github: "https://github.com/Ammy129/Googlekeep-clone",
    link: "https://googlekeep-responsive-clone.netlify.app/",
    skill: [{ name: "React JS", img: "./images/react.svg" }],
  },
];

const getProjects = ProjectsData.map(project => {
  const { name, img, github, link, skill } = project;

  return `
    <article class="project project-animate">
          <figure class="project-img">
            <img src=${img} alt=${img} />

            <div class="img-text-overlay">
            <h3>Made With</h3>
            <div id="project-skills">

            ${skill
              .map(skill => {
                return `
                <article>
                 <img src=${skill.img} alt=${skill.name} /> 
                   ${skill.name}
                </article>
                `;
              })
              .join("")}
           
            </div>
            <a href=${link} class="btn btn-outline" target="_blank">View Project </a>
            </div>


              </figure>



          <div class="project-desc flex">
            <h3 class="project-name">${name}</h3>
            <div class="links">
              <a href="${github}" target="_blank">
                <svg
                  id="github-icon-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.827"
                  height="21.288"
                  viewBox="0 0 21.827 21.288"
                >
                  <path
                    id="Path_368"
                    data-name="Path 368"
                    d="M10.913,0a10.915,10.915,0,0,0-3.45,21.269c.545.1.746-.237.746-.525,0-.26-.01-1.12-.015-2.032-3.036.66-3.677-1.288-3.677-1.288a2.889,2.889,0,0,0-1.212-1.6c-.99-.677.075-.664.075-.664a2.294,2.294,0,0,1,1.673,1.125,2.323,2.323,0,0,0,3.176.907,2.324,2.324,0,0,1,.693-1.459C6.5,15.461,3.95,14.525,3.95,10.344A4.223,4.223,0,0,1,5.074,7.414,3.922,3.922,0,0,1,5.18,4.526s.916-.293,3,1.119a10.353,10.353,0,0,1,5.466,0c2.083-1.412,3-1.119,3-1.119a3.917,3.917,0,0,1,.107,2.888,4.215,4.215,0,0,1,1.123,2.929c0,4.192-2.553,5.115-4.983,5.385a2.609,2.609,0,0,1,.74,2.021c0,1.46-.013,2.635-.013,2.995,0,.29.2.631.75.524A10.915,10.915,0,0,0,10.913,0"
                    fill="#e7e7e7"
                  />
                  <path
                    id="Path_369"
                    data-name="Path 369"
                    d="M44.632,179.657c-.024.054-.109.07-.187.033s-.124-.11-.1-.164.109-.071.188-.034.125.11.1.165m.537.479c-.052.048-.154.026-.223-.05a.167.167,0,0,1-.032-.227c.054-.048.152-.026.224.051s.085.178.031.227m.368.613c-.067.046-.176,0-.244-.094s-.067-.213,0-.26.175,0,.244.092.067.215,0,.263m.623.71c-.06.066-.187.048-.28-.042a.21.21,0,0,1-.062-.279c.061-.066.189-.048.283.042s.124.214.06.279m.8.24c-.026.085-.149.124-.273.088s-.2-.138-.179-.224.149-.126.273-.088.2.137.179.224m.916.1c0,.09-.1.165-.232.166s-.236-.07-.237-.159.1-.165.233-.167.236.07.236.159m.9-.034c.016.088-.075.178-.2.2s-.244-.031-.26-.118.076-.18.2-.2.245.03.261.12"
                    transform="translate(-40.545 -164.11)"
                    fill="#e7e7e7"
                  />
                </svg>
              </a>

              <a href="${link}"  target="_blank">
                <svg
                  id="foreign"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.288"
                  height="21.288"
                  viewBox="0 0 21.288 21.288"
                >
                  <g
                    id="Group_132"
                    data-name="Group 132"
                    transform="translate(7.741)"
                  >
                    <g id="Group_131" data-name="Group 131">
                      <path
                        id="Path_381"
                        data-name="Path 381"
                        d="M198.763,0h-7.741a.968.968,0,0,0,0,1.935h5.405l-9.96,9.96a.968.968,0,1,0,1.368,1.368L197.8,3.3V8.709a.968.968,0,1,0,1.935,0V.968A.968.968,0,0,0,198.763,0Z"
                        transform="translate(-186.184)"
                        fill="#e7e7e7"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_134"
                    data-name="Group 134"
                    transform="translate(0 3.871)"
                  >
                    <g id="Group_133" data-name="Group 133">
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M16.45,98.9a.968.968,0,0,0-.968.968v8.709H1.935V95.026h8.709a.968.968,0,1,0,0-1.935H.968A.968.968,0,0,0,0,94.059v15.482a.968.968,0,0,0,.968.968H16.45a.968.968,0,0,0,.968-.968V99.864A.968.968,0,0,0,16.45,98.9Z"
                        transform="translate(0 -93.091)"
                        fill="#e7e7e7"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </article>`;
}).join("");

projectContainer.innerHTML = getProjects;

// ------------------------ Skills ------------------------

const skillsContainer = document.querySelector("#skills .container");

const skillsData = [
  {
    header: "Technologies",
    skills: [
      { name: "HTML 5", img: "./images/html.svg" },
      { name: "CSS 3", img: "./images/css.svg" },
      { name: "JAVASCRIPT (ES6+)", img: "./images/javascript.svg" },
      { name: "PHP & MYSQL ", img: "./images/php.svg" },
    ],
  },
  {
    header: "Frameworks & Libraries",
    skills: [
      { name: "REACT JS", img: "./images/react.svg" },
      { name: "REDUX", img: "./images/redux.svg" },
      { name: "Styled Components", img: "./images/styled.svg" },
      { name: "J-QUERY ", img: "./images/jquery.svg" },
      { name: "BOOTSTRAP ", img: "./images/bootstrap.svg" },
      { name: "TAILWIND CSS ", img: "./images/tailwind.svg" },
      { name: "GSAP ", img: "./images/gsap.svg" },
    ],
  },
  {
    header: "Tools",
    skills: [
      { name: "ADOBE XD", img: "./images/xd.svg" },
      { name: "FIGMA", img: "./images/figma.svg" },
      { name: "ADOBE PHOTOSHOP", img: "./images/ps.svg" },
      { name: "ADOBE ILLUSTRATOR ", img: "./images/illustrator.svg" },
    ],
  },
];

const getSkills = skillsData
  .map(skill => {
    const { header, skills } = skill;

    return `
<article class="skill skill-animate">
<header class="skill-header">${header}</header>
<div class="skill-body">

${skills
  .map(skill => {
    const { name, img } = skill;

    return `
  <div class="single-skill">
    <img src=${img} alt=${name} />
    <p>${name}</p>
  </div>
  `;
  })
  .join("")}


</div>
</article>

`;
  })
  .join("");

skillsContainer.innerHTML = getSkills;

// -------------- Animation -------------------
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ ease: "power4", duration: 0.6 });

tl.to(".preloader-heading", {
  scale: 1.5,
  opacity: 1,
  duration: 0.4,
  delay: 0.2,
})
  .to(".preloader-heading", { scale: 1 })
  .to(".preloader", {
    x: "-100%",
    display: "none",
    stagger: { each: 0.25, from: "end", ease: " power2" },
  })

  .from(
    ".hero-text",
    {
      x: 300,
      opacity: 0,
      scale: 0.4,
    },
    "-=0.3"
  )
  .from(
    ".hero-image",
    {
      x: 300,
      opacity: 0,
      scale: 0.4,
    },
    "-=0.2"
  )
  .from("nav", { y: -70, opacity: 0 })

  .from(".wave", { y: 100, opacity: 0 });

gsap.from(".code", { y: -10, x: -10, yoyo: true, repeat: -1, duration: 2 });
gsap.from(".boy", { y: 20, x: 10, yoyo: true, repeat: -1, duration: 2.5 });
gsap.from(".react", { y: 20, x: -10, yoyo: true, repeat: -1, duration: 2 });

gsap.from(".project-animate", {
  opacity: 0,
  duration: 0.6,
  x: -500,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#projects",
    start: "top 50%",
  },
});

gsap.from(".skill-animate", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 50%",
  },
  y: -500,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});

gsap.from(".contact-animate", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 50%",
  },
  x: 500,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});
