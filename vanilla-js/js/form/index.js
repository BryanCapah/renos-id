
const formContainer = document.getElementById('form-container')
formContainer.innerHTML += `<form action="javascript:void(0);" class="form">
<input placeholder='insert modal header text' class='input-text' id='input-header' />
<textarea placeholder='insert modal body text' class='input-text' id='input-body'></textarea>
<input placeholder='insert modal footer text' class='input-text' id='input-footer' />
<button id="btn-modal" class="button">open modal</button>
</form>`