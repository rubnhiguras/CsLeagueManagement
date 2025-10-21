# ⚽ CSLeague – Gestión de Ligas Amateur

[![Deploy](https://img.shields.io/badge/Deploy-Firebase%20Hosting-blue?logo=firebase)](https://csleague-app-dev.web.app/)
[![PWA](https://img.shields.io/badge/PWA-Ready-brightgreen?logo=pwa)](https://csleague-app-dev.web.app/)
[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-purple?logo=vite)](https://vitejs.dev/)

---

## 🌐 Demo

👉 **Prueba la aplicación:**  
🔗 [https://csleague-app-dev.web.app/](https://csleague-app-dev.web.app/)

---

## 📝 Descripción

**CSLeague** es una aplicación web progresiva (**PWA**) desarrollada con **React** y **Vite**, creada para **gestionar ligas de fútbol amateur** de forma simple, rápida y accesible desde cualquier dispositivo.

Gracias a su arquitectura PWA, la app puede **instalarse como aplicación de escritorio o móvil** y funcionar **offline**, manteniendo una experiencia fluida y moderna.

---

## 🚀 Características principales

- ⚡ **Frontend moderno:** React + Vite.  
- 🧭 **Progressive Web App (PWA):** instalable y funcional sin conexión.  
- 🎨 **Diseño responsive:** interfaz adaptable a cualquier dispositivo.  
- 🔐 **Gestión de usuarios y ligas.**  
- ☁️ **Despliegue automatizado en Firebase Hosting mediante GitHub Actions.**  

---

## 🧠 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| [React](https://react.dev/) | Librería principal para construir la interfaz. |
| [Vite](https://vitejs.dev/) | Herramienta de build rápida y moderna. |
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | Infraestructura de despliegue y hosting. |
| [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/) | Integración PWA para Vite. |
| [Workbox](https://developer.chrome.com/docs/workbox) | Cache y soporte offline. |

---

## ⚙️ Instalación y uso local

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/rubnhiguras/CsLeagueManagement.git
cd CsLeagueManagement
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en  
👉 `http://localhost:5173`

### 4️⃣ Construir para producción
```bash
npm run build
```

### 5️⃣ Servir la versión de producción
```bash
npm run preview
```

---

## 🔐 Despliegue en Firebase Hosting

Este proyecto se despliega automáticamente a **Firebase Hosting** cuando se hace `push` a la rama `dev`.

Archivo de configuración:  
`.github/workflows/firebase-deploy.yml`

---

## 📱 Instalación como App (PWA)

1. Abre la app en [https://csleague-app-dev.web.app](https://csleague-app-dev.web.app).  
2. En tu navegador (Chrome, Edge, etc.), selecciona:  
   - **“Instalar CSLeague”** o  
   - En móvil: “Agregar a la pantalla de inicio”.  
3. La app se instalará como una aplicación nativa con soporte **offline**.

---

## 🧩 Estructura del proyecto

```
CsLeagueManagement/
├── public/
│   ├── icons/              # Íconos PWA
│   ├── manifest.webmanifest
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 👥 Autor

**Rubén Higueras**  
📧 [GitHub – rubnhiguras](https://github.com/rubnhiguras)

---

## 🧾 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  
Consulta el archivo `LICENSE` para más información.
