document.addEventListener('DOMContentLoaded', function () {
  console.log("contentloaded");
    const sizeOptions = document.querySelectorAll('input[name="options[Size]"]');
    const button = document.querySelector('.add-to-cart-btn');
    const selectedOption = document.querySelector('input[name="options[Size]"]:checked');
    function optionChange() {
      
      if (selectedOption) {
        button.innerText = 'PREORDER';
        button.disabled = false;
      } else {
        button.innerText = 'Please select a size';
        button.disabled = true;
      }
    }

    sizeOptions.forEach(option => {
      option.addEventListener('change', optionChange);
    });

    button.addEventListener('click', function () {
      console.log("clicked");
      console.log(selectedOption);
      if (!document.querySelector('input[name="options[Size]"]:checked')) {
        button.innerText = 'Please select a size';
      }
    });

  });