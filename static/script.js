// Slideshow scripts
const slides1 = document.querySelectorAll(".mySlides1");
const dots1 = document.querySelectorAll(".dot1");

function showSlides1() {
    let i;
    slides1.forEach(slide => slide.style.display = "none");
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    dots1.forEach(dot => dot.className = dot.className.replace(" active", ""));
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
    setTimeout(showSlides1, 200); // Change image every 2 seconds
}

/* Script for the expanded section */
document.getElementById('awardButton').addEventListener('click', function () {
        const awardSection = document.getElementById('awardSection');
        if (awardSection.style.display === 'none') {
            awardSection.style.display = 'block';
        } else {
            awardSection.style.display = 'none';
        }
    });

/* Script for the expanded section */
document.getElementById('awardButton1').addEventListener('click', function () {
    const awardSection = document.getElementById('awardSection1');
    if (awardSection.style.display === 'none') {
        awardSection.style.display = 'block';
    } else {
        awardSection.style.display = 'none';
    }
});
