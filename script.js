const tabs = document.querySelectorAll(".tab");
const iconos = document.querySelectorAll(".iconos")

tabs.forEach((tabsTech, index) => {
    tabsTech.addEventListener("click", () => {
        tabs.forEach((tabsTech) => tabsTech.classList.remove("active"));
        tabsTech.classList.add("active");

        iconos.forEach((iconosTech) => iconosTech.classList.remove("active"));
        iconos[index].classList.add("active");
    })
})


const tabs2 = document.querySelectorAll(".tab2");
const proyectos = document.querySelectorAll(".proyectos-div")

tabs2.forEach((tabs2Tech, index) => {
    tabs2Tech.addEventListener("click", () => {
        tabs2.forEach((tabs2Tech) => tabs2Tech.classList.remove("active"));
        tabs2Tech.classList.add("active");

        proyectos.forEach((proyectosTech) => proyectosTech.classList.remove("active"));
        proyectos[index].classList.add("active");
    })
})