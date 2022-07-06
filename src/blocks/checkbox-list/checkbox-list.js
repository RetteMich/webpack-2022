const checkboxListsRich = document.querySelectorAll('.js-checkbox-list-rich');

initializeDropdownCheckboxList();
initializeRichCheckboxList();

function initializeDropdownCheckboxList() {
    hideDropdownCheckboxList();
    const dropdownCheckboxLists = document.querySelectorAll(
        '.js-checkbox-list-dropdown'
    );
    dropdownCheckboxLists.forEach((dropdownCheckboxList) => {
        const dropdownMenus = dropdownCheckboxList.querySelectorAll(
            '.js-checkbox-list__menu'
        );
        dropdownMenus.forEach((dropdownMenu) => {
            dropdownCheckboxListClick(dropdownCheckboxList, dropdownMenu);
        });
    });
}

function initializeRichCheckboxList() {
    const richCheckboxLists = document.querySelectorAll(
        '.js-checkbox-list-rich'
    );
    richCheckboxLists.forEach((richCheckboxList) => {
        const richCheckboxTitles =
            richCheckboxList.querySelectorAll('.checkbox__title');
        const richCheckboxSubitles = richCheckboxList.querySelectorAll(
            '.checkbox__subtitle'
        );

        richCheckboxTitles.forEach((richCheckboxTitle) =>
            richCheckboxTitle.classList.add('checkbox__title_rich')
        );
        richCheckboxSubitles.forEach(
            (richCheckboxSubitle) =>
                (richCheckboxSubitle.style.display = ' inline')
        );
    });
}

function hideDropdownCheckboxList() {
    const checkboxLists = document.querySelectorAll('.js-checkbox-list__body');
    checkboxLists.forEach(
        (checkboxList) => (checkboxList.style.display = 'none')
    );
}

function dropdownCheckboxListClick(dropdownCheckboxList, dropdownMenu) {
    dropdownMenu.addEventListener('click', () => {
        const checkboxLists = dropdownCheckboxList.querySelectorAll(
            '.checkbox-list__body'
        );
        const arrow = dropdownMenu.querySelector('.js-checkbox-list__arrow');
        checkboxLists.forEach((checkboxList) => {
            if (checkboxList.style.display === 'none') {
                checkboxList.style.display = 'block';
                arrow.textContent = 'expand_less';
            } else {
                checkboxList.style.display = 'none';
                arrow.textContent = 'expand_more';
            }
        });
    });
}
