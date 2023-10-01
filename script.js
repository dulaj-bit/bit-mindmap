// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const nodes = document.querySelectorAll(".node");
    nodes.forEach(node => {
        node.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent click event from propagating to parent nodes
            toggleNode(node);
        });
    });

    function toggleNode(node) {
        const children = node.querySelector(".children");
        if (children) {
            const isExpanded = children.style.display === "block" || children.style.display === "";
            if (!isExpanded) {
                // Expand child nodes
                children.style.display = "block";
            } else {
                // Collapse child nodes
                children.style.display = "none";
            }
        }
    }
});



