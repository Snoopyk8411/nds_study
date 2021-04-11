# nds_study
### Описание
Данная утилита, создана для реализации домашних заданий по курсу netology-ndse

### Начало работы
Для корректной работы вам потребуется установленная [Node](https://nodejs.org/en/)

Запустите в консоли:\
`npm i`\
Затем:\
`npm link`\
После этого, данная утилита, будет доступна по ключевому слову - `nds`

### Логгирование
По умолчанию, все команды логгируется - логи хранятся в файле вида:\
`<command>_log.txt`\
Файлы логов, хранятся в корне репозитория, в папке `logs`\
Однако, если вы хотите переопределить файл логгирования, то в любой команде нужно добавить аргумент:\
`--logPath=<logFilePath> || --logPath <logFilePath>, где logFilePath - путь до целевого файла`\
`> nds current --logPath ./test.txt`\

### Weather commands
Для того, чтобы узнать погоду в текущем городе используйте команду:\
`nds weather`\
```
{
  request: { type: 'City', query: 'Moscow, Russia', language: 'en', unit: 'm' },
  location: {
    name: 'Moscow',
    country: 'Russia',
    region: 'Moscow City',
    lat: '55.752',
    lon: '37.616',
    timezone_id: 'Europe/Moscow',
    localtime: '2021-04-11 18:49',
    localtime_epoch: 1618166940,
    utc_offset: '3.0'
  },
  current: {
    observation_time: '03:49 PM',
    temperature: 16,
    weather_code: 113,
    weather_icons: [
      'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
    ],
    weather_descriptions: [ 'Sunny' ],
    wind_speed: 7,
    wind_degree: 200,
    wind_dir: 'SSW',
    pressure: 1028,
    precip: 0,
    humidity: 31,
    cloudcover: 0,
    feelslike: 16,
    uv_index: 5,
    visibility: 10,
    is_day: 'yes'
  }
}
```
По умолчанию, прогноз выдается для Москвы, для любого другого места используйте флаг `--city <city_name>`\
`nds weather --city Madrid`\
По умолчанию, ответ возвращается в формате JSON, для красивого сообщения используйте флаг `--show_pretty`\
`nds weather --city Madrid --show_pretty`\
```
At Madrid, Spain on 03:57 PM is:
Partly cloudy with temperature of 16 C, but feels like: 16 C.
Wind is 17 km/h W. With a pressure: 1014 mb
```

### Date commands

Текущая дата и время в формате ISO:  
`nds current`\
`> 2021-03-29T18:50:22.722Z`

Текущий год:  
`nds current --year` или `nds current -y`\
`> 2021`

Текущий месяц:  
`nds current --month` или `nds current -m`\
`> 03`

Дата в календарном месяце:  
`nds current --date` или `nds current -d`\
`> 29`

Команды `add` и `sub`:\
`add` - текущая дата и время в формате ISO + указанное флагом,\
`sub` - текущая дата и время в формате ISO - указанное флагом,\
Например:\
`nds add -d 2` - дата и время в формате ISO на два дня вперед\
`> 2021-03-31T18:53:20.158Z`\
`nds sub --month 1` - дата и время в формате ISO на 1 месяц назад\
`> 2021-03-01T18:57:53.038Z`

### Мини-игры

#### "Угадай число"

Старт игры: `nds guess-number`

Примерный ход работы:
```
nds guess-number
Пожалуйста, придумайте число, для старта игры
100
Загадано число в диапазоне от 0 до 100
1
Больше
75
Меньше
55
Отгадано число 55
```

#### "Орёл или Решка"

Старт игры: `nds heads-or-tails`

Примерный ход работы:
```
nds heads-or-tails
Угадай, Орел или Решка? Орел - 1, Решка - 2
1
Верно! Это - Орёл
```
