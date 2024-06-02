# Node.js
___
## **Простой REST сервис с использованием Express.**
___
### APIs:
#### 1. GET /users - получение списка всех пользователей. ####
Запрос: http://localhost:3000/users/ <br />
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

#### 1.1. GET /users?age_above=значение - получение списка всех пользователей старше указанного возраста. ####
Пример запроса: http://localhost:3000/users?age_above=19 <br />
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

#### 1.2. GET /users?domain=значение - получение списка всех пользователей с определенным email доменом. ####
Пример запроса: http://localhost:3000/users?domain=mail.ru <br />
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

#### 1.3. GET /users?sort_by=name&order_by=значение - получение списка всех пользователей в алфавитном порядке по имени. ####
Запрос: http://localhost:3000/users?sort_by=name&order_by=asc <br />
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

#### 2. GET /users/:id - получение информации о конкретном пользователе по ID. ####
Пример запроса: http://localhost:3000/users/3 <br />
Пример ответа:
```json
{
    "id": 3,
    "name": "Alexey",
    "email": "alexey@mail.ru",
    "age": 19
}
```

#### 3. GET /users/:id/cars - получение информации о машинах конкретного пользователя. ####
Пример запроса: http://localhost:3000/users/1/cars <br />
Пример ответа:
```json
[
    {
        "id": 1,
        "brand": "Lada",
        "model": "Vesta"
    },
    {
        "id": 2,
        "brand": "Porsche",
        "model": "Macan S"
    },
    {
        "id": 4,
        "brand": "Porsche",
        "model": "911"
    }
]
```

#### 3.1. GET /users/:id/cars?brand=значение- получение информации о машинах конкретного бренда конкретного пользователя. ####
Пример запроса: http://localhost:3000/users/1/cars?brand=porsche <br />
Пример ответа:
```json
[
    {
        "id": 2,
        "brand": "Porsche",
        "model": "Macan S"
    },
    {
        "id": 4,
        "brand": "Porsche",
        "model": "911"
    }
]
```

#### 4. GET /users/:id/cars/:carId - получение информации о конкретной машине конкретного пользователя. ####
Пример запроса: http://localhost:3000/users/1/cars/2 <br />
Пример ответа:
```json
{
    "id": 2,
    "brand": "Porsche",
    "model": "Macan S"
}
```

#### 5. POST /users - добавление нового пользователя. ####
Запрос: http://localhost:3000/users/ <br />
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

#### 6. PUT /users/:id - обновление информации о пользователе по ID. ####
Пример запроса: http://localhost:3000/users/3 <br />
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

#### 7. DELETE /users/:id - удаление пользователя по ID. ####
Пример запроса: http://localhost:3000/users/3 <br />
Пример ответа:
```json
{
    "id": 2,
    "name": "Egor",
    "email": "egor@mail.ru",
    "age": 24
}
```


