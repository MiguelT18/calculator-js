const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark, icon) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌚",
        sun = "🌞";

    const setLightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    };

    const setDarkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    };

    // Elementos individuales
    const $githubIcon = d.getElementById(icon);
    const isDarkMode = ls.getItem("theme") === "dark"; // Obtener el valor una vez

    if (isDarkMode) {
        setDarkMode();
        $githubIcon.src = "../assets/github-logo-dark.png";
    } else {
        setLightMode();
        $githubIcon.src = "../assets/github-logo.png";
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                setDarkMode();
                $githubIcon.src = "../assets/github-logo-dark.png";
            } else {
                setLightMode();
                $githubIcon.src = "../assets/github-logo.png";
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");

        if (isDarkMode) {
            setDarkMode();
        } else {
            setLightMode();
        }
    });
}
