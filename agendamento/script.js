document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const responseMessage = document.createElement('div');
    responseMessage.id = 'responseMessage';
    form.appendChild(responseMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação simples
        const nome = document.getElementById('Nome').value;
        const sobrenome = document.getElementById('Sobrenome').value;
        const email = document.getElementById('email').value;
        const telefone = document.querySelector('input[type="tel"]').value;
        const especie = document.getElementById('especie').value;

        if (!nome || !sobrenome || !email || !telefone || !especie) {
            responseMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            responseMessage.style.color = 'red';
            return;
        }

        // Se tudo estiver correto, simular um envio bem-sucedido
        responseMessage.textContent = 'Agendamento realizado com sucesso!';
        responseMessage.style.color = 'green';

 
    });
});
