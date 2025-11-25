    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    const cursor = document.getElementById('cursor');


    document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    });


    const buttons = document.querySelectorAll('button, a');


    buttons.forEach(el => {
    el.addEventListener('mouseenter', () => {
    cursor.style.background = '#000';
    });
    el.addEventListener('mouseleave', () => {
    cursor.style.background = 'transparent';
    });
    });