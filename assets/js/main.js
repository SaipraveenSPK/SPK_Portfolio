document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
      offset: 120,
      delay: 0,
      duration: 1600,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
  });

//   window.addEventListener("scroll", function () {
//     console.log(window.scrollY); // Logs the vertical scroll position in pixels
// });


window.onload = function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to top
};

        // ----------(or)-----------
// window.location.href = "#home"; // Redirect to homepage section (refreshes)


// Print the name in a sequence manner
let elements = document.getElementsByClassName("seq");
let text = elements[0].innerText.trim();
let concat = "";
elements[0].innerText = "|"; // Show cursor initially

// Blinking cursor effect
let cursorVisible = true;
setInterval(function () {
    elements[0].innerText = cursorVisible ? concat + "|" : concat;
    cursorVisible = !cursorVisible;
}, 500); // Blink every 0.5 seconds

setTimeout(function () {
    for (let j = 0; j < text.length; j++) {
        setTimeout(function () {
            concat += text[j];
            elements[0].innerText = concat + "|";
        }, j * 170);
    }
}, 1000);


  // View All Button for Projects
  const viewAllButton = document.getElementById("viewAllButton");
  const extraProjects = document.getElementById("extraProjects");
  const showLessButton = document.getElementById("ShowLessButton");

  if (viewAllButton && extraProjects && showLessButton) {
      viewAllButton.addEventListener("click", function () {
          extraProjects.style.display = "block"; 
          viewAllButton.style.visibility = "hidden"; 
          showLessButton.style.visibility = "visible"; 
          
          setTimeout(() => {
              AOS.refreshHard(); // Ensure new elements animate correctly
          }, 120);
      });

      showLessButton.addEventListener("click", function () {
          extraProjects.style.display = "none"; 
          showLessButton.style.visibility = "hidden"; 
          viewAllButton.style.visibility = "visible"; 

          setTimeout(() => {
              AOS.refreshHard();
          }, 120);
      });
  }


    function handleSkillAnimation() {
        let skillsSection = document.getElementById("skills");
        let skillBars = document.querySelectorAll(".skill-per");

        if (!skillsSection || skillBars.length === 0) return;

        let sectionPosition = skillsSection.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.75) {
            // Add animation class only when visible
            skillBars.forEach(skill => {
                skill.style.animation = "skillbar 4s ease-in-out forwards";
            });
        } else {
            // Reset animation when scrolling up (optional)
            skillBars.forEach(skill => {
                skill.style.animation = "none";
            });
        }
    }

    // Run on scroll
    window.addEventListener("scroll", handleSkillAnimation);
});