const triggers = document.querySelectorAll('.navbar-links > li');
const dropdownBg = document.querySelector('.dropdown-bg');
const nav = document.querySelector('.navbar');

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

function handleEnter () {
    // console.log('enter');
    this.classList.add('trigger-enter');
    // here this is inherited from the function, itself
    // if we use function() instead, it will change the definition of this to window
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) this.classList.add('trigger-enter-active')
    }, 150);
    dropdownBg.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.table(dropdownCoords);
    
    const coords = Object.freeze({
        HEIGHT: dropdownCoords.height,
        WIDTH: dropdownCoords.width,
        TOP: dropdownCoords.top - navCoords.top,
        LEFT: dropdownCoords.left - navCoords.left
    });

    dropdownBg.style.setProperty('height', `${coords.HEIGHT}px`);
    dropdownBg.style.setProperty('width', `${coords.WIDTH}px`);
    dropdownBg.style.setProperty('top', `${coords.TOP}px`);
    dropdownBg.style.setProperty('left', `${coords.LEFT}px`);
}

function handleLeave () {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBg.classList.remove('open');
}