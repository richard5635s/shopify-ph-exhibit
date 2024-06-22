document.addEventListener('DOMContentLoaded', function () {
    const sizeOptions = document.querySelectorAll('input[name="options[Size]"]');
    const button = document.getElementById('addToCartButton');

    function optionChange() {
      const selectedOption = document.querySelector('input[name="options[Size]"]:checked');
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
      if (!document.querySelector('input[name="options[Size]"]:checked')) {
        button.innerText = 'Please select a size';
      }
    });

  });