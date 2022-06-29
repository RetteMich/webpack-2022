const pagination = document.querySelector('.pagination__buttons');
const paginationCounter = document.querySelector('.pagination__counter');

const paginationSettings = {
    pageCount: 15,
    cardsOnPage: 12,
    currentPage: 1,
    buttonsNumber: 6,
};

createPagination();

function pageLocation(currentPage) {
    if (currentPage <= 3) {
        return 'start';
    } else if (currentPage >= paginationSettings.pageCount - 2) {
        return 'end';
    } else return 'middle';
}

function addStartPagesContent(pages, buttonsNumber) {
    for (let i = 0; i < buttonsNumber; i++) {
        if (i < buttonsNumber - 3) pages[i].textContent = i + 1;
        else if (i < buttonsNumber - 2) pages[i].textContent = '...';
        else if (i < buttonsNumber - 1)
            pages[i].textContent = paginationSettings.pageCount;
        else {
            pages[i].textContent = 'arrow_forward';
            pages[i].classList.add(
                'material-icons',
                'pagination__button_arrow'
            );
        }
        if (pages[i].textContent == paginationSettings.currentPage)
            pages[i].classList.add('pagination__button_active');
    }
}

function addMiddlePagesContent(pages, buttonsNumber) {
    let currentPage = paginationSettings.currentPage;
    console.log(currentPage);
    console.log(paginationSettings.currentPage);
    if (pageLocation(currentPage + 1) === 'end') {
        currentPage = currentPage - 2;
    } else if (pageLocation(currentPage) === 'middle') {
        currentPage = currentPage - 1;
    }
    for (let i = 0; i < buttonsNumber; i++) {
        if (i === 0) {
            pages[i].textContent = 'arrow_back';
            pages[i].classList.add(
                'material-icons',
                'pagination__button_arrow'
            );
        } else if (i === 1) {
            pages[i].textContent = '1';
        } else if (i === 2 || i === buttonsNumber - 3) {
            pages[i].textContent = '...';
        } else if (i === buttonsNumber - 2) {
            pages[i].textContent = paginationSettings.pageCount;
        } else if (i === buttonsNumber - 1) {
            pages[i].textContent = 'arrow_forward';
            pages[i].classList.add(
                'material-icons',
                'pagination__button_arrow'
            );
        } else {
            pages[i].textContent = currentPage;
            currentPage++;
        }
        if (pages[i].textContent == paginationSettings.currentPage)
            pages[i].classList.add('pagination__button_active');
    }
}
function addEndPagesContent(pages, buttonsNumber) {
    let currentPage = paginationSettings.pageCount - 2;
    for (let i = 0; i < buttonsNumber; i++) {
        if (i === 0) {
            pages[i].textContent = 'arrow_back';
            pages[i].classList.add(
                'material-icons',
                'pagination__button_arrow'
            );
        } else if (i === 1) pages[i].textContent = '1';
        else if (i === 2) pages[i].textContent = '...';
        else {
            pages[i].textContent = currentPage;
            currentPage++;
        }
        if (pages[i].textContent == paginationSettings.currentPage)
            pages[i].classList.add('pagination__button_active');
    }
}

function createPagination() {
    while (pagination.hasChildNodes()) {
        pagination.removeChild(pagination.lastChild);
    }
    calculateNumberOfCards();

    const currentPage = paginationSettings.currentPage;
    pageLocation(currentPage) === 'middle'
        ? (buttonsNumber = paginationSettings.buttonsNumber + 3)
        : (buttonsNumber = paginationSettings.buttonsNumber);
    for (let i = 0; i < buttonsNumber; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__button');
        pagination.append(button);
    }
    const pages = document.querySelectorAll('.pagination__button');

    pageLocation(currentPage) === 'start'
        ? addStartPagesContent(pages, buttonsNumber)
        : pageLocation(currentPage) === 'end'
        ? addEndPagesContent(pages, buttonsNumber)
        : addMiddlePagesContent(pages, buttonsNumber);

    listenPagination(pages);
}

function listenPagination(pages) {
    pages.forEach((page) => {
        page.addEventListener('click', (event) => {
            if (
                page.textContent != '...' &&
                page.textContent != 'arrow_forward' &&
                page.textContent != 'arrow_back'
            ) {
                paginationSettings.currentPage = +page.textContent;
            } else if (page.textContent == 'arrow_forward') {
                paginationSettings.currentPage++;
            } else {
                paginationSettings.currentPage--;
            }
            createPagination();
        });
    });
}

function calculateNumberOfCards() {
    let firstOfRange =
        (paginationSettings.currentPage - 1) * paginationSettings.cardsOnPage +
        1;
    let lastOfRange =
        paginationSettings.currentPage * paginationSettings.cardsOnPage;
    let total = paginationSettings.cardsOnPage * paginationSettings.pageCount;
    if (total > 100) total = 100;
    displayNumberOfCards(firstOfRange, lastOfRange, total);
}

function displayNumberOfCards(firstOfRange, lastOfRange, total) {
    const paginationCounter = document.querySelector('.pagination__counter');
    paginationCounter.textContent = `${firstOfRange} – ${lastOfRange} из ${total}+ вариантов аренды`;
}
