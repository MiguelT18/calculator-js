import calculator from "./js/calculator.js";
import darkTheme from "./js/dark_button.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    calculator({
        pointBtn: "point-btn",
        equalsBtn: "equals-btn",
        deleteBtn: "delete-btn",
        clearBtn: "clear-btn",
        display: "display",
    });
});

// Modo Nocturno
darkTheme(".dark-theme-btn", "dark-mode");
