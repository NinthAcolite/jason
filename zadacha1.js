// Заданное значение переменной word
const word = 'Арнольд';

// Инициализируем пустую строку для хранения результата
let newWord = '';

// Итерируемся по каждому символу в строке
for (const char of word) {
    // Проверяем, что символ не является "а" или "о" (без учета регистра)
    if (!['а', 'о'].includes(char.toLowerCase())) {
        // Добавляем символ к новой строке
        newWord += char;
    }
}

// Выводим результат
console.log(newWord);
