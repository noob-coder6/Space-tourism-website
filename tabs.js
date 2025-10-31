document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".number-indicators button");
  const picture = document.querySelector(".grid-container--technology picture");
  const title = document.querySelector(".technology-details p.fs-700");
  const description = document.querySelector(".technology-details p:not(.fs-700)");
  const termLabel = document.querySelector(".technology-details h2");

  const data = {
    1: {
      name: "Launch vehicle",
      desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X 
      carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite 
      an awe-inspiring sight on the launch pad!`,
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    2: {
      name: "Spaceport",
      desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the famous 
      Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s 
      rotation for launch.`,
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg"
    },
    3: {
      name: "Space capsule",
      desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll 
      spend your time during the flight. It includes a space gym, cinema, and plenty of 
      other activities to keep you entertained.`,
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg"
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      const tech = data[i + 1];

      // Update image
      picture.innerHTML = `
        <source media="(min-width: 1024px)" srcset="${tech.portrait}">
        <img src="${tech.landscape}" alt="${tech.name}">
      `;

      // Update text content
      title.textContent = tech.name;
      description.textContent = tech.desc;
      termLabel.textContent = "The terminology...";
    });
  });
});
