const form = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const formInfo = new FormData(form);
	console.log(formInfo);
	const res = await fetch('https://formspree.io/f/xeqnvvjb', {
		method: 'POST',
		body: formInfo,
		headers: {
			Accept: 'application/json',
		},
	});
	if (res.ok) {
		nombre.value = '';
		apellido.value = '';
		telefono.value = '';
		correo.value = '';
		mensaje.value = '';
		alert('El formulario se ha enviado correctamente');
	}
});
