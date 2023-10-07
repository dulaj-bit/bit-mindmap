// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Hide elements
    const level_2s_hide = document.querySelectorAll(".level-2");
    const level_3s_hide = document.querySelectorAll(".level-3");
    const level_4s_hide = document.querySelectorAll(".level-4");
    const level_5s_hide = document.querySelectorAll(".level-5");
    const level_6s_hide = document.querySelectorAll(".level-6");
    const level_7s_hide = document.querySelectorAll(".level-7");

    // Hide all elements with class "level-2" to "level-7"
    [level_2s_hide, level_3s_hide, level_4s_hide, level_5s_hide, level_6s_hide, level_7s_hide].forEach(level_hide => {
        level_hide.forEach(level => {
            level.style.display = "none";
        });
    });

    // Add click event listeners for level 1 to 7
    const level_1s = document.querySelectorAll(".clickable-level-1");
    level_1s.forEach(level_1 => {
        level_1.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_1, level_1.closest(".level-1"));
        });
    });

    const level_2s = document.querySelectorAll(".clickable-level-2");
    level_2s.forEach(level_2 => {
        level_2.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_2, level_2.closest(".level-2"));
        });
    });

    const level_3s = document.querySelectorAll(".clickable-level-3");
    level_3s.forEach(level_3 => {
        level_3.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_3, level_3.closest(".level-3"));
        });
    });

    const level_4s = document.querySelectorAll(".clickable-level-4");
    level_4s.forEach(level_4 => {
        level_4.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_4, level_4.closest(".level-4"));
        });
    });

    const level_5s = document.querySelectorAll(".clickable-level-5");
    level_5s.forEach(level_5 => {
        level_5.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_5, level_5.closest(".level-5"));
        });
    });

    const level_6s = document.querySelectorAll(".clickable-level-6");
    level_6s.forEach(level_6 => {
        level_6.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_6, level_6.closest(".level-6"));
        });
    });

    const level_7s = document.querySelectorAll(".clickable-level-7");
    level_7s.forEach(level_7 => {
        level_7.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleElements(level_7, level_7.closest(".level-7"));
        });
    });

    // Toggle elements for all levels
    function toggleElements(topic, level) {
        const currentLevel = parseInt(level.className.match(/\d+/)[0]);
        const nextLevel = currentLevel + 1;
        const children = level.querySelectorAll(`div.level-${nextLevel}`);
        children.forEach(child => {
            if (child) {
                const isExpanded = child.style.display === "block" || child.style.display === "";
                if (!isExpanded) {
                    child.style.display = "block";
                    updateBackgroundColor(topic, true);
                } else {
                    child.style.display = "none";
                    updateBackgroundColor(topic, false);
                }
            }
        });
    }

    // Update background color based on expanded or collapsed state
    function updateBackgroundColor(topic, expanded) {
        if (expanded) {
            switch (topic.className) {
                case "clickable-level-1":
                    topic.style.backgroundColor = "#145581";
                    break;
                case "clickable-level-2":
                    topic.style.backgroundColor = "#027532";
                    break;
                case "clickable-level-3":
                    topic.style.backgroundColor = "#d56503";
                    break;
                case "clickable-level-4":
                    topic.style.backgroundColor = "#7c3b91";
                    break;
                case "clickable-level-5":
                    topic.style.backgroundColor = "#c7a50b";
                    break;
                case "clickable-level-6":
                    topic.style.backgroundColor = "#c6372d";
                    break;
                case "clickable-level-7":
                    topic.style.backgroundColor = "#159f83";
                    break;
            }
        } else {
            switch (topic.className) {
                case "clickable-level-1":
                    topic.style.backgroundColor = "#3498db";
                    break;
                case "clickable-level-2":
                    topic.style.backgroundColor = "#2ecc71";
                    break;
                case "clickable-level-3":
                    topic.style.backgroundColor = "#e28533";
                    break;
                case "clickable-level-4":
                    topic.style.backgroundColor = "#9b59b6";
                    break;
                case "clickable-level-5":
                    topic.style.backgroundColor = "#f1c40f";
                    break;
                case "clickable-level-6":
                    topic.style.backgroundColor = "#ff5c49";
                    break;
                case "clickable-level-7":
                    topic.style.backgroundColor = "#1abc9c";
                    break;
            }
        }
    }
});




