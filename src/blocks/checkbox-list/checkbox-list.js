const checkboxLists = document.querySelectorAll('.checkbox-list');
const checkboxes = document.querySelectorAll('.checkbox-list__body');

checkboxes.forEach((checkbox) => (checkbox.style.display = 'none'));

checkboxLists.forEach((checkboxList) => {
    const menus = checkboxList.querySelectorAll('.checkbox-list__menu');

    menus.forEach((menu) => {
        menu.addEventListener('click', () => {
            const checkboxes = checkboxList.querySelectorAll(
                '.checkbox-list__body'
            );

            const arrow = menu.querySelector('.checkbox-list__arrow');
            checkboxes.forEach((checkbox) => {
                if (checkbox.style.display === 'none') {
                    checkbox.style.display = 'block';
                    arrow.textContent = 'expand_less';
                } else {
                    checkbox.style.display = 'none';
                    arrow.textContent = 'expand_more';
                }
            });
        });
    });
});
