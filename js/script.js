//Selecionando os elementos HTML que serão manipulados (DOM)
const footerLgpd = document.querySelector('#lgpd');
const btnLgpd = document.querySelector('#btn-lgpd');

const btnImc =  document.querySelector('#btn-imc');
const areaCalc = document.querySelector('#calculadora');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

const areaResult =  document.querySelector('#result');
const btnRefazer =  document.querySelector('#btn-refazer');


//console.log(footerLgpd);
//console.log(btnLgpd);

//Verificar se o usuário já clicou no botão para fechar o lgpd
if(localStorage.getItem('fechouLgpd') == 'sim'){
    footerLgpd.classList.add('d-none');
}

//() => arrow function
//ao clicar no botão
btnLgpd.addEventListener('click', ()=>{
    //alert('clicou');
    footerLgpd.classList.add('d-none');
    //footerLgpd.style.display = 'none';
    
    //guardar uma informação(chave) no navegador do usuário
                    //nome da chave, valor da chave
    localStorage.setItem('fechouLgpd','sim');
})


//Evento para clicar no botão de calcular IMC
btnImc.addEventListener('click', ()=>{
    
    //console.log(peso.value);    
    // != comparação (diferença)
    // == comparação (igualdade)
    // || ou
    // && e
    //Se os valores de peso e altura estiverem diferentes de vazio
    if(peso.value != '' && altura.value != ''){
        //fórmula do IMC = peso / (altura*altura)
        let imc = peso.value / (altura.value * altura.value);
        //alert(imc);
        const resultImc = document.querySelector('#result-imc');
        resultImc.innerHTML = imc.toFixed(2); //imprimindo o valor dentro do html com 2 casas decimais
        const resultClassificacao = document.querySelector('#result-classificacao');

        if(imc < 18.5){
            resultClassificacao.innerHTML = 'Magreza';
            resultClassificacao.style.color = '#FF1F00';
            resultImc.style.color = '#FF1F00';
        }

        else if(imc >= 18.5 && imc < 24.9){
            resultClassificacao.innerHTML = 'Normal';
            resultClassificacao.style.color = '#05FF00';
            resultImc.style.color = '#05FF00';
        }

        else if(imc >= 25 && imc < 29.9){
            resultClassificacao.innerHTML = 'Sobrepeso';
            resultClassificacao.style.color = '#FFC700';
            resultImc.style.color = '#FFC700';
        }

        else if(imc >= 30 && imc < 39.9){
            resultClassificacao.innerHTML = 'Obesidade';
            resultClassificacao.style.color = '#FF1F00';
            resultImc.style.color = '#FF1F00';
        }

        else{
            resultClassificacao.innerHTML = 'Obesidade Grave';
            resultClassificacao.style.color = '#DF0000';
            resultImc.style.color = '#DF0000';
        }

        areaCalc.classList.add('d-none'); //esconde o form
        areaResult.classList.remove('d-none'); //mostra o resultado
    }
    
    //caso contrário
    else{
        alert('Preencha todos os campos!');
    }

})


//Evento para clicar no botão de refazer
btnRefazer.addEventListener('click', ()=>{
    //alert('clicou');
    areaCalc.classList.remove('d-none'); //mostra o form
    areaResult.classList.add('d-none'); //esconde o resultado
})
