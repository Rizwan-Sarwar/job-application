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
// Reference messages collection
var messagesRef = firebase.database().ref('applicant');


// form submit
document.addEventListener("keypress", event => {
    event.key === "Enter" ? [event.preventDefault(), document.getElementById("formSubmit").click()] : ""
})
const formValidation = () => {
    // invalid field check
    var error__wrap = document.getElementsByClassName("error__message")[0];
    var error = error__wrap.children[1];
    error.hasChildNodes() ? error.innerHTML = "" : "";
    //general details
    var name = document.job__application.name;
    var father__spouse = document.job__application.father__spouse;
    var date__of__birth = document.job__application.date__of__birth;
    var email__address = document.job__application.email__address;
    var gender = document.job__application.gender;
    var marital__status = document.job__application.marital__status;
    var cnic__number = document.job__application.cnic__number;
    var nationality = document.job__application.nationality;
    var mobile__no = document.job__application.mobile__no;
    var landline__no = document.job__application.landline__no;
    var current__address = document.job__application.current__address;
    var permanent__address = document.job__application.permanent__address;
    var country = document.job__application.country;
    var country__two = document.job__application.country__two;
    var city = document.job__application.city;
    var city__two = document.job__application.city__two;
    var postal__code = document.job__application.postal__code;
    var postal__code__two = document.job__application.postal__code__two;
    // qualification details
    var degree = document.job__application.degree;
    var board__institution = document.job__application.board__institution;
    var acquired__in_year = document.job__application.acquired__in_year;
    var acquired__in_month = document.job__application.acquired__in_month;
    var result = document.job__application.result;
    var result__number = document.job__application.result__number;
    // professional experience details
    var employer = document.job__application.employer;
    var initial__position = document.job__application.initial__position;
    var last__position = document.job__application.last__position;
    var department = document.job__application.department;
    var from = document.job__application.from;
    var to = document.job__application.to;
    // training details
    var training = document.job__application.training;
    var institute = document.job__application.institute;
    var training__from__year = document.job__application.training__from__year;
    var training__from__month = document.job__application.training__from__month;
    var training__to__year = document.job__application.training__to__year;
    var training__to__month = document.job__application.training__to__month;
    // skills details
    var skill = document.job__application.skill;
    var skill__acquired_year = document.job__application.skill__acquired_year;
    var skill__acquired_month = document.job__application.skill__acquired_month;
    // application specific details
    var job__position = document.job__application.job__position;
    var field__of__interest = document.job__application.field__of__interest;
    var apply__before = document.job__application.apply__before;
    var apply__before__date = document.job__application.apply__before__date;
    var apply__before__position = document.job__application.apply__before__position;
    var resume = document.job__application.resume;
    var picture = document.job__application.picture;

    // all letter
    if (allLetter(name, error)) {
        applicantData.name = name.value;
    }
    if (allLetter(father__spouse, error)) {
        applicantData.father__spouse = father__spouse.value;
    }
    if (allLetter(nationality, error)) {
        applicantData.nationality = nationality.value;
    }
    if (allLetter(city, error)) {
        applicantData.city = city.value;
    }
    if (allLetter(degree, error)) {
        applicantData.degree = degree.value;
    }
    if (allLetter(board__institution, error)) {
        applicantData.board__institution = board__institution.value;
    }
    if (allLetter(job__position, error)) {
        applicantData.job__position = job__position.value;
    }
    if (allLetter(field__of__interest, error)) {
        applicantData.field__of__interest = field__of__interest.value;
    }
    // all select option
    if (selectOptions(gender, error)) {
        applicantData.gender = gender.value;
    }
    if (selectOptions(marital__status, error)) {
        applicantData.marital__status = marital__status.value;
    }
    if (selectOptions(country, error)) {
        applicantData.country = country.value;
    }
    if (selectOptions(acquired__in_year, error)) {
        applicantData.acquired__in_year = acquired__in_year.value;
    }
    if (selectOptions(acquired__in_month, error)) {
        applicantData.acquired__in_month = acquired__in_month.value;
    }
    if (selectOptions(result, error)) {
        applicantData.result = result.value;
    }
    // phone number
    if (phoneNumbers(mobile__no, error)) {
        applicantData.mobile__no = mobile__no.value;
    }
    // all date time
    if (dateTime(date__of__birth, error)) {
        applicantData.date__of__birth = date__of__birth.value;
    }
    // all zip code
    if (zipCode(postal__code, error)) {
        applicantData.postal__code = postal__code.value;
    }
    // all CNIC
    if (CNIC__Check(cnic__number, error)) {
        applicantData.cnic__number = cnic__number.value;
    }
    // all letter and numbers 
    if (addressCheck(current__address, error)) {
        applicantData.current__address = current__address.value;
    }
    if (addressCheck(result__number, error)) {
        applicantData.result__number = result__number.value;
    }
    // all emails check
    if (emailCheck(email__address, error)) {
        applicantData.email__address = email__address.value;
    }
    // resume check
    if (resumeCheck(resume, error)) { }
    errorMessage(error__wrap, error)
    applicantData.landline__no = landline__no.value == "" ? "null" : landline__no.value;
    applicantData.permanent__address = permanent__address.value == "" ? "null" : permanent__address.value;
    applicantData.country__two = country__two.value == "" ? "null" : country__two.value;
    applicantData.city__two = city__two.value == "" ? "null" : city__two.value;
    applicantData.postal__code__two = postal__code__two.value == "" ? "null" : postal__code__two.value;
    applicantData.employer = employer.value == "" ? "null" : employer.value;
    applicantData.initial__position = initial__position.value == "" ? "null" : initial__position.value;
    applicantData.last__position = last__position.value == "" ? "null" : last__position.value;
    applicantData.department = department.value == "" ? "null" : department.value;
    applicantData.from = from.value == "" ? "null" : from.value;
    applicantData.to = to.value == "" ? "null" : to.value;
    applicantData.training = training.value == "" ? "null" : training.value;
    applicantData.institute = institute.value == "" ? "null" : institute.value;
    applicantData.training__from__year = training__from__year.value == "" ? "null" : training__from__year.value;
    applicantData.training__from__month = training__from__month.value == "" ? "null" : training__from__month.value;
    applicantData.training__to__year = training__to__year.value == "" ? "null" : training__to__year.value;
    applicantData.training__to__month = training__to__month.value == "" ? "null" : training__to__month.value;
    applicantData.skill = skill.value == "" ? "null" : skill.value;
    applicantData.skill__acquired_year = skill__acquired_year.value == "" ? "null" : skill__acquired_year.value;
    applicantData.skill__acquired_month = skill__acquired_month.value == "" ? "null" : skill__acquired_month.value;
    applicantData.apply__before = apply__before.value == "" ? "null" : apply__before.value;
    applicantData.apply__before__date = apply__before__date.value == "" ? "null" : apply__before__date.value;
    applicantData.apply__before__position = apply__before__position.value == "" ? "null" : apply__before__position.value;
    imageCheck(picture)

    // InsertData(applicantData)
    let mainFields = [
        name, father__spouse, nationality, city, degree, board__institution, job__position, field__of__interest, gender, marital__status, country, acquired__in_year, acquired__in_month, result, mobile__no, date__of__birth, postal__code, cnic__number, current__address, result__number, email__address, resume
    ]
    mainFieldsCheck(mainFields, applicantData)
    return false
}

