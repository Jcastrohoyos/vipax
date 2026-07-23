# Funcionalidades Frontend para VIPAX

Basado en los servicios actuales de la empresa (Gestión de pasajeros, Reservas hoteleras, Transporte terrestre, Eventos corporativos).

---

## 1. Panel de Incidencias / Reportes

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Formulario de reporte de incidencias | Formulario para aerolíneas o pasajeros que reporten overbooking, cancelaciones, desvíos, etc. | Alta |
| Selector de tipo de incidencia | Categorías: Overbooking, Cancelación, Desvío, Pérdida de conexión, Otro | Alta |
| Campo de vuelo | Número de vuelo, aerolínea, fecha, origen/destino | Alta |
| Campo de pasajeros | Nombre, contacto, cantidad de pasajeros afectados | Alta |
| Subida de documentos | Adjuntar boarding pass, confirmación de vuelo, recibos de gastos | Media |
| Selector de urgencia | Normal / Urgente / Crítica (con SLA estimado) | Media |
| Generación de caso | Número de caso automático para seguimiento | Alta |
| Seguimiento de estado | Estado del caso: Recibido → En proceso → Resuelto → Cerrado | Alta |
| Historial de comunicaciones | Timeline de interacciones entre VIPAX y el cliente | Media |

---

## 2. Reservas Hoteleras

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Buscador de disponibilidad | Fecha de entrada/salida, cantidad de habitaciones, tipo | Alta |
| Filtros de búsqueda | Zona, categoría (estrellas), precio, servicios | Media |
| Tarjetas de hotel con fotos | Galería de imágenes, puntuación, distancia al aeropuerto | Alta |
| Comparador de hoteles | Seleccionar 2-3 hoteles para comparar precio/servicios | Baja |
| Reserva directa | Formulario con datos del huésped, método de pago | Alta |
| Reserva para grupos | Formulario especial para grupos de pasajeros/tripulaciones | Media |
| Confirmación por email | Envío automático de confirmación de reserva | Alta |
| Política de cancelación | Información clara de plazos y condiciones | Media |
| Lista de hoteles partner | Directorio de hoteles aliados con convenios | Baja |

---

## 3. Transporte Terrestre

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Reserva de traslado | Origen, destino, fecha/hora, cantidad de pasajeros | Alta |
| Selector de tipo de vehículo | Sedán, van, autobús según cantidad | Media |
| Cotización en tiempo real | Tarifa estimada antes de confirmar | Alta |
| Traslado aeropuerto → hotel | Ruta predefinida aeropuerto Barajas | Alta |
| Traslado hotel → aeropuerto | Ruta predefinida inversa | Alta |
| Traslados corporativos | Rutas personalizadas para empresas | Media |
| Seguimiento del vehículo | Ubicación en tiempo real del transporte asignado | Baja |
| Reserva grupal | Vehículos múltiples para grupos grandes | Media |
| Chofer asignado | Nombre, foto, teléfono del conductor | Baja |

---

## 4. Eventos Corporativos

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Formulario de solicitud de evento | Tipo, fecha, cantidad de asistentes, presupuesto estimado | Alta |
| Selector de tipo de evento | Reunión, congreso, convención, viaje de incentivo, team building | Alta |
| Cotizador de eventos | Estimación de costos según tipo y tamaño | Media |
| Galería de eventos anteriores | Fotos y casos de éxito organizados por VIPAX | Media |
| Paquetes de eventos | Opciones prearmadas: Básico, Premium, Corporativo | Baja |
| Checklist de planificación | Lista de tareas para organizar el evento | Baja |
| Coordinador asignado | Contacto directo con el responsable del evento | Media |
| Formulario de catering | Opciones de menú, restricciones alimentarias, horarios | Baja |

---

## 5. Portal de Cliente / Dashboard

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Login de cliente | Autenticación para aerolíneas y empresas partner | Alta |
| Dashboard de incidencias | Vista general de todos los casos activos y resueltos | Alta |
| Métricas y estadísticas | Casos atendidos, tiempo promedio de resolución, satisfacción | Media |
| Descarga de reportes | Exportar datos en PDF o Excel | Media |
| Gestión de usuarios | Invitar miembros del equipo de la aerolínea | Baja |
| Historial de reservas | Todas las reservas hoteleras y traslados realizados | Alta |
| Facturación | Descargar facturas y estados de cuenta | Media |
| Configuración de notificaciones | Preferencias de alertas por email, SMS, WhatsApp | Baja |

