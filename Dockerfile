# Используем Node.js как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# В режиме разработки мы не копируем исходный код,
# так как он будет монтироваться через volume

# Открываем порт
EXPOSE 5173

# По умолчанию запускаем в режиме разработки
CMD ["npm", "run", "dev"] 