// var  usertag = "";
// var  usergem = "";
// $(document).ready(function($) {
//   $("#Tag").change( function () {
//     var msg = $(this).val();
//     usertag = msg;
// });
//   var complete = true;
//   $('#receive').click(function() {
//     usergem = "";
//     $('form input').each(function() {
//       if (!$(this).val()) {
//         $(".allerts").append('<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Предуприждение!</strong> Заполните все поля.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
//         // console.log(complete);
//         complete = false;
//       }
//       if (complete === true) {
//         $(".allerts").hide();
//         $('.vvod').hide(400);
//         $('.block').show(400);
//         test();
//       }
//     });
//   });

//   //  var progresselem = $(".progressbar");
//   //  var interval = setInterval(function(){
//   //     progresselem.style.width = progresselem.offsetWidth+1+"%";
//   // },50);
//   var X00Processes = [
//   { X00Percent: 2, X00Text: 'Инициализация. Анализ данных......' },
//   { X00Percent: 3, X00Text: 'Подключение к серверу BRAWL STARS.' },
//   { X00Percent: 4, X00Text: 'Подключение к серверу BRAWL STARS..' },
//   { X00Percent: 5, X00Text: 'Подключение к серверу BRAWL STARS...' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS.' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS..' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS...' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS.' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS..' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS...' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS.' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS..' },
//   { X00Percent: 6, X00Text: 'Подключение к серверу BRAWL STARS...' },
//   { X00Percent: 10, X00Text: 'Идет подключение к списку ГОЛДЫ.' },
//   { X00Percent: 12, X00Text: 'Идет подключение к списку ГОЛДЫ..' },
//   { X00Percent: 10, X00Text: 'Идет подключение к списку ГОЛДЫ.' },
//   { X00Percent: 12, X00Text: 'Идет подключение к списку ГОЛДЫ..' },
//   { X00Percent: 14, X00Text: 'Establishing connection...' },
//   { X00Percent: 16, X00Text: 'Connection successful on port 87118' },
//   { X00Percent: 18, X00Text: 'Connection successful on port 87118.' },
//   { X00Percent: 18, X00Text: 'Connection successful on port 87118..' },
//   { X00Percent: 18, X00Text: 'Connection successful on port 87118...' },
//   { X00Percent: 18, X00Text: 'Connection successful on port 87118....' },
//   { X00Percent: 18, X00Text: 'Connection successful on port 87118.....' },
//   { X00Percent: 18, X00Text: 'Injected data' },
//   { X00Percent: 18, X00Text: 'Injected data.' },
//   { X00Percent: 18, X00Text: 'Injected data..' },
//   { X00Percent: 18, X00Text: 'Injected data...' },
//   { X00Percent: 18, X00Text: 'Injected data....' },
//   { X00Percent: 18, X00Text: 'Injected data.....' },
//   { X00Percent: 18, X00Text: 'Injected data......' },
//   { X00Percent: 18, X00Text: 'Injected data.......' },
//   { X00Percent: 18, X00Text: 'Injected data........' },
//   { X00Percent: 18, X00Text: 'Injected data.........' },
//   { X00Percent: 18, X00Text: 'Injected data..........' },
//   { X00Percent: 18, X00Text: 'Injected data...........' },
//   { X00Percent: 18, X00Text: 'Injected data............' },
//   { X00Percent: 18, X00Text: 'Injected data.............' },
//   { X00Percent: 18, X00Text: 'Injected data...............' },
//   { X00Percent: 18, X00Text: 'Injected data................' },
//   { X00Percent: 32, X00Text: 'Extracting data' },
//   { X00Percent: 32, X00Text: 'Extracting data.' },
//   { X00Percent: 32, X00Text: 'Extracting data..' },
//   { X00Percent: 32, X00Text: 'Extracting data...' },
//   { X00Percent: 40, X00Text: 'Calculating GEMS values...' },
//   { X00Percent: 42, X00Text: 'GEMS Check...' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 0%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 2%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 7%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 12%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 15' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 24%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 28%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 28%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 28%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 30%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 47%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 51%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 62%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 79%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 80%' },
//   { X00Percent: 44, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 89%' },
//   { X00Percent: 45, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 95%' },
//   { X00Percent: 46, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 99%' },
//   { X00Percent: 47, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 99%' },
//   { X00Percent: 48, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 99%' },
//   { X00Percent: 49, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 50, X00Text: 'ИЩИМ ВАШ АККАУНТ .. 100%' },
//   { X00Percent: 62, X00Text: 'АККАУНТ найден!' },
//   { X00Percent: 62, X00Text: 'АККАУНТ найден!.' },
//   { X00Percent: 62, X00Text: 'АККАУНТ найден!..' },
//   { X00Percent: 62, X00Text: 'АККАУНТ найден!...' },
//   { X00Percent: 62, X00Text: 'АККАУНТ найден!... done!' },
//   { X00Percent: 72, X00Text: 'Расшифровка. Сериализация данных...' },
//   { X00Percent: 74, X00Text: 'Формирование данных' },
//   { X00Percent: 74, X00Text: 'Формирование данных.' },
//   { X00Percent: 74, X00Text: 'Формирование данных..' },
//   { X00Percent: 74, X00Text: 'Формирование данных...' },
//   { X00Percent: 74, X00Text: 'Формирование данных... done!' },
//   { X00Percent: 84, X00Text: 'Расшифровка. Сериализация данных' },
//   { X00Percent: 84, X00Text: 'Расшифровка. Сериализация данных.' },
//   { X00Percent: 84, X00Text: 'Расшифровка. Сериализация данных..' },
//   { X00Percent: 84, X00Text: 'Расшифровка. Сериализация данных...' },
//   { X00Percent: 84, X00Text: 'Расшифровка. Сериализация данных... done!' }, 
//   { X00Percent: 94, X00Text: '100% done!' },
//   { X00Percent: 96, X00Text: 'Отправка ГОЛДЫ - 10 ' },
//   { X00Percent: 96, X00Text: 'Отправка ГОЛДЫ - 20' },
//   { X00Percent: 96, X00Text: 'Отправка ГОЛДЫ - 40' },
//   { X00Percent: 98, X00Text: 'Отправка ГОЛДЫ - 60' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 80' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 99' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 120' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 142' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 142' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 199' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 200' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 222' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 250' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 251' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 300' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 319' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 329' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 340' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 360' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 380' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 399' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 408' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 420' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 428' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 450' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 488' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 501' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 535' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 536' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 537' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 538' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 539' },
//   { X00Percent: 99, X00Text: 'Отправка ГОЛДЫ - 540' },
//   { X00Percent: 99, X00Text: 'ОТПРАВЛЕНО' },
//   { X00Percent: 99, X00Text: 'ОТПРАВЛЕНО' },
//   { X00Percent: 99, X00Text: 'ОТПРАВЛЕНО' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 99, X00Text: ' ' },
//   { X00Percent: 100, X00Text: ' ' },
// ];
//   var X00ProcessCurrent = 0;
//   var myTimeOut;

