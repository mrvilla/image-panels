/**
 * Created by enrique.cantillo on 18.08.17.
 */
const panels = document.querySelectorAll('.panel');
const panelState = [];

function updateState() {
    let currentPanel = this;
    panels.forEach((panel, i) => {
        if (currentPanel === panel) {
            panelState[i] = !panelState[i];
        } else {
            panelState[i] = 0;
        }
    });
    toggleState();
}
function toggleState() {
    panels.forEach((panel, i) => {
        panel.classList.toggle('open', panelState[i]);
    });
}
function openText(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('show-text');
    }
}
panels.forEach(panel => panel.addEventListener('click', updateState));
panels.forEach(panel => panel.addEventListener('transitionend', openText));
panels.forEach(function () {
    panelState.push(0);
});
