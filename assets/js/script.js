const btn = document.getElementById('btnEnviar');
        btn.addEventListener('click', () => {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            if (!email && !telefone) {
                alert('Por favor, preencha pelo menos o email ou o telefone.');
                return;
            }
            if (!email.includes('@')) {
                alert('Por favor, digite um email válido.');
                return;
            }
            if (!nome) {
                alert('Por favor, digite seu nome.');
                return;
            }
            alert(`Obrigado, ${nome}! Entrarei em contato em breve.`);
            window.location.href = "../index.html";
        });