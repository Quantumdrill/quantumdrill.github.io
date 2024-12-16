let collectionResponse;
let setResponse;

await fetch("https://xmf58cl9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27collection%27%5D%7Bname%7D")
    .then(Response=>Response.json())
    .then(fetched=>{collectionResponse=fetched})
    .catch(err=>{console.error(err.message)})

await fetch("https://xmf58cl9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27set%27%5D%7Bcollection%5B%5D-%3E%7Bname%7D%2Cdate%2C%22imageURL%22%3Aimage%5B%5D.asset-%3Eurl%2C%7D")
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
    }, 800);
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
    }, 1400);
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
        opacity: "50%",
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
        const newGalleryCover = document.createElement("div");
        newGalleryCover.classList.add("GalleryCardCover");
        newGalleryCard.appendChild(newGalleryCover);
        const newGalleryCardInfo = document.createElement("h5");
        newGalleryCardInfo.classList.add("GalleryCardInfo");
        newGalleryCardInfo.classList.add("RegularFont");
        newGalleryCardInfo.textContent = "Image Info";
        newGalleryCard.appendChild(newGalleryCardInfo);
        const newGalleryImg = document.createElement("img");
        newGalleryImg.setAttribute("src",elem.imageURL[0]);
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
        const collectionNoSpace = elem.replace(/\s+/g, '');
        newMenuItem.classList.add(String(collectionNoSpace));
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
        const collectionNoSpace = elem.replace(/\s+/g, '');
        newGalleryTitle.classList.add(String(collectionNoSpace));
        newGalleryTitle.appendChild(newGalleryTitleText);
        GalleryLongPage.insertBefore(newGalleryTitle,document.getElementsByClassName("GalleryEndOfList")[0]);
    }) //Load Gallery
    setResponse.result.forEach(elem=>{
        
        elem.collection.forEach(col=>{
            listOfCollection.forEach((elem1,index)=>{
                if (elem1 === col.name){
                    const newGalleryCard = document.createElement("div");
                    newGalleryCard.classList.add("GalleryCard");
                    const newGalleryCover = document.createElement("div");
                    newGalleryCover.classList.add("GalleryCardCover");
                    newGalleryCard.appendChild(newGalleryCover);
                    const newGalleryCardInfo = document.createElement("h5");
                    newGalleryCardInfo.classList.add("GalleryCardInfo");
                    newGalleryCardInfo.classList.add("RegularFont");
                    newGalleryCardInfo.textContent = "Image Info";
                    newGalleryCard.appendChild(newGalleryCardInfo);
                    const newGalleryImg = document.createElement("img");
                    newGalleryImg.setAttribute("src",elem.imageURL[0]);
                    newGalleryImg.classList.add("GalleryImg");
                    newGalleryCard.appendChild(newGalleryImg);
                    const collectionNoSpace = listOfCollection[index+1].replace(/\s+/g, '');
                    GalleryLongPage.insertBefore(newGalleryCard,document.getElementsByClassName(collectionNoSpace)[0]);
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
};
function dataProcess () {
    setResponse.result.forEach(elem=>{     
        elem.dateSort=Number(String(elem.date).slice(0,4)+String(elem.date).slice(5,7))
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
dataProcess();
byTimeContentLoad();


