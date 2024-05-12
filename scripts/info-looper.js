document.addEventListener("DOMContentLoaded", function() {
    // Get all the number elements for section
    var infoNumbers = document.querySelectorAll(".info-num");
    var infoSections = document.querySelectorAll(".info-section");

    // Hide all blog sections except the first one
    infoSections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });

    // Add click event listener to each number for section
    infoNumbers.forEach(function(number, index) {
        number.addEventListener("click", function() {
            // Remove active class from all numbers for section
            infoNumbers.forEach(function(number) {
                number.classList.remove("active");
            });
    
            // Add active class to the clicked number for section
            this.classList.add("active");
    
            // Hide all sections
            infoSections.forEach(function(section) {
                section.style.display = "none";
            });
    
            // Show the corresponding section for the clicked number
            var targetIndex = parseInt(this.innerText);
            infoSections[targetIndex - 1].style.display = "flex";
        });
    });
});