document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const radios = document.getElementsByName('rating');
    const main = document.querySelector('.flex');
    const popup = document.querySelector('.popup-card');
    const rating = document.querySelector('.selected-rating');

    let selectedValue = '0';
    

    for(var i =0;i <radios.length;i++){
        if(radios[i].checked){
            selectedValue = radios[i].value;
            break;
        }
    }

    main.style.display = 'none';
    rating.textContent = `You selected ${selectedValue} out of 5`;
    popup.style.display = 'flex';

})