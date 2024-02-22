function openCloseMenu() {
    let menu = document.getElementById('menu');

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    document.body.addEventListener("pointermove", (e) => {
        const { currentTarget: el, clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX', x - l - w / 2);
        el.style.setProperty('--posY', y - t - h / 2);
    })
}

window.onload=function ucitaj(){
    document.body.addEventListener("pointermove", (e)=>{
        const{currentTarget: el, clientX: x, clientY: y}=e;
        const{top: t, left: l, width: w, height:h}=el.getBoundingClientRect();
        el.style.setProperty("--posX", x-l-w/2);
        el.style.setProperty("--posY", y-t-h/2);
    });
}
