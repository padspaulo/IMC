(function meuResultado(){
    
    let form = document.querySelector('.form')

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let peso = document.querySelector('.peso')
        let altura = document.querySelector('.altura')

        //console.log(peso.value, altura.value)

        peso = peso.value;
        altura = altura.value;

        let resultadoFinal = (peso / ( altura * altura))

        let resultado = document.querySelector('.resultado')
        console.log(resultadoFinal)

        let texto = condicao(resultadoFinal)

        resultado.innerHTML = `<div class="res">O seu imc é: ${resultadoFinal.toFixed(4)}</div>
                                <div class="res">${texto}</div>`;

        /*const obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        }

        pessoas.push(obj)
        console.log(pessoas[0].nome)
        resultado.innerHTML += `<p style="color:red;">${pessoas[0].nome}, ${pessoas[0].sobrenome}, ${pessoas[0].peso}, ${pessoas[0].altura}</p>`*/
    })

    function condicao(resultadoFinal){

        let resTexto = '';
        let texto = [
            'Abaixo do peso',
            'Peso normal',
            'Sobrepeso','Obesidade grau 1',
            'Obesidade grau 2',
            'Obesidade grau 3',
            'Dados Inválidos'
        ];
        if(resultadoFinal <= 18.5){
            resTexto = texto[0]
            
        }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9){
            resTexto = texto[1]
            
        }else if(resultadoFinal >= 24.9 && resultadoFinal <= 29.9){
            resTexto = texto[2]
            
        }else if(resultadoFinal >= 30 && resultadoFinal <= 34.9){
            resTexto = texto[3]
            
        }else if(resultadoFinal >= 35 && resultadoFinal <= 39.9){
            resTexto = texto[4]
            
        }else if(resultadoFinal >= 40){
            resTexto = texto[5]
            
        }else if(resultadoFinal != Number){
            resTexto = texto[6]
        }

        return resTexto;
    }

})()

