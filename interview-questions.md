# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:

  MVC stands for Model, View, & Controller. Its a way of organizing code.

  Researched answer:

  Model code reflects real world things. it can hold raw data, or it will define the essential components of your app

  View code is made up of all the functions that directly interact with the user. It is what makes the app look nice

  Controller acts as a liason between the model and the view- it is what recieves user input and decides what to do with it. 



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:

  CRUD stands for Create, Read, Update, Delete. If an app has CRUD it has full functionality for the user. Basically all functions of apps fit into those 4 behaviors so for an app to be the most useful all of those functions will have to work successfully.

  Researched answer:

  these 4 functions are necessary to implement a persistent storage application. Persistent storage refers to any data storage device that retains power after being powered off or when you leave a page.

  CRUD identifies all the functions that are inherent to relational databases.



3. What is a relational database? Are there other kinds of databases?

  Your answer:
  A relational database is a database that takes different types of user inputted or otherwise collected data and relates it with various functions, algorithms, operations. Like excel or PostgreSQL

  Researched answer:

  Relational databases store information in tables that consist of rows and columns.
  The description of the layout of all the tables in a database and the name and data type of each column within each table in a database is called a schema.



4. What are the 5 HTTP verbs? What are they important?

  Your answer:
  The 5 HTTP verbs are post, get, put, patch, and delete. they are also refered to as request methods



  Researched answer:
  They correspond with CRUD

   Post = Create
   Get = Read
   Put - Update/Relace
   Patch = Update/Modify
   Delete = Delete

   There are actually more than 5 http verbs - such as OPTIONS & HEAD but those 5 are the most common



5. What is object-relational mapping?

  Your answer: Object-relational mapping is associating pieces of data with a single object.

  Researched answer:

  Postgres is an Object-relational database.

  Object-relational mapping is the idea of being able to write queries using an object-oriented lens- interacting with a database using your language of choice instead of SQL.

  You can use an ORM or Object-Relational Mapper/external software that is a library that allows you to use whatever language you want



6. What is a gem?

  Your answer:
  A gem is a package you can install that works with Ruby.

  Researched answer:
  A gem is library or snippet of code functionality. Gems package up Ruby code so it is easy to share with others. For instance, a gem is needed to run rspec or a ruby testing framework



7. What are primary keys? Why are they important?

  Your answer:

  Primary keys are IDs for each row in a database. they are all unique and allow you to tell each record or set of related data apart. they are also called Unique Keys.

  Researched answer:

  Primary keys are guaranteed to be unique and they are how we keep 2 instances from being confused (for instance if they have the same name etc.)


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
    REST is Representation State Transfer. It isa  way of mapping HTTP routes and CRD functionalities
    Routes are the code that is responsible for listening & receiving requests and deciding what to send back.
    there are 7 RESTful routes.
    1. Index - GET
    2. New - GET
    3. Create - Post
    4. Show - GET
    5. Edit - GET
    6. Update - PUT
    7. Destroy - Delete
  
- JSON
    JSON stands for JavaScript Object Notation

    JSON is a lightweight format for storing and transporting data

    JSON is often used when data is sent from a server to a web page

    JSON is "self-describing" and easy to understand
      example: 
      {
        "employees":[
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
        ]
      }

- Endpoints
    Endpoints are one end of a communication channel.
    Also called an API endpoint. When an API interacts with another system, the touchpoints of communication are considered enpoints. 
    The place that APIs send requests & where the resource lives is called an endpoint. 
    APIs are Application Programming INterfaces- they essentially provide the language and contract for how two systems interact. 

- Strong params
    https://medium.com/@tbrisker/strong-parameters-in-rails-down-the-rabbit-hole-2426d331625#:~:text=Strong%20Parameters%20is%20a%20feature,what%20parameters%20should%20be%20allowed.

    Strong parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It lets you indicate if each parameter should be a hash, array, or scalar.

- Validations
    they are used to ensure that only valid data is saved into your database. For instance, if you need every user to give a valid email address, you might want a validation to check this. 

    They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.


