function addition() {
        var answer = num_1 + num_2;
        var user_answer = document.getElementById('res').value;

        if (user_answer == answer) {
                alert("You entered right answer 😀.");
        }
        else {
                alert('You entered wrong answer 😓. Correct answer is ' + answer + '.');
        }
}