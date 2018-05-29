# Matcha

## Usage

```
git clone --recurse-submodules https://github.com/rizkyario/42-matcha.git && cd 42-matcha
docker build -t rizkyario/42-matcha .; docker-compose up;
```

## Debugging

### Attach to Docker with VSCode

In a terminal, execute
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

then press F5