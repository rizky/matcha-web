# Matcha

## Installation

```bash
git clone --recurse-submodules https://github.com/rizkyario/42-matcha.git && cd 42-matcha
docker build -t rizkyario/42-matcha .
```

### Development

```bash
docker-compose up
```

### Production

```bash
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up
```

## Debugging

### Attach to Docker with VSCode

In a terminal, execute

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

then press F5