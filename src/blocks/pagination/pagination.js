const pagination = document.querySelector('.pagination__buttons');

const paginationSettings = {
    pageCount: 15,
    cardsOnPage: 12,
    currentPage: 6,
    buttonsNumber: 6,
};

createPagination();

function pageLocation() {
    if (paginationSettings.currentPage <= 3) {
        console.log('start');
        return 'start';
    } else if (
        paginationSettings.currentPage >=
        paginationSettings.pageCount - 2
    ) {
        console.log('end');
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
            pages[i].classList.add('material-icons');
        }
    }
}

function addMiddlePagesContent(pages, buttonsNumber) {
    for (let i = 0; i < buttonsNumber; i++) {
        if (i === 0) {
            pages[i].textContent = 'arrow_back';
            pages[i].classList.add('material-icons');
        } else if (i === 2 || i === buttonsNumber - 3)
            pages[i].textContent = '...';
        else if (i === 3) pages[i].textContent = '1';
        // else if (i===buttonsNumber-2)/                                         i m here
    }
}
function addEndPagesContent(pages, buttonsNumber) {
    let currentPage = paginationSettings.pageCount - 2;
    for (let i = 0; i < buttonsNumber; i++) {
        if (i === 0) {
            pages[i].textContent = 'arrow_back';
            pages[i].classList.add('material-icons');
        } else if (i === 1) pages[i].textContent = '1';
        else if (i === 2) pages[i].textContent = '...';
        else {
            pages[i].textContent = currentPage;
            currentPage++;
        }
    }
}

function createPagination() {
    pageLocation() === 'middle'
        ? (buttonsNumber = paginationSettings.buttonsNumber + 3)
        : (buttonsNumber = paginationSettings.buttonsNumber);
    for (let i = 0; i < buttonsNumber; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__page');
        pagination.append(button);
    }
    const pages = document.querySelectorAll('.pagination__page');

    pageLocation() === 'start'
        ? addStartPagesContent(pages, buttonsNumber)
        : pageLocation() === 'end'
        ? addEndPagesContent(pages, buttonsNumber)
        : addMiddlePagesContent(pages, buttonsNumber);
    listenPagination(pages);
}

function listenPagination(pages) {
    pages.forEach((page) => {
        page.addEventListener('click', (event) => {
            if (page.classList.contains('pagination__page_active'))
                page.classList.remove('pagination__page_active');
            if (
                page.textContent != '...' &&
                page.textContent != 'arrow_forward'
            ) {
                paginationSettings.currentPage = page.textContent;
                paginationSettings.pageCount -
                    paginationSettings.currentPage +
                    1 >=
                paginationSettings.buttonsNumber
                    ? showPages(pages)
                    : showLastPages(pages);
            } else if (page.textContent === 'arrow_forward') {
                paginationSettings.currentPage += 1;
                paginationSettings.pageCount -
                    paginationSettings.currentPage +
                    1 >=
                paginationSettings.buttonsNumber
                    ? showPages(pages)
                    : showLastPages(pages);
            }
        });
    });
}

// function create_____Pagination() {
//     for (let i = 0; i < paginationSettings.buttonsNumber; i++) {
//         const button = document.createElement('button');
//         button.classList.add('pagination__page');
//         pagination.append(button);
//     }
//     const pages = document.querySelectorAll('.pagination__page');
//     paginationSettings.pageCount - paginationSettings.currentPage + 1 >=
//     paginationSettings.buttonsNumber
//         ? showPages(pages)
//         : showLastPages(pages);

//     // pages.forEach((page) => {
//     // if (page.classList.contains('pagination__page_active'))
//     //     page.classList.remove('pagination__page_active');
//     listenPagination(pages);
//     // });
// }

// function showPages(pages) {
//     let currentPage = paginationSettings.currentPage;
//     if (paginationSettings.pageCount -1 > currentPage > 3) {
//     }
// }

// function showPages(pages) {
//     let currentPage = paginationSettings.currentPage;
//     const buttonsNumber = paginationSettings.buttonsNumber;
//     pages[0].classList.add('pagination__page_active');
//     for (let i = 0; i < buttonsNumber; i++) {
//         i < buttonsNumber - 3
//             ? (pages[i].textContent = currentPage)
//             : i < buttonsNumber - 2
//             ? (pages[i].textContent = '...')
//             : i < buttonsNumber - 1
//             ? (pages[i].textContent = paginationSettings.pageCount)
//             : (pages[i].textContent = 'arrow_forward'),
//             pages[i].classList.add('material-icons');
//         currentPage++;
//     }
// }

// function showLastPages(pages) {
//     let currentPage =
//         paginationSettings.pageCount - paginationSettings.buttonsNumber + 2;
//     pages[0].classList.add('pagination__page_active');
//     for (let i = 0; i < paginationSettings.buttonsNumber; i++) {
//         i < buttonsNumber - 1
//             ? (pages[i].textContent = currentPage)
//             : (pages[i].textContent = 'arrow_forward'),
//             pages[i].classList.add('material-icons');
//         currentPage++;
//     }
// }

// // console.log('listenPagination');
// // page.addEventListener('click', (event) => {
// //     if (page.textContent != '...' && page.textContent != 'arrow_forward') {
// //         console.log('wbahf');
// //     } else if (page.textContent === 'arrow_forward') {

// //     }

// // if (page.textContent != '...' && page.textContent != 'arrow_forward') {
// //     console.log('first');

// //     page.classList.add('pagination__page_active');
// //     paginationSettings.currentPage = page.textContent;
// //     paginationSettings.pageCount - paginationSettings.currentPage + 1 >=
// //     paginationSettings.buttonsNumber
// //         ? showPages(pages)
// //         : showLastPages(pages);
// // } else if (page.textContent === 'arrow_forward') {
// //     paginationSettings.currentPage = [...pages.children].indexOf(
// //         event.target
// //     );
// // }

// // page.classList.add('.pagination__page_active');
// // paginationSettings.currentPage = page
// //     //[...pages.children].indexOf(            event.target
// // );

// // if (!rating.classList.contains('fixed')) {
// //     setRating(rating, [...rating.children].indexOf(event.target));
// // }
// //     });
// // }

// function addContent() {
//     // const button = document.createElement('button');
//     // button.classList.add('pagination__page', className);
//     // button.innerHTML = pageNumber;
//     // pagination.append(button);
// }
