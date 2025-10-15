function main() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const erro = document.querySelector('.erro');

    function submitForm(event) {
        event.preventDefault();
        result.innerHTML = "";
        erro.innerHTML = "";
        red_flag = false;

        // const peso = parseFloat(form.querySelector('.peso'));
        // const altura = parseFloat(form.querySelector('.altura'));
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const result_calc = peso / (altura**2);
        let output;

        if (result_calc <= 18.5){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Abaixo do Peso)`;
        }else if (result_calc >= 18.5 && result_calc <= 24.9){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Peso normal)`;
        }else if (result_calc >= 25 && result_calc <= 29.9){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Sobrepeso)`;
        }else if (result_calc >= 30 && result_calc <= 34.9){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Obesidade grau 1)`;
        }else if (result_calc >= 35 && result_calc <= 39.9){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Obesidade grau 2)`;
        }else if (result_calc > 40){
            output = `Seu IMC é ${result_calc.toFixed(2)} (Obesidade grau 3)`;
        }else{
            output = 'Peso inválido';
            red_flag = true;
            // result.style.backgroundColor = "red";
        }

        // const output = `Seu IMC é ${result_calc} ${imc}`;
        if (red_flag){
            erro.innerHTML = output;
        }else{
            result.innerHTML = output;
        }

    }
    form.addEventListener('submit', submitForm);

}
main();