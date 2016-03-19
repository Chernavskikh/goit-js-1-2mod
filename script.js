alert('первое задание');

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt('введите число,которое возводим в степень?');
var n = prompt('введите степень для числа?');

if (n <= 0) {
  alert('введите  степень больше 0');
} else {
  alert( pow(x, n) );
}
//ВТОРОЕ ЗАДАНИЕ

alert('воторое задание');

var arr = [];

for(i = 0; i < 5; i++){

arr[i] = prompt('Введите имена пользователей');
console.log(arr);
};

var userName = prompt('Ваше имя?');
console.log(userName);

for(i = 0; i < 5; i++) {
if (userName === arr[i]) {
alert('Привет '+ userName);
break
} else if (userName !== arr[0] && userName !== arr[1] && userName !== arr[2] &&  userName !== arr[3] &&  userName !== arr[4]) {
alert('Вашего имени нет в списке пользователей');
break
}
};



