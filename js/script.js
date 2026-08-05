/* ============================
   FORTE MINAS - SCRIPT
============================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       ROLAGEM SUAVE
    ============================ */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* ============================
       CABEÇALHO AO ROLAR
    ============================ */

    const header = document.querySelector("#header");

    const updateHeader = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    /* ============================
       MENU MOBILE
    ============================ */

    const menuToggle = document.querySelector("#menu-toggle");
    const nav = document.querySelector("#nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });

        });

    }


    /* ============================
       ANIMAÇÕES AO ROLAR
    ============================ */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("active");
        });

    }


    /* ============================
       CONTADORES
    ============================ */

    const counters = document.querySelectorAll("[data-number]");

    if ("IntersectionObserver" in window && counters.length) {

        const counterObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const element = entry.target;
                    const target = Number(element.dataset.number);

                    if (!Number.isFinite(target)) {
                        return;
                    }

                    let current = 0;
                    const duration = 1400;
                    const frameRate = 60;
                    const totalFrames = Math.round(duration / (1000 / frameRate));
                    const increment = target / totalFrames;

                    const animateCounter = () => {

                        current += increment;

                        if (current >= target) {
                            element.textContent = target;
                            return;
                        }

                        element.textContent = Math.floor(current);
                        requestAnimationFrame(animateCounter);
                    };

                    animateCounter();
                    counterObserver.unobserve(element);

                });

            },
            {
                threshold: 0.4
            }
        );

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });

    }


    console.log("Forte Minas Corretora carregada com sucesso.");

});
