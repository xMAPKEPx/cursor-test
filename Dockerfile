# Этап сборки
FROM node:18-alpine as build

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код (с учетом Windows CRLF)
COPY . .
RUN if [ -f .gitattributes ]; then rm .gitattributes; fi

# Собираем приложение
RUN npm run build

# Этап production
FROM nginx:alpine

# Копируем собранное приложение из этапа сборки
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем кэш-директорию и устанавливаем права
RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    mkdir -p /var/run && \
    chown -R nginx:nginx /var/run

# Открываем порт 80
EXPOSE 80

# Запускаем nginx от пользователя nginx
USER nginx

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"] 