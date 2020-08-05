// Procura o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botão

// Executar uma acao
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })


    
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}