const listProductPage = document.querySelector(".listProducts");
const bankData = [];

class List {
  constructor(titleTask, descritionTask) {
    this.titleTask = titleTask;
    this.descritionTask = descritionTask;
  }

  addList() {
    // submit array
    const newProduct = {
      title: this.titleTask,
      descrition: this.descritionTask,
    };

    bankData.push(newProduct);
    localStorage.setItem("List", JSON.stringify(newProduct));
    // add data hours

    let currentDay = "";
    let currentMonth = "";

    if (currentDay <= 10) {
      currentDay = "0" + new Date().getDate();
    }
    if (currentMonth <= 10) {
      currentMonth = "0" + new Date().getMonth();
    }

    const dateComplete = `${currentDay}/${currentMonth}/${new Date().getFullYear()}`;

    // contentText
    const bodyInfo = document.createElement("div");
    bodyInfo.setAttribute("class", "product-users");
    bodyInfo.setAttribute("remover", "remover");

    //create add info

    bodyInfo.innerHTML = `
            <h2> ${this.titleTask}</h2>
            <p> ${this.descritionTask}</p>
            <span>
            <span class='dateList'>${dateComplete}</span>
            <button removerBtn>
                <i class="fa-solid fa-trash-can"></i>
            </button>
            </span>
            </br>
            `;

    listProductPage.appendChild(bodyInfo);

  }

  removeItemList() {
    document.querySelectorAll("[removerBtn]").forEach(
      (itemButton) =>
        (itemButton.onclick = function () {
          document.querySelectorAll("[remover]").forEach(
            (itemButton) =>
              (itemButton.onclick = function () {
                alert("Um item foi removido com sucesso.");
                itemButton.style.display = "none";
              })
          );
        })
    );
  }
}

function btnAddSave() {

  const titleTaskForm = document.querySelector("#nameOfProdut").value;
  const textDescritionForm = document.querySelector("#textDescrition").value;
  const messageerror = document.querySelector('.textError'); 
  messageerror.style.color = 'red'
  
  if (titleTaskForm === '' && textDescritionForm === '') {
      messageerror.innerHTML = 'Os dados não estão preenchidos!'
    } else if (titleTaskForm == '') {
        messageerror.innerHTML = 'Digite o titulo para prosseguir...'
    } else if (textDescritionForm == '') {
        messageerror.innerHTML = 'Digite a descrição para prosseguir...'
    } else {
        //invoca
    const instanciar = new List(titleTaskForm, textDescritionForm);
    instanciar.addList();
    instanciar.removeItemList();
    messageerror.innerHTML = 'Salvo com sucesso'; 
    messageerror.style.color = 'green'
  } 

}
