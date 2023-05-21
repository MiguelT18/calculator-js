const d = document;

export default function calculator(options) {
    const { pointBtn, equalsBtn, deleteBtn, clearBtn, display } = options;

    // Special Buttons
    const $pointBtn = d.getElementById(pointBtn),
        $equalsBtn = d.getElementById(equalsBtn),
        $deleteBtn = d.getElementById(deleteBtn),
        $clearBtn = d.getElementById(clearBtn),
        $display = d.getElementById(display);

    // Data Atributes
    const numbersBtn = d.querySelectorAll("[data-number]"),
        operators = d.querySelectorAll("[data-operator]");

    let operand = [];
    numbersBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            // btn.textContent;
            operand.push(btn.textContent);
            console.log(operand.join(""));
        })
    );
}
