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

    // all letter
    if (allLetter(name, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(father__spouse, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(nationality, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(city, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(degree, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(board__institution, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(job__position, error)) {
        console.log("applicant name is not be empty");
    }
    if (allLetter(field__of__interest, error)) {
        console.log("applicant name is not be empty");
    }
    // all select option
    if (selectOptions(gender, error)) {
        console.log("applicant name is not be empty");
    }
    if (selectOptions(marital__status, error)) {
        console.log("applicant name is not be empty");
    }
    if (selectOptions(country, error)) {
        console.log("applicant name is not be empty");
    }
    if (selectOptions(acquired__in_year, error)) {
        console.log("applicant name is not be empty");
    }
    if (selectOptions(acquired__in_month, error)) {
        console.log("applicant name is not be empty");
    }
    if (selectOptions(result, error)) {
        console.log("applicant name is not be empty");
    }
    // phone number
    if (phoneNumbers(mobile__no, error)) {
        console.log("applicant name is not be empty");
    }
    // all date time
    if (dateTime(date__of__birth, error)) {
        console.log("applicant name is not be empty");
    }
    // all zip code
    if (zipCode(postal__code, error)) {
        console.log("applicant name is not be empty");
    }
    // all CNIC
    if (CNIC__Check(cnic__number, error)) {
        console.log("applicant name is not be empty");
    }
    // all letter and numbers 
    if (addressCheck(current__address, error)) {
        console.log("applicant name is not be empty");
    }
    if (addressCheck(result__number, error)) {
        console.log("applicant name is not be empty");
    }
    // all emails check
    if (emailCheck(email__address, error)) {
        console.log("applicant name is not be empty");
    }
    // resume check
    if (resumeCheck(resume, error)) {
        console.log("applicant name is not be empty");
    }
    errorMessage(error__wrap, error)
    return false
}

// only alphabetic character check
const allLetter = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    var letters = /^[A-Z a-z]+$/;
    if (applicant__name.value.trim().match(letters)) {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only select options check
const selectOptions = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    if (applicant__name.value != "Default") {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        return false
    }
}

// only phone Numbers check
const phoneNumbers = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    var letters = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (applicant__name.value.match(letters)) {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only date time mm/dd/yyyy check
const dateTime = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    // var letters = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // var letters = /^\d{2}\/\d{2}\/\d{4}$/;
    if (applicant__name.value != "") {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only zip code check
const zipCode = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    var letters = /^[0-9]+$/;
    if (applicant__name.value.trim().match(letters)) {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only CNIC check
const CNIC__Check = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    var letters = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (applicant__name.value.trim().match(letters)) {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only address check
const addressCheck = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    // var letters = /^[0-9a-zA-Z]+$/;
    if (applicant__name.value != "") {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only email address check
const emailCheck = (applicant__name, error) => {
    applicant__name.classList.contains("error") ? applicant__name.classList.remove("error") : "";
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (applicant__name.value.trim().match(letters)) {
        return true
    } else {
        applicant__name.classList.add("error");
        let create__error = document.createElement("li");
        create__error.setAttribute("name", applicant__name.name);
        create__error.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        error.appendChild(create__error);
        applicant__name.value = "";
        return false
    }
}

// only resume (cv) check
const resumeCheck = (resume, error) => {
    resume.classList.contains("error") ? resume.classList.remove("error") : "";
    // allowing file type
    var allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
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
                    <option value="Default">select</option>
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
                    <option value="Default">select</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
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
                    <option value="Default">select</option>
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
                    <option value="Default">select</option>
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
                    <option value="Default">select</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
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
                    <option value="Default">select</option>
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
                    <option value="Default">select</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
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
                    <option value="Default">select</option>
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
                    <option value="Default">select</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
            </div>
        </div>
        `
    }
    fields.appendChild(newFields)
}