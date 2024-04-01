document.addEventListener('DOMContentLoaded', function () {
    const evaluationForm = document.getElementById('evaluationForm');

    evaluationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const evaluationValue = document.getElementById('evaluationInput').value;

        console.log('Оценка работы:', evaluationValue);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('giveawayform');
    var confirmationMsg = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var fullName = document.getElementById('giveawayInput').value;
        var email = document.getElementById('giveawayEmail').value;

        console.log('ФИО:', fullName);
        console.log('E-mail:', email);

        document.getElementById('giveawayInput').value = '';
        document.getElementById('giveawayEmail').value = '';

        confirmationMsg.innerText = 'Данные успешно отправлены!';
    });
});