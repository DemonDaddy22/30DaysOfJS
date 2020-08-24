const links = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

links.forEach(link => link.addEventListener('mouseenter', highlightLink));

function highlightLink() {
    const linkCoordinates = this.getBoundingClientRect(); // gives complete dimensional information of an element
    const coords = {
        width: linkCoordinates.width,
        height: linkCoordinates.height,
        left: linkCoordinates.left + window.scrollX,
        top: linkCoordinates.top + window.scrollY
    };

    highlight.style.width = `${coords.width + 6}px`;
    highlight.style.height = `${coords.height + 6}px`;
    highlight.style.transform = `translate(${coords.left - 3}px, ${coords.top - 3}px)`;
}