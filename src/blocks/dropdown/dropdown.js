// class Dropdown {
//     constructor(type) {
//         this.type = type;
//     }

// }

// let dropdown = new Dropdown('guests');
// dropdown.initializeDropdown();

initializeDropdown();

function initializeDropdown() {
    hideDropdown();
    const dropdowns = document.querySelectorAll('.js-dropdown');
    dropdowns.forEach((dropdown) => {
        const dropdownMenus = dropdown.querySelectorAll('.js-dropdown__menu');
        dropdownMenus.forEach((dropdownMenu) => {
            dropdownClick(dropdown, dropdownMenu);
        });
        const dropdownCounters = dropdown.querySelectorAll(
            '.js-dropdown__counter'
        );

        dropdownCounters.forEach((dropdownCounter) => {
            buttonClick(dropdown, dropdownCounter);
        });
    });
}

function buttonClick(dropdown, dropdownCounter) {
    const dropdownButtons = dropdownCounter.querySelectorAll(
        '.js-dropdown__button'
    );
    const dropdownNumber = dropdownCounter.querySelector(
        '.js-dropdown__number'
    );
    dropdownButtons.forEach((dropdownButton) => {
        dropdownButton.addEventListener('click', () => {
            dropdownButton.textContent === '+'
                ? (dropdownNumber.textContent = incrementCounter(
                      +dropdownNumber.textContent
                  ))
                : (dropdownNumber.textContent = decrementCounter(
                      +dropdownNumber.textContent
                  ));
            showPlaceholder(dropdown);
        });
    });
}

function hideDropdown() {
    const dropdownLists = document.querySelectorAll('.js-dropdown__body');
    dropdownLists.forEach(
        (dropdownList) => (dropdownList.style.display = 'none')
    );
}

function dropdownClick(dropdown, dropdownMenu) {
    dropdownMenu.addEventListener('click', () => {
        const dropdownLists = dropdown.querySelectorAll('.js-dropdown__body');
        dropdownLists.forEach((dropdownList) => {
            dropdownList.style.display === 'none'
                ? (dropdownList.style.display = 'block')
                : (dropdownList.style.display = 'none');
        });
    });
}

function choiceWordForm() {
    const wordForms = {
        bedroom: ['спальня', 'спальни', 'спален'],
        bed: ['кровать', 'кровати', 'кроватей'],
        bathroom: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
        guests: ['гость', 'гостя', 'гостей'],
    };
}

function showPlaceholder(dropdown) {
    let sum = 0;
    const showPlaceholder = dropdown.querySelector('.js-dropdown__placeholder');
    const dropdownCounters = dropdown.querySelectorAll('.js-dropdown__counter');

    dropdownCounters.forEach((dropdownCounter) => {
        const dropdownNumber = dropdownCounter.querySelector(
            '.js-dropdown__number'
        );
        console.log(dropdownNumber.textContent);
        sum += +dropdownNumber.textContent;
    });
    console.log(sum);
    if (sum == 0) {
        showPlaceholder.textContent = 'Выберите удобства';
    } else {
        showPlaceholder.textContent = '<KF<FKFKFKKF>';
    }
}

let incrementCounter = (counter) => counter + 1;
let decrementCounter = (counter) => {
    if (counter != 0) return (counter -= 1);
    else return (counter = 0);
};
