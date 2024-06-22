document.addEventListener('DOMContentLoaded', function () {
  console.log("contentloaded");
  
  const sizeOptions = document.querySelectorAll('input[name="options[Size]"]');
  const button = document.querySelector('.add-to-cart-btn');

  function optionChange() {
    const selectedOption = document.querySelector('input[name="options[Size]"]:checked');
    
    if (selectedOption) {
      button.innerText = button.dataset.text;
      button.disabled = false;
    } else {
      button.innerText = 'PLEASE SELECT SIZE';
      button.disabled = true;
    }
  }

  sizeOptions.forEach(option => {
    option.addEventListener('change', optionChange);
  });

  button.addEventListener('click', function (event) {
    console.log("clicked");
    const selectedOption = document.querySelector('input[name="options[Size]"]:checked');
    console.log(selectedOption);
    if (sizeOptions){
    if (!selectedOption) {
      event.preventDefault();
      button.querySelector('div > span').innerText = 'PLEASE SELECT SIZE';
    }
    }
  });


});
