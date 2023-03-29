document.getElementById("formSubmit").addEventListener("click", displayDate);

function displayDate() {
    let firstNameValue = document.getElementById("firstName").value;

    let lastNameValue = document.getElementById("lastName").value;

    let dateOfBirthValue = document.getElementById("dateOfBirth").value;

    let genderElement = document.querySelector('input[name = gender]:checked');
    let genderValue = ""
    if (genderElement) {
        genderValue = genderElement.value;
    }

    let checkboxes = document.querySelectorAll('input[name="knownLanguage"]:checked');
    let knownLanguage = [];
    checkboxes.forEach((checkbox) => {
        knownLanguage.push(checkbox.value);
    });

    let courseValue = document.getElementById("course").value;

    let addressValue = document.getElementById("address").value;

    const formData = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        dateOfBirth: dateOfBirthValue,
        gender: genderValue,
        course: courseValue,
        knownLanguage: knownLanguage,
        address: addressValue


    }
    console.log("formdata", formData)
}