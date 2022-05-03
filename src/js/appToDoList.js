// App to do list 

function ToDoListAdd (title, text) {
    this.titleTask = title; 
    this.listText = text;
}   

function DisplayList (list) {
    //list.titleTask list.listText
    const conteinerAnwser = document.getElementById('areaAnswer'); 

    // day and month 
    const dateAndDay = new Date().getDate()
    const monthAdd = new Date().getMonth()
    const yersAdd = new Date().getFullYear()
    let addDate = ''
    if (dateAndDay < 10) {
        addDate = `0${dateAndDay}/0${monthAdd}/${yersAdd}`
    } 
    else {
        addDate = `${dateAndDay}/${monthAdd}/${yersAdd}`
    }
    // hours and minutes
    const hoursAdd = new Date().getHours()
    const minutesAdd = new Date().getMinutes()
    let addHours = ''

    if (hoursAdd < 10) {
        addHours = `0${hoursAdd}:${minutesAdd}`
    } else if (minutesAdd < 10) {
        addHours = `${hoursAdd}:0${minutesAdd}`
    } 
    else {
        addHours = `${hoursAdd}:${minutesAdd}`
    }

    const element = document.createElement('p');
    element.innerHTML = `
        <p id="elementsCreateShow">
            <span class="headerAnswer">
                <span class="dateAndHours">Adicionado no dia ${addDate} às ${addHours}</span> 
                <span>
                    <button id="btnAlert" onClick="btnAlert()">
                    <i class="fa-solid fa-bell"></i>
                    </button>
                </span>
            </span>

            <div class="areaTextRes">
                <textarea id="titleCreate" rows="1" >${list.titleTask}</textarea>
                <textarea class="textParagrafo" rows="1" >${list.listText}</textarea>
            </div>
        </p>
    `
    conteinerAnwser.appendChild(element)

}

function btnAlert () {
    alert('Fique a vontade para modificar, textos e títulos. Basta clicar encima!')
}

ToDoListAdd.prototype.resetForForm = function () {
    let formConteiner = document.getElementById('form_list')
    formConteiner.reset()
    formConteiner.style.display = 'none'
}

function addMoreList() {
    document.getElementById('form_list').style.display = 'block'
}

function removeItensList() {
    document.querySelector('#areaAnswer p').remove()
} 

 
document.getElementById('form_list')
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.getElementById('title_list').value 
        const text = document.getElementById('list_Text').value

        const list = new ToDoListAdd(title, text)
        list.resetForForm()
        new DisplayList(list); 

        document.getElementById('areaAnswer').style.display = 'block'
    })

