# school-helios-project
Backend for school project, from database learning lessons

That project created for database learning lessons with my classmates (@myros2207 and @ZuruiKitsune),\
i created all of backend part of project, in that project we must to create a fake "cinema", with workers films\
halls and other things what you can see in real cinema

## TECHNOLOGIES WHAT I USE:

express js\
typescript\
ORM system (typeorm)


# Routes

# Cinema Bar Items Routes

## Get All Cinema Bar Items
`GET /barItems` - return all cinema bar items\


## Add New Item To Cinema Bar
`POST /barItem` - add new item to cinema bar, return true or false, body for this:\
```
{
    "itemName": "ITEM-NAME",
    "itemPrice": 0,
    "itemAmount": 0
}
```


# Cinema Workers Routes

## Get All Cinema Workers

`GET /cinemaWorkers` - return all cinema workers\

## Add New Cinema Worker

`POST /cinemaWorker` - add new cinema worker, return true or false, body for this:\
```
{
    "firstName": "FIRST-NAME",
    "secondName": "SECOND-NAME"
}
```

# Customers Routes

## Register Route
`POST /registerCustomer` - register new customer (account), return true or false, body for this:\
```
{
    "firstName": "FIRST-NAME",
    "secondName": "SECOND-NAME",
    "age": 0,
    "login": "LOGIN",
    "password": "PASSWORD"
}
```


## Login Route
`POST /loginCustomer` - login customer (account), return true or false, body for this:\
```
{
    "login": "LOGIN",
    "password": "PASSWORD"
}
```

# Films Routes

## Get All Films Route
`GET /films` - return all films\

## Get Film By Id Route
`GET /film/:id` - return film by id

:id it's id for film you want to get

## Add Film Route
`POST /film` - add new film, return true or false, body for this:
```
{
    "filmName": "FILM-NAME",
    "filmDescription": "FILM-DESCRIPTION",
    "filmRate": 0,
    "filmDate": "DATE",
    "image": "IMAGE",
    "producerId": 0
}
```
filmDate - its date when film is exist in the world "yyyy-mm-dd" (format)

producerId - its id producer from producers table in database

# Halls Routes

## Get All Halls Route
`GET /halls` - return all halls

## Add New Hall Route
`POST /hall` - add new hall, return true or false, body for this:
```
{
    "hallName": "HALL-NAME",
    "hallSeatsAmount": 0,
    "cinemaWorkerId": 0
}
```

Cinema Worker Id - its id from cinema worker table in database

# Premieres Routes

## Get All Premieres To Choosed Date
`GET /premieres/:date` - return all premieres on choosed date

:date - yyyy-mm-dd (format)

## Get Premiere By Id Route
`GET /premiere/:id` - return premiere with choosed id

:id it's id for premiere you want to get

## Add New Premiere Route
`POST /premiere` - add new premiere, return true or false, body for this:
```
{
    "premiereDate": "DATE",
    "filmId": 0,
    "hallId": 0
}
```

premiereDate = date for premiere "yyyy-mm-dd T hh-mm-ss-msms" (format)

filmId - its id from film table in database

hallId - its id from hall table in database

# Producers Routes

## Get All Producers Route
`GET /producers` - return all producers

## Add New Producer Route
`POST /producer` - add new producer, return true or false, body for this:
```
{
    "firstName": "FIRST-NAME",
    "secondName": "SECOND-NAME",
    "image": "IMAGE"
}
```

# Tickets Routes

## Get Customer Ticket Route
`GET /tickets/:customerId` - return all customer with choosed id, tickets (must be changed, add access token, beacuse now any one can see and use all ticket to choosed customer)

## Add New Ticket For Customer Route
`POST /ticket` - add new ticket, return true or false, body for this:
```
{
    "premiereId": 0,
    "customerId": 0
}
```

premiereId - its id from premieres table in database

customerId - its id from customers table in database (its id user you buy for)

# ITS MY FIRST SERIOUS API :)