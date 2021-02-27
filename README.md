# Weather Forecast CLI

Command line interface to forecast weather.
Uses (open weather global services) API.

### Installation

Install the dependencies

```sh
$ npm install
```

### Create Symlink

```sh
$ npm link
```

### Commands

Show current condition of a city
```sh
$ weather today -l [cityname]
```
```sh
$ weather today --location [cityname]
```

Show weather Forecast for 5 days
```sh
$ weather forecast -l [cityname]
```
```sh
$ weather forecast --location [cityname]
```

Help
```sh
$ weather help
```

### App Info

Developer - Nilay Gupta

Version - 1.0.0

License -  MIT License