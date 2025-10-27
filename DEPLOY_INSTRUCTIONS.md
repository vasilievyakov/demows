# 🚀 Инструкция по деплою на GitHub

## Быстрый способ (GitHub CLI)

### Шаг 1: Авторизуйтесь в GitHub CLI
```bash
gh auth login
```

**Что делать:**
1. Выберите `GitHub.com`
2. Выберите `HTTPS`
3. Ответьте `Y` на вопрос "Authenticate Git with your GitHub credentials?"
4. Выберите `Login with a web browser`
5. Нажмите `Enter`
6. Откроется браузер - авторизуйтесь там
7. Вернитесь в терминал - должно быть ✅ Done!

### Шаг 2: Push кода
```bash
git push -u origin main
```

---

## Альтернатива: Personal Access Token

### Шаг 1: Создайте токен
1. Идите на: https://github.com/settings/tokens
2. Нажмите "Generate new token" → "Generate new token (classic)"
3. Название: `value-vs-effort-prioritizer`
4. Выберите срок действия (90 дней)
5. Поставьте галочку `repo` (все)
6. Нажмите "Generate token"
7. **СКОПИРУЙТЕ ТОКЕН** (он показывается только один раз!)

### Шаг 2: Push кода
```bash
git push -u origin main
```

**При запросе:**
- Username: `vasilievyakov`
- Password: `вставьте_скопированный_токен`

---

## Альтернатива: GitHub Desktop

1. Скачайте GitHub Desktop: https://desktop.github.com/
2. Войдите в свой аккаунт
3. File → Add Local Repository
4. Выберите папку `c:\Users\Vasiliev\prior`
5. Нажмите "Publish repository"
6. Выберите `vasilievyakov/demows`
7. Нажмите "Publish repository"

---

## После успешного push

Ваш репозиторий будет доступен по адресу:
**https://github.com/vasilievyakov/demows**

