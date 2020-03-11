/////// ACTION LISTENERS //////////////////////////////////////////////

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

Array.from(document.getElementsByClassName("grid-item")).forEach((student) => {
  student.onclick = animate;
});

document.getElementById("back-arrow").onclick = animate;

/////// FUNCTIONS /////////////////////////////////////////////////////

function animate(e) {
  const id = Number(e.target.parentNode.id) - 1;
  const container = document.getElementsByClassName("container")[0];
  const student = id > -1 ? studentData[id] : null;

  if (student) {
    document.getElementById("headshot").src = student.headshot;
    document.getElementById("greeting").textContent = `I'm ${student.name}`;
    document.getElementById("para1").textContent = student.bio.firstParagraph;
    document.getElementById("para2").textContent = student.bio.secondParagraph;
    // add projects

    setTimeout(() => {
      document.getElementById("back-arrow").style.display = "block";
    }, 750);
  } else {
    setTimeout(() => {
      document.getElementById("back-arrow").style.display = "none";
    }, 750);
  }

  if (container.classList.contains("flipped")) {
    container.classList.remove("flipped");
  } else {
    container.classList.add("flipped");
  }

  window.scrollTo(0, 0);
}

/////// DATA //////////////////////////////////////////////////////////

const studentData = [
  {
    name: "StudentName",
    headshot: "images/bio/headshot1.png",
    bio: {
      firstParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      secondParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    projects: [
      {
        image: "",
        url: ""
      },
      {
        image: "",
        url: ""
      },
      {
        image: "",
        url: ""
      },
      {
        image: "",
        url: ""
      },
      {
        image: "",
        url: ""
      },
      {
        image: "",
        url: ""
      }
    ]
  }
];
