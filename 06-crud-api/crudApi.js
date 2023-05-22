document.getElementById("add-new-data").addEventListener("click", appendForm);

function appendForm() {
    document.getElementById('main').innerHTML = `<h2 class="form-heading">Add New Project Data</h2>
    <form class="form-section">
        <div class="formfield">
            <label class="formlabel" for="date">Date:</label>
            <input type="date" id="date" name="date" placeholder="yyyy-mm-dd">
        </div>
        <div class="formfield">
            <label class="formlabel" for="projectTitle">Project Title:</label>
            <input type="text" id="projectTitle" name="projectTitle" placeholder="Enter Project Title">
        </div>
        <div class="formfield">
            <label class="formlabel" for="projectDescription">Project Description:</label>
            <textarea id="projectdescription" name="projectDescription"></textarea>
        </div>
        <div class="formfield">
            <label class="formlabel" for="uiTechnology">UI Technology:</label>
            <select name="uiTechnology" id="uiTechnology">
                <option value="select">Select</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="flutter">Flutter</option>
                <option value="vue.Js">Vue.js</option>

            </select><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="backendtechnology">Back-End Technology:</label>
            <label for="python">Python</label>
            <input type="radio" id="python" name="backendtechnology" value="python">
            <label for="net">.NET</label>
            <input type="radio" id="net" name="backendtechnology" value="net">
            <label for="php">PHP</label>
            <input type="radio" id="php" name="backendtechnology" value="php"><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="libraryUsed">Library Used:</label>
            <label for="redux">Redux</label>
            <input type="checkbox" id="redux" name="libraryUsed" value="redux">
            <label for="saga">Saga</label>
            <input type="checkbox" id="saga" name="libraryUsed" value="saga">
            <label for="numpy">Numpy</label>
            <input type="checkbox" id="numpy" name="libraryUsed" value="numpy">
            <label for="pandas">Pandas</label>
            <input type="checkbox" id="pandas" name="libraryUsed" value="pandas">

        </div>
        <div class="form-button">
            <input type="submit" id="formSubmit" value="Add">
            <input type="Reset" value="Reset">
            <input type="button" value="Cancel">
        </div>
    </form>
    `
    document.getElementById("formSubmit").addEventListener("click", getProjectData);
}
document.getElementById("get-data").addEventListener("click", getData);

async function getData() {
    const response = await fetch('http://localhost:8888/project')
    const responseDataList = await response.json()
    console.log(responseDataList)
    document.getElementById('main').innerHTML = `
    <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Project Title</th>
        <th>Project Description</th>
        <th>UI Technology</th>
        <th>Back-End Technology</th>
        <th>Library Used</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody id="tableBody">
    
      </tbody>
      </table>
        `
    let tableBodyData = ""
    for (let i = 0; i < responseDataList.length; i++) {
        debugger
        const dataObject = responseDataList[i];
        const id = dataObject.id
        const stringifyData = JSON.stringify(dataObject)
        tableBodyData = tableBodyData + `<tr>
               <td>${dataObject.date}</td>
               <td>${dataObject.title}</td>
               <td>${dataObject.description}</td>
               <td>${dataObject.technology.uiTech}</td>
               <td>${dataObject.technology.backEndTech}</td>
               <td>${JSON.stringify(dataObject.library)}</td>
               <td>
               <button onclick="deleteRecord('${id}')">Delete</button>
               <button onclick='editRecord(${stringifyData})'>Edit</button>
               </td>
              
             </tr>`

    }
    document.getElementById("tableBody").innerHTML = tableBodyData
}
getData()

