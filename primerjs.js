function capturarInformacion() {
    // Obtener el valor del campo de correo electrónico
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value;
  
    // Guardar el valor en una variable y mostrarla en un alert
    alert(`El valor del campo de correo electrónico es: ${emailValue}`);
  
    // Capturar información con prompt y mostrarla en el campo de texto
    const capturedValue = prompt("Ingresa la información que deseas capturar:");
    const capturedValueInput = document.getElementById("capturedValue");
    capturedValueInput.value = capturedValue;
  }
