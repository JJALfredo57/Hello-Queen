(function(){
    emailjs.init("XQF0LFiTG6SZQ8WHB"); 
})();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("qandc");
const fromjose = document.getElementById("fromjose");
fromjose.innerText = "❤️ > From jose Alfredo";
const gift = document.getElementById("sourcelinkgift");
const Cmessage = document.getElementById("Container_message");
const message = document.getElementById("message");
const container = document.getElementById("containerbody");

let num = 0;

noBtn.addEventListener("mouseover", () => {
    const containerRect = container.getBoundingClientRect();
    const x = Math.floor(Math.random() * (containerRect.width + 600 ));
    const y = Math.floor(Math.random() * (containerRect.height - 600));
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    num++;
    pindotannum();
}); 

setTimeout(() => {
    appairmessage();
}, 1000);

function appairmessage() {
    setTimeout(() => {
        message.style.display = "flex";
    }, 1000);
    setTimeout(() => {
        Cmessage.style.transform = 'scale(0)';
    },3000)
}

function buttonOk() {
    setTimeout(() => {
        Cmessage.style.transform = "scale(0)";
    }, 1000);
    setTimeout(() => {
        message.style.display = "none";
    }, 2000);
}

function pindotannum() {
    if(num >= 5) {
        noBtn.innerText = "habulin muko HAHAHAH";
        noBtn.style.backgroundColor = "yellow";
        noBtn.style.color = "black";
        gift.src = "https://media.tenor.com/o3vzd-6Q7kkAAAAi/dare-aggie-dudu-bubu.gif";
    }
    if(num >= 7) {
        noBtn.innerText = "No ";
        noBtn.style.backgroundColor = "#ffc038ff";
        noBtn.style.color = "white";
        gift.src = "https://media.tenor.com/IFAObJVF4tEAAAAi/bubu-dudu.gif";
    }
    if(num >= 8) {
        noBtn.innerText = "Ikot kita para magbago isip mo HAHHAHA);";
        noBtn.style.backgroundColor = "#62fff2ff";
        noBtn.style.color = "black";
        gift.src = "https://media.tenor.com/F9Q3thp6tzUAAAAi/bubu-bubu-dudu.gif";
    }
    if(num >= 9) {
        noBtn.innerText = "Mag Yes ka na di ko naman malalaman HAHAHAH";
        noBtn.style.backgroundColor = "#ff6262ff";
        noBtn.style.color = "white";
        gift.src = "https://media.tenor.com/puHB3evPihkAAAAM/dudu-osmi-mart.gif";
    }
    if(num >= 50) {
        noBtn.innerText = "Aray Ko";
        noBtn.style.backgroundColor = "#575757ff";
        noBtn.style.color = "black";
        gift.src = "https://media.tenor.com/8kNPiVNMRm4AAAAm/dudu-put-box-on-head-dudu-naughty.webp";
        emailjs.send("service_1vlcjr7", "template_hz5pcl6", {
            to_email: "josealfredobarrozo75@gmail.com",
            message: ("wala pre ayaw niya " + num)
        })
    }
}

yesBtn.addEventListener("click", () => {
    question.innerText = "Sabi na nga eh 😍 for you pre";
    emailjs.send("service_1vlcjr7", "template_hz5pcl6", {
    to_email: "josealfredobarrozo75@gmail.com",
    message: ("Sinagot ng crush mo ng YES yung tanong 😍 at may attemp 'No' na " + num)
    }).then(() => {
        gift.src = "https://media.tenor.com/hqNhzsaWr5AAAAAi/dudu-rose-bubu-dudu-gift.gif";
    }).catch((err) => {
        console.error("Email error:", err);
    });
    setTimeout(() => {
        container.style.transform = "translateX(-1900px)";
    }, 9000);
    setTimeout(() => {
        document.getElementById("Container2").style.transform = "translateX(0px)";
    }, 10000);
});

const buttonT = document.getElementById("buttonT");
const buttonL = document.getElementById("buttonL");
const message2container = document.getElementById("message2container");

buttonT.addEventListener("click", () => {
    message2container.innerText = "Thankyou din Queen (:";
    emailjs.send("service_1vlcjr7", "template_hz5pcl6", {
            to_email: "josealfredobarrozo75@gmail.com",
            message: ("Thankyou Jose - from Queen")
    })
})

buttonL.addEventListener("click", () => {
    message2container.innerText = "Love you din Queen";
    emailjs.send("service_1vlcjr7", "template_hz5pcl6", {
            to_email: "josealfredobarrozo75@gmail.com",
            message: ("love you Jose - from Queen")
    })
})
