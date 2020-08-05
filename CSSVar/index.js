const controls = document.querySelectorAll(".controls input");

function handleChangeValue() {
    // dataset is an object of properties declared in an element by appending 'data-' to it
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

controls.forEach(control => control.addEventListener('input', handleChangeValue));