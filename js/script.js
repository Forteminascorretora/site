
/* ============================
   FORTE MINAS - SCRIPT
============================ */

// Rolagem suave dos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Header muda ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#08291f";
        header.style.padding = "8px 0";

    } else {

        header.style.background = "#0f3d2e";
        header.style.padding = "18px 0";

    }

});


// Animação dos cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

    observer.observe(card);

});


// Botão voltar ao topo

const btnTop = document.createElement("button");

btnTop.innerHTML="↑";

btnTop.id="btnTop";

document.body.appendChild(btnTop);

btnTop.style.position="fixed";
btnTop.style.right="25px";
btnTop.style.bottom="25px";
btnTop.style.width="50px";
btnTop.style.height="50px";
btnTop.style.borderRadius="50%";
btnTop.style.border="none";
btnTop.style.background="#28a745";
btnTop.style.color="#fff";
btnTop.style.fontSize="22px";
btnTop.style.cursor="pointer";
btnTop.style.display="none";
btnTop.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";
btnTop.style.zIndex="9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        btnTop.style.display="block";

    }else{

        btnTop.style.display="none";

    }

});

btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

console.log("Forte Minas Corretora carregada com sucesso.");
