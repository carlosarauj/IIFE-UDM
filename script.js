//IIFE

(function (idade, peso, altura){
    let sobrenome = 'araujo'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Carlos'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(20, 80, 1.76)