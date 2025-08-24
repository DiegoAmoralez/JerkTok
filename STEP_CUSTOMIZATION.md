# 🎯 Настройка размеров Step-ов

Теперь каждый step с видео вынесен в отдельный компонент с возможностью индивидуальной настройки размеров.

## 📁 Структура файлов

```
src/
├── components/
│   ├── steps/
│   │   ├── FuckMachineStep.tsx      # Step 1
│   │   ├── PublicMasturbationStep.tsx # Step 2  
│   │   ├── DeepthroatStep.tsx       # Step 3
│   │   └── AnalGapingStep.tsx       # Step 4
│   └── LandingPageContent.tsx       # Главная страница
├── styles/
│   └── steps.css                    # Стили для кастомизации
└── app/
    └── globals.css                  # Основные стили
```

## 🎨 Как настроить размеры

### 1. **Редактирование отдельного Step-а**

Каждый step находится в отдельном файле `src/components/steps/`. Например, для изменения Step 1:

**Файл: `src/components/steps/FuckMachineStep.tsx`**

```tsx
// Изменить размер видео
<div className="relative w-80 h-96 mx-auto...">
//                    ↑     ↑
//                 ширина высота
```

### 2. **CSS кастомизация в steps.css**

**Файл: `src/styles/steps.css`**

```css
/* Step 1: Индивидуальная настройка */
#step-1 h2 {
  font-size: clamp(2rem, 5vw, 4rem); /* Заголовок */
}

#step-1 .relative.w-80.h-96 {
  width: clamp(250px, 80vw, 320px);  /* Видео ширина */
  height: clamp(300px, 60vh, 400px); /* Видео высота */
}

#step-1 p {
  font-size: clamp(1rem, 3vw, 1.5rem); /* Описание */
}
```

### 3. **Адаптивность**

Каждый step автоматически адаптируется под размеры экрана:

- **Десктоп**: полные размеры
- **Планшет**: средние размеры  
- **Мобильный**: компактные размеры
- **iPhone SE**: ультракомпактные размеры

## 🔧 Примеры настройки

### Увеличить видео в Step 2

```css
#step-2 .relative.w-80.h-96 {
  width: clamp(300px, 90vw, 400px) !important;
  height: clamp(350px, 70vh, 500px) !important;
}
```

### Уменьшить заголовок в Step 3

```css
#step-3 h2 {
  font-size: clamp(1.5rem, 4vw, 3rem) !important;
}
```

### Изменить цвет кнопок в Step 4

```tsx
// В файле AnalGapingStep.tsx
className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
```

## 📱 Мобильная настройка

Для мобильных устройств в `steps.css`:

```css
@media screen and (max-width: 768px) {
  #step-1 .relative.w-80.h-96 {
    width: clamp(200px, 90vw, 300px) !important;
    height: clamp(250px, 45vh, 350px) !important;
  }
}
```

## 🎯 Преимущества новой структуры

✅ **Четкие границы**: каждый step изолирован  
✅ **Индивидуальная настройка**: уникальные размеры для каждого  
✅ **Простота редактирования**: один файл = один step  
✅ **Адаптивность**: автоматическая подстройка под экран  
✅ **Масштабируемость**: легко добавить новые step-ы  

## 💡 Быстрые команды

```bash
# Редактировать Step 1
code src/components/steps/FuckMachineStep.tsx

# Редактировать Step 2  
code src/components/steps/PublicMasturbationStep.tsx

# Редактировать общие стили
code src/styles/steps.css

# Запустить проект
npm run dev
```

Теперь каждый step можно настраивать независимо! 🚀
