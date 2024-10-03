document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
});
