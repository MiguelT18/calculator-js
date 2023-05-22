import calculator from "./js/calculator.js";
import darkTheme from "./js/dark_button.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    calculator({
        pointButton: "point-btn",
        equalsButton: "equals-btn",
        deleteButton: "delete-btn",
        clearButton: "clear-btn",
        display: "display",
    });
});

// Modo Nocturno
darkTheme(".dark-theme-btn", "dark-mode");
