document.addEventListener("DOMContentLoaded", function() {
    // Get all the number elements for blog section
    var blogNumbers = document.querySelectorAll(".blog-num");
    var blogSections = document.querySelectorAll(".blog-section");

    // Hide all blog sections except the first one
    blogSections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });

    // Add click event listener to each number for blog section
    blogNumbers.forEach(function(number, index) {
        number.addEventListener("click", function() {
            // Remove active class from all numbers for blog section
            blogNumbers.forEach(function(number) {
                number.classList.remove("active");
            });

            // Add active class to the clicked number for blog section
            this.classList.add("active");

            // Hide all sections
            blogSections.forEach(function(section) {
                section.style.display = "none";
            });

            // Show the corresponding section for the clicked number
            var targetIndex = parseInt(this.innerText);
            blogSections[targetIndex - 1].style.display = "block";
        });
    });
});