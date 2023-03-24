const genarate = () => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color.innerHTML = "#" + randomColor;
    document.body.style.background = "#" + randomColor;
}
