const listProductPage = document.querySelector('.listProducts')
const bankData = []; 

class List {
    constructor(titleTask, descritionTask) {
        this.titleTask = titleTask; 
        this.descritionTask = descritionTask; 
    }
    
    addList () {
        // submit array 
        const newProduct = {
            title: this.titleTask, 
            descrition: this.descritionTask
        }

        bankData.push(newProduct); 
        localStorage.setItem('List', JSON.stringify(newProduct));        
        // add data hours

        let currentDay = '';
        let currentMonth = '';
        
        if (currentDay <= 10) {
            currentDay = '0' + new Date().getDate(); 
        } 
        if (currentMonth <= 10) {
            currentMonth = '0' + new Date().getMonth();
        }

        const dateComplete = `${currentDay}/${currentMonth}/${new Date().getFullYear()}`

        // contentText
        const bodyInfo = document.createElement('div');
        bodyInfo.setAttribute('class', 'product-users'); 
        bodyInfo.setAttribute('remover', 'remover');         

        //create add info 

        bodyInfo.innerHTML = `
            <h2> ${newProduct.title}</h2>
            <p> ${newProduct.descrition}</p>
            <span>
            <span class='dateList'>${dateComplete}</span>
            <button removerBtn>
                <i class="fa-solid fa-trash-can"></i>
            </button>
            </span>
            `
        
        listProductPage.appendChild(bodyInfo); 
    }

    removeItemList() {
        document.querySelectorAll('[removerBtn]').forEach(itemButton => 
            itemButton.onclick = function() {

                document.querySelectorAll('[remover]').forEach(itemButton => 
                    itemButton.onclick = function() {
                        
                        itemButton.style.display = 'none'
        
                    })
            })
    }

}


function btnAddSave() {
    const titleTask = document.querySelector('#nameOfProdut').value; 
    let textDescrition = document.querySelector('#textDescrition').value; 

    if (titleTask === '' && textDescrition === '') {
        alert('Digite os dois campos para prosseguir...');
    } else if (titleTask === '' ) {
        alert('[Erro] - Titúlo não inserido!');

    } else if (textDescrition === '') {
        alert('[Erro] - Descrição não inserida!');

    } else {

        const instanciar = new List(titleTask, textDescrition); 

        instanciar.addList();
        instanciar.removeItemList();
    }
 

}