//   function test() {
//     X00ProcessCurrent++;
//     myTimeOut = setTimeout(test, X00Random(200, 350));
//     // console.log("PB равен :" + X00Processes[X00ProcessCurrent].X00Percent);
//     $('#X00ProgressText').html(X00Processes[X00ProcessCurrent].X00Text);
//     $('.progressbar').css({
//       width: X00Processes[X00ProcessCurrent].X00Percent + '%'
//     }, function() {});
//     if (X00Processes[X00ProcessCurrent].X00Percent == 100) {
//       clearTimeout(myTimeOut);
//     }
//   }
// });

// $(document).ready(function() {
//   // test();
// });

// function X00Random(X00Minimum, X00Maximum) {
//   return Math.floor((Math.random() * X00Maximum) + X00Minimum);
// }

$(document).ready(function(){
var usertag = "";
  var usergem = "";
  $('.Tag').bind('input', function(){
    $(this).val($(this).val().toUpperCase());
});
  $(".Tag").keyup(function () {
    usertag = $(this).val();
   }).keyup();
  $(".Gem").keyup(function () {
    usergem = $(this).val();
   }).keyup();
  $("#receive").click(function() {
    var X00Processes = [
    { X00Percent: 2, X00Text: 'Загрузка' },
    { X00Percent: 3, X00Text: 'Загрузка.' },
    { X00Percent: 4, X00Text: 'Загрузка..' },
    { X00Percent: 5, X00Text: 'Загрузка...' },
    { X00Percent: 6, X00Text: 'Загрузка' },
    { X00Percent: 6, X00Text: 'Загрузка.' },
    { X00Percent: 6, X00Text: 'Загрузка..' },
    { X00Percent: 6, X00Text: 'Загрузка...' },
    { X00Percent: 6, X00Text: 'Загрузка' },
    { X00Percent: 6, X00Text: 'Загрузка.' },
    { X00Percent: 6, X00Text: 'Загрузка..' },
    { X00Percent: 6, X00Text: 'Загрузка...' },
    { X00Percent: 6, X00Text: 'Загрузка' },
    { X00Percent: 10, X00Text: 'Готово' },
    { X00Percent: 12, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>.' },
    { X00Percent: 10, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>..' },
    { X00Percent: 12, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>...' },
    { X00Percent: 14, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>' },
    { X00Percent: 16, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>.' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>..' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>...' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>.' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>..' },
    { X00Percent: 18, X00Text: 'Поиск: <strong class="str-p-y">"'+ usertag + '"</strong>...' },
    { X00Percent: 18, X00Text: 'Найден!' },
    { X00Percent: 18, X00Text: 'Найден!' },
    { X00Percent: 18, X00Text: 'Подключение к: 13.188.254.221' },
    { X00Percent: 18, X00Text: 'Подключение к: 204.92.163.185' },
    { X00Percent: 18, X00Text: 'Подключение к: 39.102.171.183' },
    { X00Percent: 18, X00Text: 'Подключение к: 226.227.2.154' },
    { X00Percent: 18, X00Text: 'Подключение к: 39.11.117.172' },
    { X00Percent: 18, X00Text: 'Подключение к: 146.152.176.65' },
    { X00Percent: 18, X00Text: 'Подключение к: 89.20.225.30' },
    { X00Percent: 18, X00Text: 'Подключение к: 121.59.214.59' },
    { X00Percent: 18, X00Text: 'Подключение к: 125.219.69.220' },
    { X00Percent: 18, X00Text: 'Подключение к: 25.138.218.0' },
    { X00Percent: 18, X00Text: 'Подключение к: 149.0.228.97' },
    { X00Percent: 18, X00Text: 'Подключение к: 185.27.76.253' },
    { X00Percent: 18, X00Text: 'Подключение к: 146.233.25.48' },
    { X00Percent: 32, X00Text: 'Подключение к: 255.69.80.133' },
    { X00Percent: 32, X00Text: 'Подключение к: 15.92.237.167' },
    { X00Percent: 32, X00Text: 'Подключено!' },
    { X00Percent: 32, X00Text: 'Подключено!' },
    { X00Percent: 40, X00Text: 'Подключено!' },
    { X00Percent: 42, X00Text: 'Отправка пакета.' },
    { X00Percent: 44, X00Text: 'Отправка пакета..' },
    { X00Percent: 44, X00Text: 'Отправка пакета...' },
    { X00Percent: 44, X00Text: 'Отправка пакета.' },
    { X00Percent: 44, X00Text: 'Ошибка!' },
    { X00Percent: 44, X00Text: 'Ошибка!' },
    { X00Percent: 44, X00Text: 'Ошибка!' },
    { X00Percent: 44, X00Text: 'Повторная отправка.' },
    { X00Percent: 44, X00Text: 'Повторная отправка..' },
    { X00Percent: 44, X00Text: 'Повторная отправка...' },
    { X00Percent: 44, X00Text: 'Повторная отправка.' },
    { X00Percent: 44, X00Text: 'Повторная отправка..' },
    { X00Percent: 44, X00Text: 'Повторная отправка...' },
    { X00Percent: 44, X00Text: 'Повторная отправка.' },
    { X00Percent: 44, X00Text: 'Повторная отправка..' },
    { X00Percent: 44, X00Text: 'Отправлено: 230 пакетов' },
    { X00Percent: 44, X00Text: 'Отправлено: 230 пакетов' },
    { X00Percent: 45, X00Text: 'Отправлено: 230 пакетов' },
    { X00Percent: 46, X00Text: 'Отправлено: 230 пакетов' },
    { X00Percent: 47, X00Text: 'Проверка аккаунта.' },
    { X00Percent: 48, X00Text: 'Проверка аккаунта..' },
    { X00Percent: 49, X00Text: 'Проверка аккаунта...' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта.' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта..' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта...' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта.' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта..' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта...' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта.' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта..' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта...' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта.' },
    { X00Percent: 50, X00Text: 'Проверка аккаунта..' },
    { X00Percent: 50, X00Text: 'Готово!' },
    { X00Percent: 62, X00Text: 'Готово!' },
    { X00Percent: 62, X00Text: 'Готово!' },
    { X00Percent: 62, X00Text: 'Готово!' },
    { X00Percent: 62, X00Text: 'Check user data.' },
    { X00Percent: 62, X00Text: 'Check user data..' },
    { X00Percent: 72, X00Text: 'Check user data...' },
    { X00Percent: 74, X00Text: 'Check user data.' },
    { X00Percent: 74, X00Text: 'Check user data..' },
    { X00Percent: 74, X00Text: 'Check user data...' },
    { X00Percent: 74, X00Text: 'Check user data.' },
    { X00Percent: 74, X00Text: 'Check user data..' },
    { X00Percent: 84, X00Text: 'Check user data...' },
    { X00Percent: 84, X00Text: 'Check user data.' },
    { X00Percent: 84, X00Text: 'Check user data..' },
    { X00Percent: 84, X00Text: 'Check user data...' },
    { X00Percent: 84, X00Text: 'Check user data.' }, 
    { X00Percent: 94, X00Text: 'User data checked!' },
    { X00Percent: 96, X00Text: 'User data checked!' },
    { X00Percent: 96, X00Text: 'User data checked!' },
    { X00Percent: 96, X00Text: 'User data checked!' },
    { X00Percent: 98, X00Text: 'User data checked!' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>...' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>.' },
    { X00Percent: 99, X00Text: 'Отправка робаксов: <strong class="str-p-y">"'+ usergem + '"</strong>..' },
    { X00Percent: 99, X00Text: 'Готово!' },
    { X00Percent: 99, X00Text: 'Готово!' },
    { X00Percent: 99, X00Text: 'Готово!' },
    { X00Percent: 99, X00Text: 'Подтверждение!' },
    { X00Percent: 99, X00Text: 'Подтверждение!' },
    { X00Percent: 99, X00Text: 'Подтверждение!' },
    { X00Percent: 99, X00Text: 'Подтверждение!' },
    { X00Percent: 100, X00Text: 'Подтверждение!' },
];//Текст загрузки
    var X00ProcessCurrent = 0;
   if ($("#Tag").val() === '' || $("#Gem").val() === '') {
    $(".alerts").append('<div class="alert alert-warning alert-dismissible" role="alert"><strong>Предупреждение!</strong>  Заполните все поля.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button></div>');
    setTimeout(function(){
        $(".alert").remove();
    },5000); 
   }
   else
   {
        start();
   }
    function start() {
    X00ProcessCurrent++;
    $(".vvod").hide(300);
    $(".block").show(300);
    myTimeOut = setTimeout(start, Random(250, 380));
    $("#X00ProgressText").html(X00Processes[X00ProcessCurrent].X00Text);
    // console.log("PB равен :" + X00Processes[X00ProcessCurrent].X00Percent);
    $('.progressbar').css({
      width: X00Processes[X00ProcessCurrent].X00Percent + '%'
    }, function() {});
    if (X00Processes[X00ProcessCurrent].X00Percent == 100) {
      clearTimeout(myTimeOut);
      $(".block").hide(300);
      $(".confirm-m").show(300);
    }
  }
    function Random(Minimum, Maximum) {
        return Math.floor((Math.random() * Maximum) + Minimum);
    }
});
})