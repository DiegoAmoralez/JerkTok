# 🚀 Развертывание JT Portal на Vercel + Подключение домена

## ✅ Проект готов к деплою!
- ✅ Сборка успешна (`npm run build` работает)
- ✅ Все ошибки исправлены
- ✅ Dev Tools отключены

## 🌐 **Развертывание на Vercel (Пошагово):**

### **Шаг 1: Создание аккаунта Vercel**
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Sign Up" → выберите "Continue with GitHub"
3. Авторизуйтесь через GitHub

### **Шаг 2: Импорт проекта**
1. В Vercel Dashboard нажмите **"New Project"**
2. Выберите ваш GitHub репозиторий `JT/jerktok`
3. Нажмите **"Import"**

### **Шаг 3: Настройка проекта**
```
Framework Preset: Next.js ✅
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### **Шаг 4: Переменные окружения (если нужны)**
```
NODE_ENV=production
```

### **Шаг 5: Деплой**
1. Нажмите **"Deploy"**
2. Дождитесь завершения сборки (2-3 минуты)
3. Получите URL вида: `https://jerktok-xxx.vercel.app`

## 🔗 **Подключение домена с domain.com:**

### **Шаг 1: Добавление домена в Vercel**
1. В настройках проекта перейдите в **"Domains"**
2. Нажмите **"Add Domain"**
3. Введите ваш домен: `yourdomain.com`
4. Нажмите **"Add"**

### **Шаг 2: Настройка DNS на domain.com**
В панели управления domain.com добавьте:

#### **Для основного домена:**
```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600
```

#### **Для www поддомена:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### **Шаг 3: Проверка DNS**
1. Подождите 5-15 минут (DNS обновляется)
2. В Vercel статус домена должен стать **"Valid"**
3. SSL сертификат создастся автоматически

## 📱 **Проверка после деплоя:**

### **Основные функции:**
- [ ] Сайт загружается на домене
- [ ] Видео воспроизводится
- [ ] Анимации работают
- [ ] Мобильная версия корректна
- [ ] SSL сертификат активен (🔒)

### **Тестирование видео:**
- [ ] `yourdomain.com` → Hero Section
- [ ] `yourdomain.com/#step-1` → Fuck Machine Sluts
- [ ] `yourdomain.com/#step-2` → Public Masturbation
- [ ] `yourdomain.com/#step-3` → Deepthroat Whores
- [ ] `yourdomain.com/#step-4` → Anal Gaping
- [ ] `yourdomain.com/#step-5` → Loaders
- [ ] `yourdomain.com/#step-6` → Final CTA

## 🔧 **Автоматические обновления:**

### **При push в GitHub:**
1. Vercel автоматически пересоберет проект
2. Новый деплой заменит старый
3. Домен автоматически обновится

### **Ручной деплой:**
1. В Vercel Dashboard → **"Deployments"**
2. Нажмите **"Redeploy"** на нужном деплое

## 🆘 **Решение проблем:**

### **DNS не обновляется:**
- Подождите 24 часа
- Проверьте TTL в настройках DNS
- Используйте [whatsmydns.net](https://whatsmydns.net)

### **SSL не работает:**
- Подождите 1-2 часа после настройки DNS
- Проверьте статус домена в Vercel
- Убедитесь, что DNS записи корректны

### **Видео не загружается:**
- Проверьте путь `/videos/LIVE NOW F1 V.mp4`
- Убедитесь, что файл в папке `public/videos/`
- Проверьте размер файла (не более 100MB для бесплатного плана)

## 💰 **Планы Vercel:**

- **Hobby (Бесплатно)**: 100GB bandwidth, 100GB storage
- **Pro ($20/мес)**: 1TB bandwidth, 1TB storage
- **Enterprise**: По запросу

## 🎯 **Результат:**
После выполнения всех шагов у вас будет:
- ✅ **Рабочий сайт** на вашем домене
- ✅ **Автоматические обновления** при push в GitHub
- ✅ **SSL сертификат** (HTTPS)
- ✅ **CDN** по всему миру
- ✅ **Аналитика** и мониторинг

**Удачи с деплоем! 🚀✨**
