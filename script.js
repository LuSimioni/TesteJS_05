document.querySelector('#botao').addEventListener('click', function(){
	setTimeout(function(){
		const msg = document.querySelector('#mensagem').innerText
		console.log(msg)
	}, 6500)
});
 