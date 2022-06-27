const paginationSettings = {
    pageCount: 15,
    cardsOnPage: 12,
    currentPage: 1,
    buttonsNumber: 6,
};

const pagination = document.querySelector('.pagination__buttons');
createPagination(pagination);

function showLastPages() {
    
}

function showPages() {
    let currentPage = paginationSettings.currentPage;
    for (let i = 0; i < paginationSettings.buttonsNumber - 1; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__page');
        if (i < paginationSettings.buttonsNumber - 3) {
            button.innerHTML = currentPage;
            currentPage++;
        }
        else if (i < paginationSettings.buttonsNumber - 2)
            button.innerHTML = '...';
        else if (i < paginationSettings.buttonsNumber - 1)
            button.innerHTML = paginationSettings.pageCount;
        else {
            button.innerHTML = currentPage;
            currentPage++;

        }
        pagination.append(button);
    }
}


function createPagination(pagination) {

    if ((paginationSettings.currentPage < paginationSettings.pageCount -
        paginationSettings.buttonsNumber)) showPages();
    else showLastPages()


    // for (let i = 0; i < paginationSettings.buttonsNumber - 1; i++) {
    //     const button = document.createElement('button');
    //     button.classList.add('pagination__page');
    //     if (
    //         paginationSettings.pageCount - currentPage <=
    //         paginationSettings.buttonsNumber - 2
    //     )
    //         lastPages = true;
    //     while (!lastPages)
        // if (
        //     currentPage >=
        //     paginationSettings.pageCount -
        //         paginationSettings.buttonsNumber +
        //         1
        // ) {
        //     button.innerHTML = currentPage;
        //     currentPage++;
        // } else {
        //     if (i < paginationSettings.buttonsNumber - 3) {
        //         button.innerHTML = currentPage;
        //         currentPage++;
        //     } else if (i < paginationSettings.buttonsNumber - 2)
        //         button.innerHTML = '...';
        //     else if (i < paginationSettings.buttonsNumber - 1)
        //         button.innerHTML = paginationSettings.pageCount;
        // }
        // //         else {
        // //     button.classList.add('material-icons');
        // //     button.innerHTML = 'arrow_forward';
        // // }
        // pagination.append(button);
    }
}
