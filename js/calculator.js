const d = document;

export default function calculator({
    pointButton,
    equalsButton,
    deleteButton,
    clearButton,
    display,
}) {
    // Special Buttons
    const $pointBtn = d.getElementById(pointButton),
        $equalsBtn = d.getElementById(equalsButton),
        $deleteBtn = d.getElementById(deleteButton),
        $clearBtn = d.getElementById(clearButton),
        $display = d.getElementById(display);

    // Data Atributes
    const $numberButtons = d.querySelectorAll("[data-number]");
    const $operatorButtons = d.querySelectorAll("[data-operator]");

    // Escribir un 0 si no existe ningún valor en $display
    $display.textContent == "" ? ($display.textContent = "0") : null;

    //? EVENTOS

    // Escribir con los botones
    $numberButtons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            if ($display.textContent == "0") {
                $display.textContent = "";
            }
            $display.textContent += btn.textContent;
        })
    );
    // Escribir con el teclado
    function isSpecialKey(key) {
        return (
            key === "Tab" ||
            key === "Shift" ||
            key === "Control" ||
            key === "Alt" ||
            false
        );
    }

    d.addEventListener("keydown", (e) => {
        if ($display.textContent == "0") {
            $display.textContent = e.key;
        } else {
            if (!isNaN(e.key) && e.key.length === 1 && !isSpecialKey(e.key)) {
                $display.textContent += e.key;
            }
        }
    });

    // Funciones aritméticas
    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
}
