### Hexlet tests and linter status:
[![Actions Status](https://github.com/Serega20581/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Serega20581/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/2af26ffde4fdd1581df1/maintainability)](https://codeclimate.com/github/Serega20581/frontend-project-46/maintainability)

## CI Status

![CI](https://github.com/Serega20581/frontend-project-46/workflows/CI/badge.svg)

## Test Coverage

[![Test Coverage](https://api.codeclimate.com/v1/badges/2af26ffde4fdd1581df1/test_coverage)](https://codeclimate.com/github/Serega20581/frontend-project-46/test_coverage)

## Пример просмотра записи

Для удобства в проект добавлен локальный HTML-плеер `demo-gendiff.html`, который воспроизводит пример демонстрации `gendiff` без необходимости устанавливать `asciinema`.

Откройте файл в браузере (двойной клик или из PowerShell):

```powershell
start demo-gendiff.html
# или
explorer .\demo-gendiff.html
```

Плеер автоматически воспроизведёт пример вывода команды:

```console
{
	- follow: false
		host: hexlet.io
	- proxy: 123.234.53.22
	- timeout: 50
	+ timeout: 20
	+ verbose: true
}
```

Если вы всё же хотите использовать `asciinema`, в проекте также есть файл `demo-gendiff.cast` — команду для воспроизведения в средах, где установлен `asciinema`:

```bash
asciinema play demo-gendiff.cast
```