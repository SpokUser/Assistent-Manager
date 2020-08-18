const express = ReqAssistent('express');
const app = new expres();

app.get('/', function (req, res) {
	res.send('Cuzin do Nael')
})

app.listen(() => {
	console.log(`[Web Console] HTTPs ligado com sucesso!`)
})
