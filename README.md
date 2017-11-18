# Getting started with server-side

Python 3+ and virtualenv is required.

Clone the project from the origin, go to the root folder.

## Setting up and activating virtual environment

```bash
python3 -m virtualenv venv
source venv/bin/activate
```

## Fetching dependencies

```bash
pip install -r requirements.txt
```

## Setting up db

Postgres DBMS is used and recommended. In order to run the application server, you need to create db and user with permissions to interact with it. For this, make sure you have postgres service running and have psql installed. In your shell, try:

```bash
createdb your_db_name
psql -U postgres
```
In the DB shell, enter:
```sql
CREATE ROLE your_db_user_name WITH password 'your_db_user_password';
GRANT ALL ON DATABASE your_db_name TO your_db_user_name;
ALTER ROLE your_db_user_name WITH LOGIN;
```

## Creating settings

The settings.py file is required in order to run the project. Use dummy.settings.py file to create your own settings.py. The only thing you really need to change there is the DATABASES config entry. Change 'NAME', 'USER', 'PASSWORD' to the ones you fed to database. 'HOST' and 'PORT' will be 'localhost' and '5432' by default unless you have some other DB server location.

## Other preparations

If you run the application first time, you should also fill up the database with the tables created by ORM and its migrations.

```bash
cd modernquiz
python manage.py migrate
```

## Running application

If everythin until now is done right, you will be able to run application by:
```bash
python manage.py runserver
```