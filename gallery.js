let collectionResponse;
let setResponse;

await fetch("https://xmf58cl9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27collection%27%5D%7Bname%7D")
    .then(Response=>Response.json())
    .then(fetched=>{collectionResponse=fetched})
    .catch(err=>{console.error(err.message)})

await fetch("https://xmf58cl9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27set%27%5D%7Bname%2Ccollection%5B%5D-%3E%7Bname%7D%2Cdate%2C%22imageURL%22%3Aimage%5B%5D.asset-%3Eurl%2C%7D")
    .then(Response=>Response.json())
    .then(fetched=>{setResponse=fetched})
    .catch(err=>{console.error(err.message)})
// GROQ query in sanity: *[_type == 'set']{collection[]->{name},date,"imageURL":image[].asset->url,}

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
let OrderStateIfCollection = false;
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
function OrderChange (){
    anime({
        targets: "#OrderIndication",
        right: ["-4.7em","-6em"],
        duration: 600,
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
    anime({
        targets: "#MainGalleryWindow",
        paddingTop: "110vh",
        duration: 700,
        easing: "easeInOutCubic",
        delay: 100,
        direction: "alternate",
    });
    anime({
        targets: MainGalleryWindow,
        scrollTop: 0,
        duration: 700,
        easing: "easeInOutCubic",
        delay: 100,
        direction: "alternate",
    });
    anime({
        targets: "#ScrollMenuLongPage",
        paddingTop: "70vh",
        duration: 700,
        easing: "easeInOutCubic",
        delay: 100,
        direction: "alternate",
    });
    setTimeout(()=>{
        while (GalleryLongPage.firstChild) {
            GalleryLongPage.removeChild(GalleryLongPage.firstChild);
        }
        while (ScrollMenuLongPage.firstChild) {
            ScrollMenuLongPage.removeChild(ScrollMenuLongPage.firstChild);
        }
        const GalleryEndOfListItem = document.createElement("div");
        GalleryEndOfListItem.classList.add("GalleryEndOfList");
        GalleryLongPage.appendChild(GalleryEndOfListItem);
    }, 800); //clear all html elements
    if (OrderStateIfCollection === true){
        setTimeout(()=>{OrderIndication.textContent = "BY TIME ORDER"},600);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "SWITCH TO COLLECTION ORDER"},200);
        setTimeout(()=>{byTimeContentLoad()}, 800);
        OrderStateIfCollection = false;
    } else {
        setTimeout(()=>{OrderIndication.textContent = "BY COLLECTION"},600);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "SWITCH TO TIME ORDER"},200);
        setTimeout(()=>{byCollectionContentLoad()}, 800);
        OrderStateIfCollection = true;
    };
    setTimeout(()=>{
        for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseenter", MenuCardHover)}
        for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseleave", MenuCardUnhover)}
        for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseenter", GalleryCardHover)}
        for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseleave", GalleryCardUnhover)}
        for (const MenuCard of MenuCards){MenuCard.addEventListener("click", MenuCardJump)}
        for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("click", ViewPhoto)}
    }, 1400); //refresh eventlisteners
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
        targets: e.target.firstChild,
        opacity: "50%",
        duration: 120,
        easing: "easeInOutQuad",
    })
    anime({
        targets: e.target.firstChild.nextSibling,
        opacity: "100%",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function GalleryCardUnhover (e){
    anime({
        targets: e.target.firstChild,
        opacity: "0%",
        duration: 120,
        easing: "easeInOutQuad",
    })
    anime({
        targets: e.target.firstChild.nextSibling,
        opacity: "0%",
        duration: 120,
        easing: "easeInOutQuad",
    })
}
function ViewPhoto (e){
    let ratio = e.target.lastChild.naturalWidth/e.target.lastChild.naturalHeight;
    let zoomWidth;
    let zoomHeight;
    if (ratio > window.innerWidth/window.innerHeight){
        zoomWidth=window.innerWidth*0.95;
        zoomHeight=zoomWidth/ratio;
    } else {
        zoomHeight=window.innerHeight*0.95;
        zoomWidth=zoomHeight*ratio;
    }
    ImageDisplayImage.setAttribute("src",e.target.lastChild.getAttribute("src").slice(0,-6));
    ImageDisplay.style.display = "block";
    TransparentCover2.style.display = "block"
    ImageDisplayCross.addEventListener("click",UnviewPhoto);
    setResponse.result.forEach(elem=>{
        if (elem.nameClass === e.target.classList[1]){
            elem.imageURL.forEach(img=>{
                const newImageDisplayMenuItem = document.createElement("div");
                newImageDisplayMenuItem.classList.add("ImageDisplayMenuItems");
                const newImageDisplayMenuItemImage = document.createElement("img");
                newImageDisplayMenuItemImage.setAttribute("src",img+"?h=200");
                newImageDisplayMenuItemImage.classList.add("ImageDisplayMenuItemsImage");
                newImageDisplayMenuItem.appendChild(newImageDisplayMenuItemImage);
                ImageDisplayMenu.appendChild(newImageDisplayMenuItem);
            })
        }
    })
    anime({
        targets: "#ImageDisplayImage",
        opacity: 1,
        duration: 300,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#TransparentCover2",
        opacity: 0.8,
        duration: 300,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#ImageDisplayMenu .ImageDisplayMenuItems",
        translateY: "-15vh",
        duration: 300,
        delay: anime.stagger(30),
        easing: "easeInOutCubic",
    })
    anime({
        targets: "#ImageDisplayCross",
        opacity: 1,
        duration: 300,
        easing: "easeInOutQuad",
    })
    setTimeout(()=>{
        const Items = document.getElementsByClassName("ImageDisplayMenuItems");
        console.log(Items)
        for (const Item of Items){Item.addEventListener("click", e=>{
            ImageDisplayImage.setAttribute("src", e.target.firstChild.getAttribute("src").slice(0,-6));
        })};
    },300);
}
function UnviewPhoto (){
    anime({
        targets: "#ImageDisplayImage",
        opacity: 0,
        duration: 300,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#TransparentCover2",
        opacity: 0,
        duration: 300,
        easing: "easeInOutQuad",
    })
    anime({
        targets: "#ImageDisplayMenu .ImageDisplayMenuItems",
        translateY: "15vh",
        duration: 300,
        delay: anime.stagger(20),
        easing: "easeInOutCubic",
    })
    anime({
        targets: "#ImageDisplayCross",
        opacity: 0,
        duration: 300,
        easing: "easeInOutQuad",
    })
    setTimeout(()=>{
        ImageDisplay.style.display = "none";
        TransparentCover2.style.display = "none"
        while (ImageDisplayMenu.firstChild) {
            ImageDisplayMenu.removeChild(ImageDisplayMenu.firstChild);
        }
    },400);
}
function MenuCardJump (e){
    let JumpTarget;
    if (OrderStateIfCollection === false){
        JumpTarget = document.getElementsByClassName(e.target.className.slice(15,21))[0];
    } else {
        JumpTarget = document.getElementsByClassName(e.target.className.slice(15,e.target.className.length))[0];
    };
    anime({
        targets: MainGalleryWindow,
        scrollTop: JumpTarget.offsetTop-100,
        duration: 240,
        easing: "easeInOutQuad",
    })
}

const MenuCards = document.getElementsByClassName("ScrollMenuCard");
const GalleryCards = document.getElementsByClassName("GalleryCard");
setTimeout(()=>{
    for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseenter", MenuCardHover)}
    for (const MenuCard of MenuCards){MenuCard.addEventListener("mouseleave", MenuCardUnhover)}
    for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseenter", GalleryCardHover)}
    for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("mouseleave", GalleryCardUnhover)}
    for (const GalleryCard of GalleryCards){GalleryCard.addEventListener("click", ViewPhoto)}
    for (const MenuCard of MenuCards){MenuCard.addEventListener("click", MenuCardJump)}
}, 500);
ChangeOrderBtn.addEventListener("mouseenter",OrderBtnHover);
ChangeOrderBtn.addEventListener("mouseleave",OrderBtnUnhover);
ChangeOrderBtn.addEventListener("click",OrderChange);

let listOfDate = [];
let listOfCollection = [];
let sortedByDate;

function byTimeContentLoad () {
    listOfDate.forEach(elem=>{
        const newMenuItem = document.createElement("div");
        const newMenuItemText = document.createElement("h4");
        newMenuItemText.classList.add("MenuCardText");
        newMenuItemText.classList.add("RegularFont");
        newMenuItemText.textContent = dateNumberToText(elem);
        newMenuItem.classList.add("ScrollMenuCard");
        newMenuItem.classList.add(elem);
        newMenuItem.appendChild(newMenuItemText);
        ScrollMenuLongPage.appendChild(newMenuItem);
    }) //Load Scroll Menu
    listOfDate.forEach(elem=>{
        const newGalleryTitle = document.createElement("div");
        const newGalleryTitleText = document.createElement("h4");
        newGalleryTitleText.classList.add("GalleryTitleText");
        newGalleryTitleText.classList.add("RegularFont");
        newGalleryTitleText.textContent = dateNumberToText(elem);
        newGalleryTitle.classList.add("GalleryTitle");
        newGalleryTitle.classList.add(elem);
        newGalleryTitle.appendChild(newGalleryTitleText);
        GalleryLongPage.insertBefore(newGalleryTitle,document.getElementsByClassName("GalleryEndOfList")[0]);
    }) //Load Gallery
    sortedByDate.forEach(elem=>{
        const newGalleryCard = document.createElement("div");
        newGalleryCard.classList.add("GalleryCard");
        newGalleryCard.classList.add(elem.nameClass);
        const newGalleryCover = document.createElement("div");
        newGalleryCover.classList.add("GalleryCardCover");
        newGalleryCard.appendChild(newGalleryCover);
        const newGalleryCardInfo = document.createElement("h5");
        newGalleryCardInfo.classList.add("GalleryCardInfo");
        newGalleryCardInfo.classList.add("RegularFont");
        newGalleryCardInfo.textContent = elem.name;
        newGalleryCard.appendChild(newGalleryCardInfo);
        const newGalleryImg = document.createElement("img");
        newGalleryImg.setAttribute("src",elem.imageURL[0]+"?h=800");
        newGalleryImg.classList.add("GalleryImg");
        newGalleryCard.appendChild(newGalleryImg);
        listOfDate.forEach((date,index)=>{
            if (elem.dateSort === date){
                GalleryLongPage.insertBefore(newGalleryCard,document.getElementsByClassName(listOfDate[index+1])[0]);
            }
        })
    })
};
function byCollectionContentLoad () {
    listOfCollection.forEach(elem=>{
        const newMenuItem = document.createElement("div");
        const newMenuItemText = document.createElement("h4");
        newMenuItemText.classList.add("MenuCardText");
        newMenuItemText.classList.add("RegularFont");
        newMenuItemText.textContent = elem;
        newMenuItem.classList.add("ScrollMenuCard");
        newMenuItem.classList.add(String(removeSpace(elem)));
        newMenuItem.appendChild(newMenuItemText);
        ScrollMenuLongPage.appendChild(newMenuItem);
    }) //Load Scroll Menu
    listOfCollection.forEach(elem=>{
        const newGalleryTitle = document.createElement("div");
        const newGalleryTitleText = document.createElement("h4");
        newGalleryTitleText.classList.add("GalleryTitleText");
        newGalleryTitleText.classList.add("RegularFont");
        newGalleryTitleText.textContent = elem;
        newGalleryTitle.classList.add("GalleryTitle");
        newGalleryTitle.classList.add(String(removeSpace(elem)));
        newGalleryTitle.appendChild(newGalleryTitleText);
        GalleryLongPage.insertBefore(newGalleryTitle,document.getElementsByClassName("GalleryEndOfList")[0]);
    }) //Load Gallery
    setResponse.result.forEach(elem=>{
        
        elem.collection.forEach(col=>{
            listOfCollection.forEach((elem1,index)=>{
                if (elem1 === col.name){
                    const newGalleryCard = document.createElement("div");
                    newGalleryCard.classList.add("GalleryCard");
                    newGalleryCard.classList.add(elem.nameClass);
                    const newGalleryCover = document.createElement("div");
                    newGalleryCover.classList.add("GalleryCardCover");
                    newGalleryCard.appendChild(newGalleryCover);
                    const newGalleryCardInfo = document.createElement("h5");
                    newGalleryCardInfo.classList.add("GalleryCardInfo");
                    newGalleryCardInfo.classList.add("RegularFont");
                    newGalleryCardInfo.textContent = elem.name;
                    newGalleryCard.appendChild(newGalleryCardInfo);
                    const newGalleryImg = document.createElement("img");
                    newGalleryImg.setAttribute("src",elem.imageURL[0]+"?h=800");
                    newGalleryImg.classList.add("GalleryImg");
                    newGalleryCard.appendChild(newGalleryImg);
                    GalleryLongPage.insertBefore(newGalleryCard,document.getElementsByClassName(removeSpace(listOfCollection[index+1]))[0]);
                }
            })   
        })
    })
};
function dateNumberToText (input) {
    let month;
    switch (String(input).slice(4,6)) {
        case "01":
            month = "JAN";
            break;
        case "02":
            month = "FEB";
            break;
        case "03":
            month = "MAR";
            break;
        case "04":
            month = "APR";
            break;
        case "05":
            month = "MAY";
            break;
        case "06":
            month = "JUN";
            break;
        case "07":
            month = "JUL";
            break;
        case "08":
            month = "AUG";
            break;
        case "09":
            month = "SEP";
            break;
        case "10":
            month = "OCT";
            break;
        case "11":
            month = "NOV";
            break;
        case "12":
            month = "DEC";
            break;
    }
    return String(input).slice(0,4) + " " + month;
}; // turn "03" into "MAR"
function dataProcess () {
    setResponse.result.forEach(elem=>{     
        elem.dateSort=Number(String(elem.date).slice(0,4)+String(elem.date).slice(5,7));
        elem.nameClass=removeSpace(elem.name);
    });
    setResponse.result.sort((a,b)=>b.dateSort-a.dateSort);
    setResponse.result.forEach(elem=>{
        if (elem.dateSort !== listOfDate[listOfDate.length-1]){
            listOfDate.push(elem.dateSort);
        }
    })
    sortedByDate = setResponse.result;
    listOfDate.push("GalleryEndOfList");
    collectionResponse.result.forEach(elem=>{
        listOfCollection.push(elem.name);
    })
    listOfCollection.push("GalleryEndOfList");
}
function removeSpace (input){
    return input.replace(/\s+/g, '');
}
dataProcess();
byTimeContentLoad(); // run on initial load