---

## 6. Herramientas de Soporte al Pasajero

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Calculadora de compensación | Según Reglamento UE 261/2004 (distancia, horas de espera) | Alta |
| Chat en vivo | Asistencia inmediata con agente o chatbot | Alta |
| WhatsApp directo | Enlace rápido a WhatsApp Business de VIPAX | Alta |
| Preguntas frecuentes (FAQ) | Respuestas a dudas comunes sobre derechos del pasajero | Alta |
| Guía de derechos UE 261/2004 | Información clara sobre cuándo y cuánto se puede reclamar | Media |
| Formulario de reclamación | Formulario específico para reclamaciones formales | Media |
| Seguimiento de reclamación | Estado de la reclamación con número de caso | Alta |
| Plantilla de cartas | Cartas modelo para reclamar a aerolíneas | Baja |

---

## 7. Contenido Informativo / Marketing

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Blog de noticias | Artículos sobre el sector aéreo, normativas, consejos | Media |
| Casos de éxito | Historias de clientes satisfechos | Media |
| Testimonios | Sección de reseñas con estrellas y fotos | Alta |
| Video institucional | Presentación de VIPAX en la homepage | Baja |
| Partners / Aliados | Logos de aerolíneas y hoteles asociados | Media |
| Certificaciones | Badges de certificaciones y homologaciones | Baja |
| Newsletter | Formulario de suscripción para recibir novedades | Baja |

---

## 8. Funcionalidades Técnicas / UX

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| Modo oscuro / claro | Ya implementado | Completado |
| Mapa de ubicación | Ya implementado en el footer | Completado |
| Multiidioma (i18n) | Español / Inglés / Francés (para aerolíneas internacionales) | Alta |
| Responsive design | Ya implementado | Completado |
| PWA (Progressive Web App) | Instalable en móviles, funciona offline | Baja |
| Notificaciones push | Alertas de estado de incidencias en tiempo real | Media |
| Animaciones de scroll | Ya implementado con framer-motion | Completado |
| SEO optimizado | Meta tags, estructura, sitemap | Media |
| Accesibilidad (a11y) | WCAG 2.1, alt texts, navegación por teclado | Alta |
| Velocidad de carga | Optimización de imágenes, lazy loading | Alta |

---

## 9. Integraciones

| Funcionalidad | Descripción | Prioridad |
|---|---|---|
| API REST | Endpoint para que aerolíneas envíen incidencias automáticamente | Alta |
| Integración con Sistemas de Reservas (GDS) | Conexión con Amadeus, Sabre, Travelport | Baja |
| Integración con WhatsApp Business API | Envío de confirmaciones y seguimiento por WhatsApp | Alta |
| Integración con邮件 (Email transaccional) | Envío automático de confirmaciones, alertas | Alta |
| Integración con pasarela de pago | Stripe, PayPal para reservas y pagos | Media |
| Webhook a sistemas del cliente | Notificaciones push a sistemas internos de aerolíneas | Baja |
| Google Analytics / Tag Manager | Seguimiento de conversiones y comportamiento | Media |

---

## Resumen de Prioridades

### Alta (Implementar primero)
- Formulario de reporte de incidencias
- Seguimiento de estado de casos
- Buscador y reserva de hoteles
- Reserva de traslados
- Calculadora de compensación UE 261/2004
- Chat en vivo / WhatsApp
- FAQ y derechos del pasajero
- Multiidioma
- Accesibilidad

### Media (Fase 2)
- Dashboard de cliente
- Métricas y reportes
- Cotizador de eventos
- Galería de eventos
- Blog de noticias
- Testimonios
- Notificaciones push
- Integración WhatsApp API

### Baja (Fase 3)
- Comparador de hoteles
- Seguimiento GPS de vehículos
- PWA
- Integración GDS
- Webhooks personalizados