async function getProjectData(e) {
    e.preventDefault()
    let date = document.getElementById("date").value;
    let projectTitle = document.getElementById("projectTitle").value;
    let projectDescription = document.getElementById("projectdescription").value;
    let uiTechnology = document.getElementById("uiTechnology").value;
    let backEndTechnology = document.querySelector('input[name = backendtechnology]:checked');
    let backEndTechnologyValue = ""
    if (backEndTechnology) {
        backEndTechnologyValue = backEndTechnology.value;
    }
    let checkboxes = document.querySelectorAll('input[name="libraryUsed"]:checked');
    let libraryUsed = [];
    checkboxes.forEach((checkbox) => {
        libraryUsed.push(checkbox.value);
    });


    function getLibrary() {
        let reduxValue, sagaValue, numpyValue, pandasValue;
        reduxValue = document.getElementById('redux').checked;
        sagaValue = document.getElementById('saga').checked;
        numpyValue = document.getElementById('numpy').checked;
        pandasValue = document.getElementById('pandas').checked;

        const library = {
            redux: reduxValue,
            saga: sagaValue,
            numpy: numpyValue,
            pandas: pandasValue

        }
        return library
    }

    const formData = {
        title: projectTitle,
        date: date,
        description: projectDescription,
        technology: {
            uiTech: uiTechnology,
            backEndTech: backEndTechnologyValue
        },
        library: getLibrary()
    }
    console.log(formData)

    const response = await fetch('http://localhost:8888/project', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const responseData = await response.json()
    getData()
}

async function deleteRecord(id) {
    console.log(id)
    const response = await fetch(`http://localhost:8888/project/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }

    })
    const responseData = await response.json()
    getData()

}

function editRecord(dataObject) {
    console.log(dataObject)

    document.getElementById('main').innerHTML = `<h2 class="form-heading">Update Project Data</h2>
    <form class="form-section">
        <div class="formfield">
            <label class="formlabel" for="date">Date:</label>
            <input type="date" id="date" name="date" placeholder="yyyy-mm-dd">
        </div>
        <div class="formfield">
            <label class="formlabel" for="projectTitle">Project Title:</label>
            <input type="text" id="projectTitle" name="projectTitle" placeholder="Enter Project Title">
        </div>
        <div class="formfield">
            <label class="formlabel" for="projectDescription">Project Description:</label>
            <textarea id="projectdescription" name="projectDescription"></textarea>
        </div>
        <div class="formfield">
            <label class="formlabel" for="uiTechnology">UI Technology:</label>
            <select name="uiTechnology" id="uiTechnology">
                <option value="select">Select</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="flutter">Flutter</option>
                <option value="vue.Js">Vue.js</option>

            </select><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="backendtechnology">Back-End Technology:</label>
            <label for="python">Python</label>
            <input type="radio" id="python" name="backendtechnology" value="python">
            <label for="net">.NET</label>
            <input type="radio" id="net" name="backendtechnology" value="net">
            <label for="php">PHP</label>
            <input type="radio" id="php" name="backendtechnology" value="php"><br>
        </div>
        <div class="formfield">
            <label class="formlabel" for="libraryUsed">Library Used:</label>
            <label for="redux">Redux</label>
            <input type="checkbox" id="redux" name="libraryUsed" value="redux">
            <label for="saga">Saga</label>
            <input type="checkbox" id="saga" name="libraryUsed" value="saga">
            <label for="numpy">Numpy</label>
            <input type="checkbox" id="numpy" name="libraryUsed" value="numpy">
            <label for="pandas">Pandas</label>
            <input type="checkbox" id="pandas" name="libraryUsed" value="pandas">

        </div>
        <div class="form-button">
            <input type="button" id="formUpdate" value="Update">
            <input type="Reset" value="Reset">
            <input type="button" value="Cancel">
          

        </div>
    </form>
    `
    const id = dataObject.id
    document.getElementById("formUpdate").addEventListener("click", (e) => { updateFormData(e, id) });

    // const date = dataObject.date
    // const title = dataObject.title
    // const description = dataObject.description
    const { date, title, description } = dataObject
    // const dataObject1 = {
    //     date: "abc",
    //     title: "dfg",
    //     description: "cvb"
    // }
    document.getElementById("date").value = date
    document.getElementById("projectTitle").value = title
    document.getElementById("projectdescription").value = description
    document.getElementById("uiTechnology").value = dataObject.technology.uiTech


    function addBackEndTechnologyInForm() {
        const backEndTechnologyValue = dataObject.technology.backEndTech
        console.log(backEndTechnologyValue)
        if (backEndTechnologyValue == "python") {
            document.getElementById("python").checked = true
        }
        else if (backEndTechnologyValue == "net") {
            document.getElementById("net").checked = true
        }
        else if (backEndTechnologyValue == "php") {
            document.getElementById("php").checked = true
        }
    }
    addBackEndTechnologyInForm()

    function addLibraryInForm() {

        const libraryUsed = dataObject.library
        console.log(libraryUsed)

        document.getElementById('redux').checked = libraryUsed.redux
        document.getElementById('saga').checked = libraryUsed.saga
        document.getElementById('numpy').checked = libraryUsed.numpy
        document.getElementById('pandas').checked = libraryUsed.pandas

    }
    addLibraryInForm()
}
async function updateFormData(e, id) {
    e.preventDefault()
    debugger
    let date = document.getElementById("date").value;
    let projectTitle = document.getElementById("projectTitle").value;
    let projectDescription = document.getElementById("projectdescription").value;
    let uiTechnology = document.getElementById("uiTechnology").value;
    let backEndTechnology = document.querySelector('input[name = backendtechnology]:checked');
    let backEndTechnologyValue = ""
    if (backEndTechnology) {
        backEndTechnologyValue = backEndTechnology.value;
    }
    let checkboxes = document.querySelectorAll('input[name="libraryUsed"]:checked');
    let libraryUsed = [];
    checkboxes.forEach((checkbox) => {
        libraryUsed.push(checkbox.value);
    });

    function getLibrary() {
        let reduxValue, sagaValue, numpyValue, pandasValue;
        reduxValue = document.getElementById('redux').checked;
        sagaValue = document.getElementById('saga').checked;
        numpyValue = document.getElementById('numpy').checked;
        pandasValue = document.getElementById('pandas').checked;

        const library = {
            redux: reduxValue,
            saga: sagaValue,
            numpy: numpyValue,
            pandas: pandasValue

        }
        return library
    }


    const formData = {
        id: id,
        title: projectTitle,
        date: date,
        description: projectDescription,
        technology: {
            uiTech: uiTechnology,
            backEndTech: backEndTechnologyValue
        },
        library: getLibrary()
    }
    console.log(formData)
    const response = await fetch('http://localhost:8888/project', {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const responseData = await response.json()
    getData()
}
