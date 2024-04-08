# Postgress Wrapper

This resource is a simple wrapper for [FiveM](https://fivem.net/). It's running with Redis

## Instalation

1. Download the [latest release](https://github.com/jet2tlf/pg/releases/latest).
2. Add the following lines to your server config:
```
set postgreCredentials "postgres://user:password@localhost:5432/database"
start pg
```
3. Set your host

## Examples

Query

```lua
local result = exports["pg"]:query("SELECT * FROM cars WHERE manufacturer = $1 AND horsepower > $2", { 'volkswagen', 200 });
```
