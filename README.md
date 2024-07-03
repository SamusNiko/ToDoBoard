# ToDoBoard
To Do app on react

<p>Example of server .env fiel:<p>

    PORT = 7000
    DB_NAME = ToDoList
    DB_USER = postgres
    DB_PASSWORD = your_password #пароль для БД
    DB_HOST = localhost
    DB_PORT = 5432
    JWT_ACCESS_SECRET=jwt-secret-string-for-access-token #строка используется для генерации access токена для юзера
    JWT_REFRESH_SECRET=jwt-secret-string-for-refresh-token #строка используется для генерации refresh токена для юзера
    SMTP_HOST = "smtp.gmail.com"
    SMTP_PORT = 587
    SMTP_USER = "youremail@gmail.com"
    SMTP_PASSWORD = specialpassword #специально сгенереный пароль для приложения чтобы пройти двухфакторную аутентификацию<br>
    API_URL = "http://localehost:3000"

## Ho to generate password for nodemailer

Для настройки аккаунта Google для работы с Nodemailer, необходимо выполнить несколько шагов, чтобы обеспечить безопасность и доступ к вашему аккаунту для отправки электронных писем. Вот пошаговая инструкция:

1. Включение двухэтапной аутентификации
Войдите в ваш аккаунт Google.
Перейдите на страницу Безопасность Google.
В разделе "Вход в аккаунт Google" найдите "Двухэтапная аутентификация" и включите её.
2. Создание пароля приложения
После включения двухэтапной аутентификации вернитесь на страницу Безопасность Google.
В разделе "Вход в аккаунт Google" выберите "Пароли приложений".
Войдите в свой аккаунт еще раз для подтверждения.
Выберите приложение и устройство для которого хотите создать пароль (например, "Почта" и "Windows компьютер").
Нажмите "Сгенерировать". Сохраните сгенерированный пароль приложения - он понадобится вам для настройки Nodemailer.

## Used NPM packeges for server

nodemailer - for sending email
bcrypt 
jsonwebtoken
uuid
sequelize
cors
cookie-parser