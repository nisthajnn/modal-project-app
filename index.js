const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const openmodal=()=>
{
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}
const closemodal=()=>
{
    console.log("ye chl rha h");
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}