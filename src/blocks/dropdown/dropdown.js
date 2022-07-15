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

function choiceWordForm(array, number) {
    const wordForms = [
        ['спальня', 'спальни', 'спален'],
        ['кровать', 'кровати', 'кроватей'],
        ['ванная комната', 'ванные комнаты', 'ванных комнат'],
        //guests: ['гость', 'гостя', 'гостей'],
    ];

    if (number > 10 && number < 20) return wordForms[array][2];
    else if (number % 10 > 1 && number % 10 < 5) return wordForms[array][1];
    else if (number % 10 == 1) return wordForms[array][0];
    return wordForms[array][2];
}

function showPlaceholder(dropdown) {
    let sum = 0;
    let placeholder = '';
    const showPlaceholder = dropdown.querySelector('.js-dropdown__placeholder');
    const dropdownCounters = dropdown.querySelectorAll('.js-dropdown__counter');
    let i = 0;
    dropdownCounters.forEach((dropdownCounter) => {
        const dropdownNumber = dropdownCounter.querySelector(
            '.js-dropdown__number'
        );
        sum += +dropdownNumber.textContent;
        if (+dropdownNumber.textContent > 0) {
            let word = choiceWordForm(i, +dropdownNumber.textContent);
            placeholder =
                placeholder + dropdownNumber.textContent + ' ' + word + ', ';
        }
        i++;
    });
    if (sum == 0) {
        showPlaceholder.textContent = 'Выберите удобства';
    } else {
        // if (placeholder.length > 20) {
        //     placeholder = placeholder.slice(0, 20);
        //     placeholder += '...';
        //     console.log(placeholder);
        // }
        //placeholder = placeholder.slice(0, -1);
        showPlaceholder.textContent = placeholder.slice(0, -2);
    }
}

let incrementCounter = (counter) => counter + 1;
let decrementCounter = (counter) => {
    if (counter != 0) return (counter -= 1);
    else return (counter = 0);
};
