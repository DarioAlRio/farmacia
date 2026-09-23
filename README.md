# Farmacia Arturo Martínez Padial — demo

Web de demostración para enseñar al titular. Una sola página estática (`index.html` + `css/site.css` + `js/site.js`), sin dependencias salvo Google Fonts y el mapa embebido de Google. Se puede subir tal cual a cualquier hosting.

- **Negocio:** Farmacia Arturo Martínez Padial · Av. del Parque de Palomeras Bajas, 23 · 28018 Madrid · 915 07 92 86
- **Web actual:** https://sites.google.com/view/farmaciaignacioglezgallastegui/inicio (todavía con el nombre del titular anterior, Ignacio González Gallastegui; misma dirección y horario).
- **Horario:** L–V 9:00–21:00 · S 10:00–20:00 · D cerrado (Google Maps y web actual).
- **Valoración:** 4,8 ★ con 37 reseñas en Google (septiembre 2026).

## Fuentes

- **Fotos:** `img/fachada.*` y `img/exterior.*` son las dos fotos propias de la ficha de Google Maps (la de fachada es la misma que usa su Google Sites). Originales intactos en `img/_original/`. La del exterior es un recorte del panorama 360°.
- **Reseñas:** solo las de 5 ★, con el texto literal de Google (vía la ficha de Maps y el agregador tofarmacias.com, que replica las reseñas de Google). Se ha omitido la única negativa (1 ★) y una de 2018 que mezclaba una queja.
- **Servicios:** atributos de la ficha de Maps (acceso para silla de ruedas, pago con móvil o tarjeta) y lo que repiten las reseñas (encargan el medicamento si no lo tienen, asesoramiento). «Dermocosmética» se deduce del escaparate. La entrega a domicilio aparece en Maps pero se ha quitado de la web a petición.

- **Logos de marcas:** `img/marcas/`. Oficiales: La Roche-Posay, Bioderma, Eucerin, CeraVe, Avène, Vichy y Nuxe de Wikimedia Commons; ISDIN, Heliocare, Uriage y Mustela de sus webs oficiales (a ISDIN se le ha quitado el eslogan). Originales en `img/_original/marcas/`. Son las marcas de dermofarmacia más comunes, **no** confirmadas con la farmacia.

## Secciones con contenido provisional

- **Equipo:** dos huecos rayados con la etiqueta «Hueco para foto» (equipo en el mostrador y retrato de Arturo) y un texto de Arturo marcado como provisional.
- **Marcas:** sustituir por las que venda de verdad.
- **Preguntas frecuentes:** respuestas genéricas; revisarlas con el titular. Llevan datos estructurados FAQPage para Google.

## Estado abierto/cerrado

`js/site.js` calcula con la hora del dispositivo del visitante si la farmacia está abierta, marca el día de hoy en la tabla de horario y se actualiza cada minuto. No contempla festivos ni guardias.

## Pendiente de validar con el titular

- Logo propio (ahora es una cruz genérica).
- Servicios reales (análisis, fórmulas magistrales, SPD, dermocosmética…) y fotos del interior o del equipo.
- Festivos y guardias, y WhatsApp si lo tienen.
