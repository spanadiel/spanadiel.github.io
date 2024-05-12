document.addEventListener("DOMContentLoaded", function() {
    // Get all the number elements for paper section
    var paperNumbers = document.querySelectorAll(".paper-num");
    var paperSections = document.querySelectorAll(".paper-section");

    // Hide all blog sections except the first one
    paperSections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });

    // Add click event listener to each number for paper section
    paperNumbers.forEach(function(number, index) {
        number.addEventListener("click", function() {
            // Remove active class from all numbers for paper section
            paperNumbers.forEach(function(number) {
                number.classList.remove("active");
            });

            // Add active class to the clicked number for paper section
            this.classList.add("active");

            // Hide all sections
            paperSections.forEach(function(section) {
                section.style.display = "none";
            });

            // Show the corresponding section for the clicked number
            var targetIndex = parseInt(this.innerText);
            paperSections[targetIndex - 1].style.display = "block";
        });
    });
});