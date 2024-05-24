# Node.js
___
## **Простой REST сервис с использованием Express.**
___
### APIs:
#### 1. GET /users - получение списка всех пользователей. ####
Запрос: http://localhost:3000/users/
Пример ответа:
```json
[
    {
        "id": 1,
        "name": "Roman",
        "email": "roman@mail.ru",
        "age": 20
    },
    {
        "id": 2,
        "name": "Egor",
        "email": "egor@mail.ru",
        "age": 21
    },
    {
        "id": 3,
        "name": "Alexey",
        "email": "alexey@mail.ru",
        "age": 19
    }
]
```

#### 2. GET /users/:id - получение информации о конкретном пользователе по ID. ####
Пример запроса: http://localhost:3000/users/3
Пример ответа:
```json
{
    "id": 3,
    "name": "Alexey",
    "email": "alexey@mail.ru",
    "age": 19
}
```
#### 3. GET /users/age/:age - получение списка всех пользователей старше указанного возраста. ####
Пример запроса: http://localhost:3000/users/age/19
Пример ответа:
```json
[
    {
        "id": 1,
        "name": "Roman",
        "email": "roman@mail.ru",
        "age": 20
    },
    {
        "id": 2,
        "name": "Egor",
        "email": "egor@mail.ru",
        "age": 21
    }
]
```
#### 4. GET /users/domain/:domain - получение списка всех пользователей с определенным email доменом. ####
Пример запроса: http://localhost:3000/users/domain/mail.ru
Пример ответа:
```json
[
    {
        "id": 1,
        "name": "Roman",
        "email": "roman@mail.ru",
        "age": 20
    },
    {
        "id": 2,
        "name": "Egor",
        "email": "egor@mail.ru",
        "age": 21
    },
    {
        "id": 3,
        "name": "Alexey",
        "email": "alexey@mail.ru",
        "age": 19
    }
]
```
#### 5. GET /users/sorted - получение списка всех пользователей в алфавитном порядке по имени. ####
Запрос: http://localhost:3000/users/sorted
Пример ответа:
```json
[
    {
        "id": 3,
        "name": "Alexey",
        "email": "alexey@mail.ru",
        "age": 19
    },
    {
        "id": 2,
        "name": "Egor",
        "email": "egor@mail.ru",
        "age": 21
    },
    {
        "id": 1,
        "name": "Roman",
        "email": "roman@mail.ru",
        "age": 20
    }
]
```
#### 6. POST /users - добавление нового пользователя. ####
Запрос: http://localhost:3000/users/
Пример body data
```json
{
    "name": "Igor",
    "email": "igor@gmail.com",
    "age": 25
}
```
Пример ответа:
```json
{
    "id": 4,
    "name": "Igor",
    "email": "igor@gmail.com",
    "age": 25
}
```
#### 7. PUT /users/:id - обновление информации о пользователе по ID. ####
Пример запроса: http://localhost:3000/users/3
Пример body data
```json
{
    "age": 24
}
```
Пример ответа:
```json
{
    "id": 2,
    "name": "Egor",
    "email": "egor@mail.ru",
    "age": 24
}
```
#### 8. DELETE /users/:id - удаление пользователя по ID. ####
Пример запроса: http://localhost:3000/users/3
Пример ответа:
```json
{
    "id": 2,
    "name": "Egor",
    "email": "egor@mail.ru",
    "age": 24
}
```


