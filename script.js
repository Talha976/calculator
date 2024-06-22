
function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    expression = expression.replace(/x/g, '*');
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}


function deleteLast() {
    let expression = document.getElementById('result').value;
    expression = expression.slice(0, -1);
    document.getElementById('result').value = expression;
}

