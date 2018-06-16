# Matcha

## Installation

```bash
git clone https://github.com/rizkyario/matcha.git && cd matcha
```

### Development

```bash
docker-compose build; docker-compose up
curl http://localhost:81/setup
```

### Production

```bash
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up
curl http://localhost:81/setup
```

## Debugging

### Attach to Docker with VSCode

In a terminal, execute

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

then press F5