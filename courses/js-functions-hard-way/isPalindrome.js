// Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. 
// Например: радар, топот.
// Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.
// Примеры использования:
// import isPalindrome from './isPalindrome';
// isPalindrome('radar'); // true
// isPalindrome('a');     // true
// isPalindrome('abs');   // false
// Один из способ реализовать эту функцию — попарно сравнить буквы, 
// стоящие зеркально относительно центра. 
// Если они совпадают, то перед нами палиндром.
// Алгоритм
// Если строка короче двух символов, то считается, что это палиндром.
// Проверяем, совпадают ли первый и последний символы. 
// Если нет, то это не палиндром. 
// Если совпадают, то вызываем функцию рекурсивно, 
// передавая внутрь строку минус первый и последний символ.
// Разбор на примере: radar (палиндром)
// Первый и последний символ r. Так как символы совпали, 
// вызываем isPalindrome рекурсивно. Дальше передаем ada
// Первый и последний символ a. Так как символы совпали, 
// вызываем isPalindrome рекурсивно. Дальше передаем d
// Так как длина строки d меньше двух символов, возвращаем true
// Разбор на примере: rador (не палиндром)
// Первый и последний символ r. Так как символы совпали, 
// вызываем isPalindrome рекурсивно. Дальше передаем ado
// Первый символ a и последний символ o. 
// Так как символы не совпали, возвращаем false
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'hello'.length; // 5
// Чтобы получить подстроку из строки, используйте метод substring:
// 'hello'.substring(0, 4); // "hell"
// 'hello'.substring(1, 3); // "el"


const isPalindrome = (word) => {
    if (word.length === 1) {
        return true;
    }
    if (word.length === 2) {
        if (word[0] === word[1]) {
            return true;
        }
    }
    if (word[0] === word[word.length-1]) {
        return isPalindrome(word.substring(1, word.length - 1))
    } else {
        return false;
    }
}

console.log(isPalindrome('a'));
console.log(isPalindrome('aa'));
console.log(isPalindrome('404'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('absba'));
console.log(isPalindrome('aibohphobia'));

console.log(isPalindrome('abaoba'));
console.log(isPalindrome('aashgkhdj'));
console.log(isPalindrome('palindrome'));
console.log(isPalindrome('aibohapohobia'));