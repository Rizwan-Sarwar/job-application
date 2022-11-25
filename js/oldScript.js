const form__submit = () => {
    debugger
    let error__wrap = document.getElementsByClassName("error__message")[0];
    let error = error__wrap.children[1];
    let all__inputs = document.getElementsByClassName("valid");
    [...all__inputs].forEach(input => {
        if (input.value.trim() === "") {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<span class="input__name">${input.name.split('__').join(" ")}</span> : Please fill out this field.`;
            error.appendChild(listItem);
            input.classList.add("error");
        } else {

        }
    });
    error__wrap.hasChildNodes() ? error__wrap.classList.add("display__block") : error__wrap.classList.remove("display__block")
}













const allLetter = (applicant__name, error) => {
    debugger
    var letters = /^[A-Z a-z]+$/;
    if (applicant__name.value.match(letters)) {
        if (error.children.length != 0) {
            error.children.name.remove()
            applicant__name.classList.remove("error");
        }
        return true
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span class="input__name">${applicant__name.name.split('__').join(" ")}</span> : Please fill out this field.`;
        listItem.setAttribute("name", `${applicant__name.name}`);
        error.appendChild(listItem);
        applicant__name.classList.add("error");
    }
}