    document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('input').forEach(function(input) {
        input.value = '';
      });
      alert('Salvo com sucesso!');
    });