// alphabetic character fields check
const allLetter = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    var letters = /^[A-Z a-z]+$/;
    if (input.value.trim().match(letters)) {
        return true;
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false;
    }
}

// select fields check
const selectOptions = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    if (input.value != "null") {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        return false
    }
}

// phone number fields check
const phoneNumbers = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    var letters = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (input.value.match(letters)) {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// datetime fields check
const dateTime = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    if (input.value != "") {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// zip code fields check
const zipCode = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    var letters = /^[0-9]+$/;
    if (input.value.trim().match(letters)) {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// CNIC fields check
const CNIC__Check = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    var letters = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (input.value.trim().match(letters)) {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// address fields check
const addressCheck = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    // var letters = /^[0-9a-zA-Z]+$/;
    if (input.value != "") {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// email fields check
const emailCheck = (input, error) => {
    input.classList.contains("error") ? input.classList.remove("error") : "";
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.trim().match(letters)) {
        return true
    } else {
        input.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", input.name);
        create__error.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        input.value = "";
        return false
    }
}

// resume fields check
const resumeCheck = (resume, error) => {
    resume.classList.contains("error") ? resume.classList.remove("error") : "";
    // allowing file type
    // var allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    var allowedExtensions = /(\.pdf)$/i;
    if (allowedExtensions.exec(resume.value)) {
        return true
    } else {
        resume.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", resume.name);
        create__error.innerHTML = `<span class="input__name">${resume.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        resume.value = "";
        return false
    }
}

// image fields check
const imageCheck = (picture) => {
    // allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (allowedExtensions.exec(picture.value)) { }
    else {
        picture.value = '';
    }
}

// file upload
let uploadFiles = (folder, file) => {
    const uuidv4 = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    let uniqueID = uuidv4()
    // folder == "applicant_resume" ? applicantData.resumeID = uniqueID : applicantData.pictureID = uniqueID;
    if (folder == "applicant_resume") {
        applicantData.resumeID = uniqueID
        return new Promise((resolve, reject) => {
            let storageRef = firebase.storage().ref(`${folder}/${uniqueID}`);
            let uploading = storageRef.put(file)
            uploading.on('state_changed',
                (snapshot) => {
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    reject(error)
                    delete applicantData.pictureID;
                },
                () => {
                    uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            );
        })
    }
    applicantData.pictureID = uniqueID
    return new Promise((resolve, reject) => {
        let storageRef = firebase.storage().ref(`${folder}/${uniqueID}`);
        let uploading = storageRef.putString(file, 'data_url')
        uploading.on('state_changed',
            (snapshot) => {
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
                delete applicantData.pictureID;
            },
            () => {
                uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
        );
    })

}

// check if error list is empty than hide this element
const errorMessage = (error__wrap, error) => {
    error.hasChildNodes() ? error__wrap.classList.add("display__block") : error__wrap.classList.remove("display__block");
}

// add more details (qualification / experience / trainings / skills)
const addMore = (ele) => {
    let sectionCheck = ele.getElementsByTagName("span")[0].innerText;
    let fields = ele.parentElement.parentElement.getElementsByClassName("add__more__mainFields")[0];
    let newFields = document.createElement("div");
    if (sectionCheck == "Add more qualifications") {
        newFields.className = "fields__wrap width__divide__four"
        newFields.innerHTML =
            `
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="degree">degree</label>
            </div>
            <div class="input__wrap">
                <input type="text" class="valid">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="board__institution">board/Institution</label>
            </div>
            <div class="input__wrap">
                <input type="text" class="valid">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="acquired__in_year">acquired in</label>
            </div>
            <div class="input__wrap width__divide__two">
                <select id="" class="valid">
                    <option value="null">select</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                </select>
                <select id="" class="valid">
                    <option value="null">select</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="result">result</label>
            </div>
            <div class="input__wrap width__divide__two">
                <select id="" class="valid">
                    <option value="null">select</option>
                    <option value="grade">grade</option>
                    <option value="division">division</option>
                    <option value="age">%Age</option>
                    <option value="in__progress">in progress</option>
                    <option value="unspecified">unspecified</option>
                </select>
                <input type="text">
            </div>
        </div>
        `
    }
    if (sectionCheck == "Add more experiences") {
        newFields.className = "fields__wrap"
        newFields.innerHTML =
            `
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="employer">employer</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="employer">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="initial__position">initial position</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="initial__position">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="last__position">last position</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="last__position">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="department">department</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="department">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="from">from</label>
            </div>
            <div class="input__wrap">
                <input type="date" name="from" id="">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="to">to</label>
            </div>
            <div class="input__wrap">
                <input type="date" name="to" id="">
            </div>
        </div>
        `
    }
    if (sectionCheck == "Add more trainings") {
        newFields.className = "fields__wrap width__divide__two"
        newFields.innerHTML =
            `
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="training">training</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="training">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="institute">institute</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="institute">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="training__from__year">from</label>
            </div>
            <div class="input__wrap width__divide__two">
                <select name="training__from__year" id="">
                    <option value="null">select</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                </select>
                <select name="training__from__month" id="">
                    <option value="null">select</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="training__to__year">to</label>
            </div>
            <div class="input__wrap width__divide__two">
                <select name="training__to__year" id="">
                    <option value="null">select</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                </select>
                <select name="training__to__month" id="">
                    <option value="null">select</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
        </div>
        `
    }
    if (sectionCheck == "Add more skills") {
        newFields.className = "fields__wrap width__divide__two"
        newFields.innerHTML =
            `
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="skill">skill</label>
            </div>
            <div class="input__wrap">
                <input type="text" name="skill">
            </div>
        </div>
        <!-- field -->
        <div class="field">
            <div class="label__wrap">
                <label for="skill__acquired_year">acquired in</label>
            </div>
            <div class="input__wrap width__divide__two">
                <select name="skill__acquired_year" id="">
                    <option value="null">select</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                </select>
                <select name="skill__acquired_month" id="">
                    <option value="null">select</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
        </div>
        `
    }
    fields.appendChild(newFields)
}

// applicant data collect in { applicantData }
const applicantData = {}
// second validation if all required fields are not empty then send to the database 
const mainFieldsCheck = (fields, applicantData) => {
    let fieldsValidationCheck = () => {
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == "" || fields[i].value == "null") {
                return true
            }
        }
    }
    if (fieldsValidationCheck()) {
        console.log("Some importent fields are empty ://")
    }
    else {
        let resume = document.job__application.resume;
        let picture = document.job__application.picture;
        uploadFiles("applicant_resume", resume.files[0])
        if (picture.value != "") {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            let ogImageRatio = applicantPicture.naturalWidth / applicantPicture.naturalHeight;
            canvas.width = 90
            canvas.height = Math.floor(90 / ogImageRatio);
            ctx.drawImage(applicantPicture, 0, 0, canvas.width, canvas.height)
            let imageURL = canvas.toDataURL("image/jpeg", 1.0);
            uploadFiles("applicant_picture", imageURL);
        }
        let newMessageRef = messagesRef.push();
        applicantData.id = newMessageRef.key;
        newMessageRef.set(applicantData)
            .then(() => {
                console.log("Data added successfully :)");
                let msgBoxWrap = document.createElement("div");
                msgBoxWrap.setAttribute("class", "data__msg");
                msgBoxWrap.setAttribute("onclick", "msgBoxRemove()");
                let msgBox =
                    `
                <div class="close__wrap">
                    <span class="close__box">x</span>
                </div>
                <div class="msg__wrao">
                    <p class="box__msg">application added seccussfully</p>
                </div>
            `
                msgBoxWrap.innerHTML = msgBox
                document.querySelector("body").appendChild(msgBoxWrap);
                // Hide after 2 seconds
                setTimeout(function () {
                    document.querySelector('.data__msg').style.display = 'none';
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                let msgBoxWrap = document.createElement("div");
                msgBoxWrap.setAttribute("class", "data__msg");
                msgBoxWrap.setAttribute("onclick", "msgBoxRemove()");
                let msgBox =
                    `
                <div class="close__wrap">
                    <span class="close__box">x</span>
                </div>
                <div class="msg__wrao">
                    <p class="box__msg">please try again</p>
                </div>
            `
                msgBoxWrap.innerHTML = msgBox
                document.querySelector("body").appendChild(msgBoxWrap);
                // Hide after 2 seconds
                setTimeout(function () {
                    document.querySelector('.data__msg').style.display = 'none';
                }, 2000);
            })
    }
}
const msgBoxRemove = () => {
    document.querySelector(".close__box").parentElement.parentElement.remove()
}
// if window.location.pathname is candidates then get data from database
document.querySelector("body").onload = () => {
    if (window.location.pathname === "/job-application/candidates.html") {
        console.log("window location pathname = candidates.html")
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            for (let object in data) {
                let pictureFind = (picture, dataID) => {
                    firebase.storage().ref(`applicant_picture/${picture}`).getDownloadURL()
                        .then((url) => {
                            let ele = document.querySelector(`[data-id="${dataID}"]`);
                            ele.querySelector(".candidate__image").src = url
                            console.log("resolve")
                        })
                        .catch((error) => {
                            console.log("reject", error)
                        });
                }

                let dataID = data[object].id;
                pictureFind(data[object].pictureID, data[object].id)
                let applicantMin =
                    `
                    <div class="candidate" data-id=${dataID} onclick="getDetail(this)">
                        <div class="image__wrap">
                            <img class="candidate__image" src="images/avatar.png" alt="candidate__image">
                        </div>
                        <div class="name__wrap">
                            <p class="candidate__name">${data[object].name}</p>
                        </div>
                        <div class="job_tittle__wrap">
                            <p class="job__title">${data[object].job__position}</p>
                        </div>
                        <div class="details__btn">
                            <a href="##">view details</a>
                        </div>
                    </div>
                `;
                let applicantWrap = document.querySelector(".candidates__wrap");
                applicantWrap.innerHTML += applicantMin
            }
        });
    }
}
let getDetail = (getID) => {
    localStorage.setItem("candidateID", getID.dataset.id);
    window.location.pathname = "/job-application/candidate_details.html";
}

let applicantPicture = document.querySelector("#applicantPicture");
document.getElementsByName("picture")[0].addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (!file) return;
    applicantPicture.src = URL.createObjectURL(file);
});
