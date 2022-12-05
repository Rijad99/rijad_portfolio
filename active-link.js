const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
  
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        let sectionName = sectionId;
        let sectionFirstLetter = sectionId.substring(0, 1).toUpperCase();
        sectionName = sectionFirstLetter + sectionName.substring(1, sectionName.length);
        
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");

            document.title = `Rijad Smajlovic | ${sectionName}`;
        } else {
            document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}
