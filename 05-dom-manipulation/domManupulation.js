const dataList=[]

document.getElementById("add-new-data").addEventListener("click", appendForm);

function appendForm() {

    console.log("append function called")
   


    document.getElementById('main').innerHTML = `<h2 class="form-heading">Student Form</h2>
    <form class="form-section">
        <div class="formfield">
            <label class="formlabel" for="firstName">First name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter first Name">
        </div>
        <div class="formfield">
            <label class="formlabel" for="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter last Name"><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="yyyy-mm-dd">
        </div>
        <div class="formfield">
            <label class="formlabel" for="gender">Gender:</label>
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="other">Other</label>
            <input type="radio" id="other" name="gender" value="other"><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="knownLanguage">Known Language:</label>
            <label for="english">English</label>
            <input type="checkbox" id="english" name="knownLanguage" value="english">
            <label for="marathi">Marathi</label>
            <input type="checkbox" id="marathi" name="knownLanguage" value="marathi">
            <label for="hindi">Hindi</label>
            <input type="checkbox" id="hindi" name="knownLanguage" value="hindi">
        </div>
        <div class="formfield">
            <label class="formlabel" for="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter address"></textarea>
        </div>
        <div class="formfield">
            <label class="formlabel" for="course">Course Applied for:</label>
            <select name="course" id="course">
                <option value="science">Science</option>
                <option value="commerce">Com</option>
                <option value="art">Art</option>
            </select><br>
        </div>
        <div class="form-button">
            <input type="submit" id="formSubmit" value="Submit">
            <input type="Reset" value="Reset">
        </div>
    </form>
        `
        document.getElementById("formSubmit").addEventListener("click", getFormData);

}


document.getElementById("get-data").addEventListener("click", getData);

function getData() {

    document.getElementById('main').innerHTML = ""

}



function getFormData(e) {
    e.preventDefault()
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
    dataList.push(formData)
    console.log("dataList",dataList)
}
