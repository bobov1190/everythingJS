/* 
Задание #1

Необходимо создать 3 переменных:var a, let b, const c и присвоить
им значения 5, 10, 13 соответственно.

Выведите все три переменные с помощью console.log().

После вывода присвойте переменным a, b и с новые значения, затем выведите их в консоль и посмотрите, что получилось. В случае возникновения ошибок удалить “проблемное” выражение.

*/

/* 
Решение #1

let a = 5
let b = 10
const c = 13

console.log(a, b, c)

a = 6
b = 11
// c = 14 // проблемное выражение

console.log(a, b)

*/

/*
Задание и Решение #2

Последовательно запустите следующие фрагменты кода и посмотрите,
что получилось:

Определите для себя, почему в этих трех случаях произошел тот или иной результат выполнения.

const a = 100
a = 20 // константу нельзя переопределять
console.log(a)

console.log(a) // нужно сначала проинициализировать
let a = 15
console.log(a)

console.log(a)
var a
a = 10
console.log(a)
// Такое поведение называется "поднятием" (в некоторых источниках "всплытием") 
// Важно отметить, что подъем будет влиять на объявление переменной, но не на инициализацию её значения. Значение присваивается при выполнении оператора присваивания

*/

/* 
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”.

*/

/* 
Решение #3

let productName = 'молоко'
let productPrice = 100
let productQuantity = 10
let resultCost = productPrice * productQuantity

console.log(
	`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
)
	
*/

/*
Задание #4

// Выведите в консоль следующие выражения:

// typeof 'Hello'
// typeof 10
// typeof {}
// typeof null
// typeof undefined
// typeof true
// typeof []
// typeof (() => {}
// Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.

*/

/*
Решение #4

console.log(typeof 'Hello')
console.log(typeof 10)
console.log(typeof {})
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof [])
console.log(typeof (() => {}))

*/

/* 
Задание #5

Выведите в консоль следующие выражения:

10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
Сравнение по ссылке:

const a = {};
const b = a;
console.log(a === b);

Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.

*/

/*
Решение #5


const a = {}
const b = a
console.log(10 == 10)
console.log(10 != 10)
console.log(12 == 'Привет')
console.log(10 < 11)
console.log(12 > 20)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false || true)
console.log(true || false)
console.log(true || true)
console.log(10 <= 10)
console.log(18 <= 20)
console.log(50 >= 50)
console.log(51 >= 50)
console.log(a === b)
console.log({} == {})

*/

/*
Задание #6

Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false.

P. S. Нельзя использовать if...else и тернарный оператор

*/

/*
Решение #6

let a = 3
let b = 4

console.log(a > b)

*/
