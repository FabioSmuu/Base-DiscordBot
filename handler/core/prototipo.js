Array.prototype.rand = function(){
	return this[Math.floor(Math.random()*this.length)] || ''
}

Array.prototype.unique = function(){
	return this.filter((e, i) => this.indexOf(e) === i)
}

String.prototype.formal = function(){
	var palavra = this.toLowerCase().split(' ')
	
	palavra.map((letras, i) => {
		let inicial = letras[0]
		letras = (letras.length > 3) ? inicial.toUpperCase()+letras.slice(1) : inicial+letras.slice(1)
		palavra[i] = letras
		palavra[0][0] = palavra[0][0].toUpperCase()
	})

	return palavra.filter(e => e != 'undefined').join(' ')
}