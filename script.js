// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const level_2s = document.querySelectorAll(".level-2");
    const level_3s = document.querySelectorAll(".level-3");

    // Hide all elements with class "level-2"
    level_2s.forEach(level_2 => {
        level_2.style.display = "none";
    });

    // Hide all elements with class "level-3"
    level_3s.forEach(level_3 => {
        level_3.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Hide elements
    const level_2s_hide = document.querySelectorAll(".level-2");
    const level_3s_hide = document.querySelectorAll(".level-3");

    // Hide all elements with class "level-2"
    level_2s_hide.forEach(level_2_hide => {
        level_2_hide.style.display = "none";
    });

    // Hide all elements with class "level-3"
    level_3s_hide.forEach(level_3_hide => {
        level_3_hide.style.display = "none";
    });

    const level_1s = document.querySelectorAll(".clickable-level-1");
    level_1s.forEach(level_1 => {
        level_1.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent click event from propagating to parent nodes
            toggleElements_1(level_1, level_1.closest(".level-1"));
        });
    });

    const level_2s = document.querySelectorAll(".clickable-level-2");
    level_2s.forEach(level_2 => {
        level_2.addEventListener("click", function (event) {
            event.stopPropagation(); 
            toggleElements_2(level_2, level_2.closest(".level-2"));
        });
    });

    // Toggle elements under level 1
    function toggleElements_1(topic, level_1) {
        const level_2s = level_1.querySelectorAll("div.level-2");
        level_2s.forEach(level_2=>{
            if (level_2) {
                const isExpanded = level_2.style.display === "block" || level_2.style.display === "";
                if (!isExpanded) {
                    // Expand child nodes
                    level_2.style.display = "block";
                    topic.style.backgroundColor = "#145581";
                } else {
                    // Collapse child nodes
                    level_2.style.display = "none";
                    topic.style.backgroundColor = "#3498db";
                }
            }
        })
    }
    
    // Toggle elements under level 2
    function toggleElements_2(topic, level_2) {
        const level_3s = level_2.querySelectorAll("div.level-3");
        level_3s.forEach(level_3=>{
            if (level_3) {
                const isExpanded = level_3.style.display === "block" || level_3.style.display === "";
                if (!isExpanded) {
                    // Expand child nodes
                    level_3.style.display = "block";
                    topic.style.backgroundColor = "#027532";
                } else {
                    // Collapse child nodes
                    level_3.style.display = "none";
                    topic.style.backgroundColor = "#2ecc71";
                }
            }
        })
    }
});



