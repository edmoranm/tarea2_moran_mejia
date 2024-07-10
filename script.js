document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dynamic-form');
    const inputContainer = document.getElementById('input-container');
    const addInputButton = document.getElementById('add-input');
    const removeInputButton = document.getElementById('remove-input');
  
    let inputCount = 0;
  
    function createNewInput() {
      inputCount++;
      const newInput = document.createElement('input');
      newInput.setAttribute('type', 'text');
      newInput.setAttribute('name', `input-${inputCount}`);
      newInput.setAttribute('placeholder', `Input ${inputCount}`);
      inputContainer.appendChild(newInput);
    }
  
    function removeLastInput() {
      const inputs = inputContainer.querySelectorAll('input');
      if (inputs.length > 0) {
        inputContainer.removeChild(inputs[inputs.length - 1]);
      }
    }
  
    addInputButton.addEventListener('click', createNewInput);
  
    removeInputButton.addEventListener('click', removeLastInput);
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const inputs = inputContainer.querySelectorAll('input');
      let allFilled = true;
  
      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          input.classList.add('error');
          allFilled = false;
        } else {
          input.classList.remove('error');
        }
      });
  
      if (allFilled) {
        alert('Formulario enviado correctamente!');
        form.reset(); 
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  });
  