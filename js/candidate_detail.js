// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyA34ObqqVeigC6pUtm5jlGyx9bfZdHO-iM",
    authDomain: "jobapplication-ce2c2.firebaseapp.com",
    databaseURL: "https://jobapplication-ce2c2-default-rtdb.firebaseio.com",
    projectId: "jobapplication-ce2c2",
    storageBucket: "jobapplication-ce2c2.appspot.com",
    messagingSenderId: "347109503423",
    appId: "1:347109503423:web:1c1a01f7456e7fc55fb10a",
    measurementId: "G-BVZS0WWSYS"
};

firebase.initializeApp(firebaseConfig);

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.querySelector("body").onload = () => {
    let name = document.getElementById("candidate__name");
    let position = document.getElementById("candidate__job");
    let image = document.getElementById("candidate__image");
    let name_repeat = document.querySelector(".candidate__name_rep");
    let email = document.querySelector(".candidate__email");
    let number = document.querySelector(".candidate__number");
    let resume = document.querySelector("#resume");
    let getCandidate = localStorage.getItem("candidateID");
    let detail__wrapper = document.getElementById("applicantData__wrap");
    let deleteBTN = document.querySelector(".action__btn.danger");
    let ApplicationRef = firebase.database().ref('applicant/' + getCandidate);
    ApplicationRef.on('value', (snapshot) => {
        let data = snapshot.val();
        console.log(data)
        name.innerText = data.name;
        position.innerText = data.job__position;
        name_repeat.innerText = data.name;
        email.innerText = data.email__address;
        number.innerText = data.mobile__no;
        let box = '';
        for (let key in data) {
            if (key == 'pictureID' || key == 'resumeID' || key == 'id') {
                if (key == 'id') {
                    deleteBTN.setAttribute("data-id", data[key])
                }
                if (key == 'pictureID') {
                    deleteBTN.setAttribute("picture-id", data[key])
                    firebase.storage().ref(`applicant_picture/${data[key]}`).getDownloadURL()
                        .then((url) => {
                            image.src = url
                            console.log("resolve")
                        })
                        .catch((error) => {
                            console.log("reject", error)
                        });
                }
                if (key == 'resumeID') {
                    deleteBTN.setAttribute("resume-id", data[key])
                    firebase.storage().ref(`applicant_resume/${data[key]}`).getDownloadURL()
                        .then((url) => {
                            resume.src = url
                            console.log("resolve")
                        })
                        .catch((error) => {
                            console.log("reject", error)
                        });
                }
            }
            else {
                box +=
                    `
                <div class="pairData">
                    <div class="key__wrap">
                        <p>${key.replace(/_/g, " ")}</p>
                    </div>
                    <div class="value__wrap">
                        <p>${data[key]}</p>
                    </div>
                </div>
                `
            }
        }
        detail__wrapper.innerHTML += box
    });
}

// delete this
let removeThis = (ele) => {
    ele.getAttribute("picture-id") == null ? '' : firebase.storage().ref('applicant_picture/' + ele.getAttribute("picture-id")).delete()
    firebase.storage().ref('applicant_resume/' + ele.getAttribute("resume-id")).delete();
    firebase.database().ref('applicant/' + ele.getAttribute("data-id")).remove();
    window.location.pathname = "/job-application/candidates.html";
}