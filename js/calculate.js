function calculation(a, b) {
    const vaule1 = document.getElementById(a);
    const value2 = document.getElementById(b);
    const field1text = vaule1.value;
    const field2text = value2.value;
    const field1Num = parseFloat(field1text);
    const field2Num = parseFloat(field2text);
    const fieldCalculate = field1Num * field2Num;
    return fieldCalculate;
};

document.getElementById('calculate1').addEventListener('click', function () {
    const area = 0.5 * calculation('field1', 'field11');
    const result = document.getElementById('result1');
    result.innerText = area;
});

document.getElementById('calculate2').addEventListener('click', function () {
    const area = calculation('field2', 'field22');
    const result = document.getElementById('result2');
    result.innerText = area;
});

document.getElementById('calculate3').addEventListener('click', function () {
    const area = calculation('field3', 'field33');
    const result = document.getElementById('result3');
    result.innerText = area;
});

document.getElementById('calculate4').addEventListener('click', function () {
    const area = 0.5 * calculation('field4', 'field44');
    const result = document.getElementById('result4');
    result.innerText = area;
});

document.getElementById('calculate5').addEventListener('click', function () {
    const area = 0.5 * calculation('field5', 'field55');
    const result = document.getElementById('result5');
    result.innerText = area;
});

document.getElementById('calculate6').addEventListener('click', function () {
    const area = 3.14159265359 * calculation('field6', 'field66');
    const result = document.getElementById('result6');
    result.innerText = area;
});