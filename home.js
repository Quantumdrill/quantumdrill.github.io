function Initialize () {
    anime({
        targets: "#Line",
        right: {
            value: ["100vw", "0vw"],
            duration: 700,
            easing: "easeInOutQuad",
        },
        width: {
            value: ["100vw", "92vw"],
            duration: 300,
            easing: "easeInOutQuad",
            delay: 700,
        },
    });

    anime({
        targets: "#Title",
        left: ["100vw", "8vw"],
        duration: 1000,
        easing: "easeInOutQuad",
        delay: 200,
    });

    anime({
        targets: "#MenuText .MenuTextEl",
        translateY: ["15vw", "0vw"],
        duration: 800,
        easing: "easeOutBack",
        delay: anime.stagger(70, {start:800}),
    });
    
    anime({
        targets: "#MenuText",
        color: "hsla(0,0%,100%,0.4)",
        duration: 1000,
        easing: "easeOutBack",
        delay: 1400,
    });
    
}
function MenuAppear () {
    anime({
        targets: "#Line",
        delay: 60,
        top: {
            value: ["14vw", "-2vw"],
            duration: 700,
            easing: "easeInOutQuad",
        },
        opacity: {
            value: ["100%", "0%"],
            duration: 300,
            easing: "easeInOutQuad",
        },
    });
    anime({
        targets: "#Title",
        delay: 120,
        top: {
            value: ["14vw", "-2vw"],
            duration: 700,
            easing: "easeInOutQuad",
        },
        opacity: {
            value: ["100%", "0%"],
            duration: 300,
            easing: "easeInOutQuad",
        },
    });
    anime({
        targets: "#MenuText .MenuTextEl",
        translateY: ["0vw", "15vw"],
        duration: 300,
        delay: anime.stagger(20),
        easing: "easeInOutQuad",
    });
    anime({
        targets: "#MenuText",
        bottom:{
            value: ["0vw", "-15vw"],
            duration: 300,
            delay: 100,
            easing: "easeInOutQuad",
        }
    });
    Menu.style.display = "flex";
    anime({
        targets: "#Menu .HomeMenuItem",
        translateX: "-84vw",
        duration: 800,
        delay: anime.stagger(150, {direction: "reverse"}, {start: 500}),
        easing: "easeOutBack",
    });
    anime({
        targets: "#BlackCover",
        opacity: ["100%", "60%"],
        duration: 300,
        delay: 200,
        easing: "easeInOutQuad",
    })
}
function MenuDisappear () {
    anime({
        targets: "#Menu .HomeMenuItem",
        translateX: "0",
        duration: 200,
        delay: anime.stagger(150),
        easing: "easeInOutQuad",
    });
    anime({
        targets: "#BlackCover",
        opacity: ["60%", "100%"],
        duration: 300,
        delay: 200,
        easing: "easeInOutQuad",
    });
}
function MenuHover (e){
    MenuItemHoveredState = 1;
    for (const MenuItem of MenuItems){
        if (MenuItem.id !== e.target.id){
            anime({
                targets: MenuItem,
                color: "hsla(0,0%,100%,0.4)",
                duration: 120,
                easing: "easeInOutQuad",
            })
            
        } else {
            BGname = document.getElementById(`${MenuItem.id}BG`);
            anime({
                targets: BGname,
                height: "40%",
                duration: 120,
                easing: "easeInOutQuad",
            })
        }
    }
}
function MenuUnhover (e){
    for (const MenuItem of MenuItems){
        if (MenuItem.id !== e.target.id){
            anime({
                targets: MenuItem,
                color: "hsla(0,0%,100%,1)",
                duration: 120,
                easing: "easeInOutQuad",
            })
        } else {
            BGname = document.getElementById(`${MenuItem.id}BG`);
            console.log(BGname);
            anime({
                targets: BGname,
                height: "0%",
                duration: 120,
                easing: "easeInOutQuad",
            })
        }
    }
}

Initialize();
const MenuItems = document.getElementsByClassName("HomeMenuItem");
setTimeout(()=>{
    MenuText.addEventListener("mouseenter", MenuAppear)
    MenuText.addEventListener("mousedown", MenuAppear)
    MenuText.addEventListener("mouseover", ()=>{
        anime({
            targets: "#MenuText",
            color: "hsla(0,0%,100%,1)",
            duration: 1000,
            easing: "easeOutBack",
        });
    })
    MenuText.addEventListener("mouseout", ()=>{
        anime({
            targets: "#MenuText",
            color: "hsla(0,0%,100%,0.4)",
            duration: 1000,
            easing: "easeOutBack",
        });
    })
    for (const MenuItem of MenuItems){MenuItem.addEventListener("mouseenter", MenuHover)}
    for (const MenuItem of MenuItems){MenuItem.addEventListener("mouseleave", MenuUnhover)}
    for (const MenuItem of MenuItems){MenuItem.addEventListener("click", MenuDisappear)}
}, 1500);
