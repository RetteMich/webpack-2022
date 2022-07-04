var expanded = false;

const checkboxes = document.querySelectorAll('.overSelect');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        console.log('clclcl');
        if (checkbox.style.display == 'none') {
            checkbox.style.display = 'block';
            expanded = true;
        } else {
            checkbox.style.display = 'none';
            expanded = false;
        }
    });
});
