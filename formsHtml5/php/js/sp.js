const botones = document.querySelector("#pbtn");
botones.addEventListener("click", mostrarDatos);


function mostrarDatos() {

    let dataEmail = document.getElementById('email');
    let dataPassword = document.getElementById('pws');

    const valueEmail = dataEmail.value;
    const passwordEmail = dataPassword.value;

    var metaEmail = dataEmail.dataset.email;
    var metaPassword = dataPassword.dataset.email;

    console.log(`Email Value: ${valueEmail}`);
    console.log(`Password Value: ${passwordEmail}`);
    console.log('--------------------------------------------------');
    console.warn(`Email meta: ${metaEmail}`);
    console.error(`Password meta: ${metaPassword}`);


    let item = document.querySelector('.ui.text.container .ui.segment');
    console.log(item);

    item.classList.add('basic');

}