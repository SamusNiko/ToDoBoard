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

## Used NPM packeges for server

nodemailer - for sending email
bcrypt 
jsonwebtoken
uuid
sequelize
cors
cookie-parser