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
Однако, если вы хотите переопределить файл логгирования, то в любой команде нужно добавить аргумент:\
`--logPath=<logFilePath> || --logPath <logFilePath>, где logFilePath - путь до целевого файла`\
`> nds current --logPath ./test.txt`\

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
