document.addEventListener('DOMContentLoaded', () => {
    const allProjects = document.querySelectorAll('.project-box');
    const btnShowAll = document.getElementById('show-all');
    const btnShowFrontEnd = document.getElementById('show-front-end');
    const btnShowBackEnd = document.getElementById('show-back-end');
    const btnShowOtros = document.getElementById('show-otros');

    btnShowAll.addEventListener('click', () => {
        allProjects.forEach(p => p.style.display = 'block');
    });

    btnShowFrontEnd.addEventListener('click', () => {
        allProjects.forEach(p => {
            p.classList.contains('front-end') ? p.style.display = 'block' : p.style.display = 'none';
        });
    });

    btnShowBackEnd.addEventListener('click', () => {
        allProjects.forEach(p => {
            p.classList.contains('back-end') ? p.style.display = 'block' : p.style.display = 'none';
        });
    });

    btnShowOtros.addEventListener('click', () => {
        allProjects.forEach(p => {
            p.classList.contains('otros') ? p.style.display = 'block' : p.style.display = 'none';
        });
    }
    );
}
);
