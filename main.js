document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            menu.classList.toggle('menu-open');
            caret.classList.toggle('caret-rotate');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const selectedText = option.innerText;
                selected.innerText = selectedText;
                menu.classList.remove('menu-open');
                caret.classList.remove('caret-rotate');
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
});

