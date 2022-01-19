const userInput = prompt('Введите температуру в градусах по Цельсию', 0);
const tC = Number(userInput);
if (isNaN(tC)) {
    alert('Вы ввели не число');
} else {
    const tF = (9 / 5) * tC + 32;
    alert(tF);
}
