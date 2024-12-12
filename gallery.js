function InitializeGallery(){
    anime({
        targets: "#GalleryText",
        top: ["-14vw","-2vw"],
        duration: 500,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#GalleryText",
        top: ["-14vw","-2vw"],
        duration: 500,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#OrderIndication",
        right: ["-6em","-4.7em"],
        duration: 500,
        easing: "easeInOutCubic",
        delay: 200,
    });
    anime({
        targets: "#ChangeOrderBtn",
        top: ["-15vh","5vh"],
        duration: 500,
        easing: "easeInOutCubic",
        delay: 220,
    });
    anime({
        targets: "#MainGalleryWindow",
        top: ["100vh","0vh"],
        duration: 700,
        easing: "easeInOutCubic",
        delay: 100,
    });
    anime({
        targets: "#ScrollMenuWindow",
        bottom: ["-80vh","5vh"],
        duration: 700,
        easing: "easeInOutCubic",
        delay: 100,
    });
}
InitializeGallery()

function OrderBtnHover (){
    anime({
        targets: "#ChangeOrderBtnBG",
        height: "100%",
        duration: 140,
        easing: "easeInOutCubic",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        color: "rgb(1, 13, 10)",
        duration: 40,
        easing: "easeInOutCubic",
        delay: 50,
    })
}

function OrderBtnUnhover (){
    anime({
        targets: "#ChangeOrderBtnBG",
        height: "0%",
        duration: 140,
        easing: "easeInOutCubic",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        color: "#fff",
        duration: 40,
        easing: "easeInOutCubic",
        delay: 50,
    })
}

let OrderStateIfCollection = true;

function OrderChange (){
    anime({
        targets: "#OrderIndication",
        right: ["-4.7em","-6em"],
        duration: 250,
        easing: "easeInOutCubic",
        direction: "alternate",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        opacity: ["100%","0%"],
        duration: 200,
        easing: "easeInOutQuad",
        direction: "alternate",
    });
    if (OrderStateIfCollection === true){
        setTimeout(()=>{OrderIndication.textContent = "BY TIME ORDER"},200);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "SWITCH TO COLLECTION ORDER"},200);
        
        OrderStateIfCollection = false;
    } else {
        setTimeout(()=>{OrderIndication.textContent = "BY COLLECTION"},200);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "SWITCH TO TIME ORDER"},200);
        OrderStateIfCollection = true;
    };
    
}

function MenuCardHover (e){
    anime({
        targets: e.target,
        minHeight: "8vw",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function MenuCardUnhover (e){
    anime({
        targets: e.target,
        minHeight: "5vw",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function GalleryCardHover (e){
    anime({
        targets: e.target,
        opacity: "20%",
        duration: 120,
        easing: "easeInOutQuad",
    })
    anime({
        targets: e.target.nextSibling,
        opacity: "100%",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function GalleryCardUnhover (e){
    anime({
        targets: e.target,
        opacity: "0%",
        duration: 120,
        easing: "easeInOutQuad",
    })
    anime({
        targets: e.target.nextSibling,
        opacity: "0%",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function MenuCardJump (e){
    let JumpTarget = document.getElementById(e.target.id+"Gallery");
    console.log(e.target.id);
    anime({
        targets: MainGalleryWindow,
        scrollTop: JumpTarget.offsetTop-100,
        duration: 240,
        easing: "easeInOutQuad",
    })
}

const MenuCards = document.getElementsByClassName("ScrollMenuCard");
const GalleryCards = document.getElementsByClassName("GalleryCardCover");
setTimeout(()=>{
    for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseenter", MenuCardHover)}
    for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseleave", MenuCardUnhover)}
    for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseenter", GalleryCardHover)}
    for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseleave", GalleryCardUnhover)}
    for (const MenuCard of MenuCards){MenuCard.addEventListener("click", MenuCardJump)}
}, 500);
ChangeOrderBtn.addEventListener("mouseenter",OrderBtnHover);
ChangeOrderBtn.addEventListener("mouseleave",OrderBtnUnhover);

ChangeOrderBtn.addEventListener("click",OrderChange);

