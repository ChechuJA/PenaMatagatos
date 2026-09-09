# Resumen 2026

> Apartado nuevo en formato MkDocs para leer de un vistazo la asistencia, la compra y las cuentas de **Fiestas 2026**.  
> Si quieres ir a la zona operativa de siempre, sigue en <a href="../Fiestas/index.html">Fiestas 2026</a>.

<div class="summary-grid">
  <article class="summary-card">
    <p class="summary-label">Asistencia registrada</p>
    <p class="summary-value">29</p>
    <p class="summary-note">Miembros con asistencia y bebida cargadas en la lista actual.</p>
  </article>
  <article class="summary-card">
    <p class="summary-label">Persona-días</p>
    <p class="summary-value">101</p>
    <p class="summary-note">Cota de trabajo usada para planificar la compra del año.</p>
  </article>
  <article class="summary-card">
    <p class="summary-label">Gasto provisional</p>
    <p class="summary-value">1.596,04 €</p>
    <p class="summary-note">Compra real consolidada, incluida la factura de Licoreo y su devolución posterior.</p>
  </article>
  <article class="summary-card">
    <p class="summary-label">Saldo del bote</p>
    <p class="summary-value">+328,96 €</p>
    <p class="summary-note">Pendiente de cerrar la carne de barbacoa y los cobros.</p>
  </article>
</div>

<div class="summary-callout">
  <strong>Lectura rápida:</strong> este resumen unifica lo que ya estaba repartido entre los README, la lista de asistencia/bebida y los JSON de compra real. Para las cifras actuales mandan los datos consolidados de <code>historico/2026/gastos-2026.json</code>; algunas páginas HTML antiguas siguen mostrando un corte anterior.
</div>

## Lo importante en dos minutos

- **La peña tiene 30 miembros oficiales**. La lista de fiestas tiene **29 asistentes**: 28 miembros oficiales y Andreas como invitado extra; Juanvi y Lucía no asistieron.
- El plan de bebida trabaja con **101 persona-días**: se suman los días que estuvo cada una de las 29 personas asistentes. No son 101 personas ni 101 cuotas; es una medida de presencia acumulada para estimar el consumo.
- El bote previsto por cuotas suma **1.925 €**, frente a un gasto provisional de **1.596,04 €**.
- Fuera del bote van los **altavoces (207,38 €)** y el **regalo del dueño (60,00 €)**, que se reparten entre toda la peña.

## 1) Asistencia y bebidas registradas

La tabla base sale de `fiestas-2026-bebidas.json`, que es la lista más cómoda para revisar quién viene y qué bebe cada uno.

| Persona | Asistencia | Bebidas |
|---|---|---|
| Marta | jueves a domingo | cerveza 0,0 casera, Coca-Cola Zero Zero (0,0) |
| Flores | jueves a domingo | cerveza, Seagrams Sprite |
| Chechu | todos los días | cerveza, ron con limón (Ron: Barceló, Brugal Legendario o similar, con limón.) |
| Esmeralda | todos los días | Coca-Cola Zero, Aquarius naranja |
| Josemi | todos los días | cerveza, Legendario limón |
| Eve | todos los días | cerveza, Legendario limón |
| Leti | todos los días | cerveza, Cutty naranja, Coca-Cola Zero |
| Javi | sábado y domingo | cerveza, ginebra con Sprite, Coca-Cola |
| Andreas (extra 2026) | todos los días | gin-tonic |
| Álvaro | jueves a sábado | cerveza, ginebra limón, ginebra tónica |
| Elisa | jueves a sábado | cerveza, ginebra limón |
| Laura | todos los días | cerveza, Coca-Cola, agua |
| Nacho | todos los días | cerveza, Coca-Cola, agua |
| David | jueves a sábado | cerveza, Larios 12 limón |
| Malu | viernes y sábado | Aquarius naranja, Barceló Coca-Cola Zero |
| Ernesto | viernes y sábado | cerveza, gin-tonic Seagrams |
| Cristina | todos los días | cerveza 0,0, Coca-Cola Zero Zero (0,0) |
| Blanca | jueves a sábado | cerveza, ginebra tónica |
| María | jueves, viernes y sábado | cerveza, Coca-Cola, ginebra limón |
| Samuel | viernes y sábado | cerveza, Coca-Cola, ginebra tónica |
| María Rubia | viernes y sábado | cerveza, Cutty limón, Jägermeister |
| Pimen | hasta el sábado por la tarde | agua, Coca-Cola Zero, helados (Trae tortillas o comida preparada si es posible.) |
| Albert | todos los días | cerveza 0,0 sin tostada, Coca-Cola Zero |
| Sonia | jueves a sábado | cerveza 0,0, Coca-Cola Zero Zero (0,0), Aquarius limón, agua |
| Raúl | todos los días | cerveza 0,0, Coca-Cola |
| Edu | viernes y sábado | cerveza Estrella Galicia |
| Helena | viernes y sábado (jueves incógnita) | radler, tinto de verano, Barceló con Coca-Cola Zero |
| Tamara | 2 días | cerveza con gaseosa, Coca-Cola Zero |
| Zara | viernes y sábado | cerveza, Seagrams limón |

### Notas de contexto

- El plan humano (`fiestas-2026-plan-bebida.md`) mantiene separados los 30 miembros oficiales de los 29 asistentes de 2026 y de Andreas, que fue invitado extra.
- **101 persona-días** significa sumar la asistencia individual: por ejemplo, una persona que estuvo 5 días aporta 5 persona-días y una que estuvo 2 días aporta 2. La suma de las 29 personas asistentes da 101 y sirve para estimar bebida; las cuotas se calculan por persona según su tramo de asistencia.
- El pico de consumo sigue concentrado en **viernes y sábado**.

## 2) Compra orientativa antes de salir

La lista general de compra 2026 (`fiestas-2026-lista-compra.json`) ya recoge qué había que comprar, qué se considera cubierto por sobrante y qué material conviene revisar.

| Producto | Cantidad | Estado | Prioridad |
|---|---:|---|---|
| Cerveza normal | 176 botellines 25cl | comprar | alta |
| Cerveza 0,0 | 48 botellines 25cl | comprar completo (caduca, no reutilizar) | alta |
| Coca-Cola normal 2L | 5 botellas 2L | comprar completo (caduca) | alta |
| Coca-Cola Zero 2L | 21 botellas 2L | comprar completo (caduca) | alta |
| Coca-Cola Zero Zero 2L | 12 botellas 2L | comprar completo (caduca); nueva demanda: Marta, Cristina, Sonia | media |
| Aquarius naranja | 26 latas 33cl | comprar | alta |
| Aquarius limón | 6 latas 33cl | comprar | media |
| Agua para beber 1,5L | 60 botellas 1,5L | comprar | alta |
| Agua para cocinar | 2 garrafas | comprar | media |
| Sprite 2L | 6 botellas 2L | comprar completo (caduca); gin+Sprite: Flores, Javi | media |
| Fanta limón 2L (mezclador cubatas) | 19 botellas 2L | comprar completo (caduca) | media |
| Fanta naranja 2L (mezclador cubatas) | 6 botellas 2L | comprar completo (caduca) | media |
| Tónica 1L | 12 botellas 1L | comprar completo (caduca) | media |
| Radler | 6 botellines 25cl | comprar (nuevo 2026: Helena) | baja |
| Tinto de verano 1,5L | 3 botellas 1,5L | comprar (nuevo 2026: Helena) | baja |
| Cutty (naranja/limón) 70cl | 2 botellas | comprar | media |
| Legendario 70cl | 5 botellas | comprar | media |
| Seagrams 70cl | 2 botellas | comprar (revisar estado sobrante: 7) | media |
| Barceló 70cl | 0 botellas | cubierto por sobrante (5, revisar estado) | baja |
| Larios 12 70cl | 0 botellas | cubierto por sobrante (2, revisar estado) | baja |
| Jägermeister 70cl | 1 botella | comprar | baja |
| Hielo | 15 bolsas aprox. | comprar por tramos | alta |
| Papel continuo / kraft | 2 rollos | tener | media |
| Rotuladores gruesos y finos | 1 set | tener | media |
| Pintura / témperas | 1 set | tener | media |
| Pinceles | 1 set | tener | media |
| Toallitas húmedas | 1 paquete | tener | media |
| Vasos / cubiertos / servilletas | 1 stock base | revisar y reponer | media |

### Regla de compra del año

- **Compra = consumo real 2025 × 1,05 − sobrante reutilizable**
- Solo se reutiliza lo que realmente aguanta bien: **cerveza normal y destilados**.
- **Refrescos, tónica y cerveza 0,0 se compran completos**, porque caducan o salen peor de un año para otro.

## 3) Compra real y cuentas del bote

El consolidado actual está en `historico/2026/gastos-2026.json`, alimentado por los JSON de tickets normalizados dentro de `Fiestas/2026/comprareal/`.

### Auditoría de tickets finales

Esta es la tabla de comprobación de la compra real. Los importes de tickets mixtos son solo la parte asignada a la categoría; por eso el mismo documento puede aparecer en varias filas, pero nunca se suma dos veces dentro del total global.

| Fecha | Proveedor | Categoría | Importe normalizado | Evidencia |
|---|---|---|---:|---|
| 26/08/2026 | Licoreo | Bebida | 810,00 € netos | [Factura final](../Fiestas/2026/comprareal/Factura%20Final%20Licoreo%20Matagatos%202026.jpeg) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 31/08/2026 | Merkocash | Comida | 144,08 € | [Foto](../Fiestas/2026/comprareal/Mercocash.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 31/08/2026 | Merkocash | Bebida | 13,05 € | [Foto](../Fiestas/2026/comprareal/Mercocash.jpeg) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 31/08/2026 | Merkocash | Menaje | 86,37 € | [Foto](../Fiestas/2026/comprareal/Mercocash.jpeg) · [JSON menaje](../Fiestas/2026/comprareal/tickets-menaje.json) |
| 31/08/2026 | Alcampo | Comida | 31,44 € | [Foto](../Fiestas/2026/comprareal/Alcampo.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 31/08/2026 | Alcampo | Bebida | 15,48 € | [Foto](../Fiestas/2026/comprareal/Alcampo.jpeg) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 31/08/2026 | Alcampo | Menaje | 0,12 € | [Foto](../Fiestas/2026/comprareal/Alcampo.jpeg) · [JSON menaje](../Fiestas/2026/comprareal/tickets-menaje.json) |
| 31/08/2026 | Mercadona | Comida | 77,37 € | [Foto](../Fiestas/2026/comprareal/Mercadona.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 31/08/2026 | Mercadona | Bebida | 12,35 € | [Foto](../Fiestas/2026/comprareal/Mercadona.jpeg) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 31/08/2026 | Mercadona | Menaje | 2,30 € | [Foto](../Fiestas/2026/comprareal/Mercadona.jpeg) · [JSON menaje](../Fiestas/2026/comprareal/tickets-menaje.json) |
| 31/08/2026 | Diseño (bazar) | Menaje | 61,08 € | [Foto](../Fiestas/2026/comprareal/Diseño%20Chino.jpeg) · [JSON menaje](../Fiestas/2026/comprareal/tickets-menaje.json) |
| 31/08/2026 | Amazon | Bebida | 15,96 € | [Foto](../Fiestas/2026/comprareal/Amazon%20Cerveza%200,0.jpeg) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 02/09/2026 | Amazon | Bebida | 25,20 € | [Pedido](https://amzn.eu/d/0fOtCgQW) · [JSON bebida](../Fiestas/2026/comprareal/tickets-bebida.json) |
| 03/09/2026 | Carnes Javi | Comida | 153,85 € | [Foto embutidos](../Fiestas/2026/comprareal/Embutidos%20Javi.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 03/09/2026 | Carnes Javi | Comida | 8,04 € | [Foto queso](../Fiestas/2026/comprareal/Embutidos%20Javi%20Queso%20sin%20Lactosa.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 03/09/2026 | Mercadona 2 | Comida | 115,95 € | [Foto](../Fiestas/2026/comprareal/Mercadona%202.jpeg) · [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |
| 2026 | Panadería | Comida | 23,40 € | [JSON comida](../Fiestas/2026/comprareal/tickets-comida.json) |

**Totales normalizados:** comida `554,13 €` · bebida `892,04 €` · menaje `149,87 €` · **compra del bote `1.596,04 €`**.

El detalle de cada línea, con cantidad, unidad, precio unitario e importe, está disponible en los JSON finales: [bebida](../Fiestas/2026/comprareal/tickets-bebida.json), [comida](../Fiestas/2026/comprareal/tickets-comida.json), [menaje](../Fiestas/2026/comprareal/tickets-menaje.json), [altavoces](../Fiestas/2026/comprareal/tickets-altavoces.json) y [generales](../Fiestas/2026/comprareal/tickets-generales.json).

### Factura final de Licoreo

<div class="evidence-grid">
  <figure class="evidence-card">
    <a href="../Fiestas/2026/comprareal/Factura%20Final%20Licoreo%20Matagatos%202026.jpeg"><img src="../Fiestas/2026/comprareal/Factura%20Final%20Licoreo%20Matagatos%202026.jpeg" alt="Factura final de Licoreo 2026"></a>
    <figcaption>Total impreso: 835,89 €. Pago final manuscrito: 834,00 €. Haz clic para verla a tamaño completo.</figcaption>
  </figure>
</div>

El total impreso de la factura es `835,89 €`, pero el pago final anotado a mano fue `834,00 €`. Después, Licoreo devolvió `24,00 €` por transferencia por las cajas de Estrella Galicia servidas en 20 cl en vez de 25 cl. El coste neto usado en las cuentas es `810,00 €`. Se pidieron 3 botellas de Cutty Sark de 70 cl y se recibieron 2 botellas de 1 litro.

| Conciliación Licoreo | Dato final |
|---|---:|
| Total impreso en factura | 835,89 € |
| Pago final anotado a mano | 834,00 € |
| Devolución posterior por transferencia | −24,00 € |
| Coste neto real contabilizado | **810,00 €** |
| Cutty Sark pedido | 3 botellas de 70 cl |
| Cutty Sark recibido | 2 botellas de 1 litro |
| Incidencia Estrella Galicia | 12 cajas de 20 cl en vez de 25 cl |

### Tickets y facturas para comprobación visual

| Documento | Vista previa | Descarga |
|---|---|---|
| Merkocash | [Abrir imagen](../Fiestas/2026/comprareal/Mercocash.jpeg) | [JPEG](../Fiestas/2026/comprareal/Mercocash.jpeg) |
| Alcampo | [Abrir imagen](../Fiestas/2026/comprareal/Alcampo.jpeg) | [JPEG](../Fiestas/2026/comprareal/Alcampo.jpeg) |
| Mercadona | [Abrir imagen](../Fiestas/2026/comprareal/Mercadona.jpeg) | [JPEG](../Fiestas/2026/comprareal/Mercadona.jpeg) |
| Diseño (bazar) | [Abrir imagen](../Fiestas/2026/comprareal/Diseño%20Chino.jpeg) | [JPEG](../Fiestas/2026/comprareal/Diseño%20Chino.jpeg) |
| Amazon Mahou 0,0 | [Abrir imagen](../Fiestas/2026/comprareal/Amazon%20Cerveza%200,0.jpeg) | [JPEG](../Fiestas/2026/comprareal/Amazon%20Cerveza%200,0.jpeg) |
| Carnes Javi embutidos | [Abrir imagen](../Fiestas/2026/comprareal/Embutidos%20Javi.jpeg) | [JPEG](../Fiestas/2026/comprareal/Embutidos%20Javi.jpeg) |
| Carnes Javi queso | [Abrir imagen](../Fiestas/2026/comprareal/Embutidos%20Javi%20Queso%20sin%20Lactosa.jpeg) | [JPEG](../Fiestas/2026/comprareal/Embutidos%20Javi%20Queso%20sin%20Lactosa.jpeg) |
| Mercadona 2 | [Abrir imagen](../Fiestas/2026/comprareal/Mercadona%202.jpeg) | [JPEG](../Fiestas/2026/comprareal/Mercadona%202.jpeg) |
| Factura final Licoreo | [Ver en la página](../Fiestas/2026/comprareal/Factura%20Final%20Licoreo%20Matagatos%202026.jpeg) | [JPEG](../Fiestas/2026/comprareal/Factura%20Final%20Licoreo%20Matagatos%202026.jpeg) |

<details class="evidence-disclosure">
  <summary>Mostrar todas las fotos dentro de MkDocs</summary>
  <div class="evidence-grid">
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Mercocash.jpeg" alt="Ticket Mercocash"><figcaption>Mercocash</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Alcampo.jpeg" alt="Ticket Alcampo"><figcaption>Alcampo</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Mercadona.jpeg" alt="Ticket Mercadona"><figcaption>Mercadona</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Diseño%20Chino.jpeg" alt="Ticket Diseño Chino"><figcaption>Diseño Chino</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Amazon%20Cerveza%200,0.jpeg" alt="Pedido Amazon Mahou 0,0"><figcaption>Amazon · Mahou 0,0</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Embutidos%20Javi.jpeg" alt="Ticket Embutidos Javi"><figcaption>Embutidos Javi</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Embutidos%20Javi%20Queso%20sin%20Lactosa.jpeg" alt="Ticket queso sin lactosa"><figcaption>Queso sin lactosa</figcaption></figure>
    <figure class="evidence-card"><img src="../Fiestas/2026/comprareal/Mercadona%202.jpeg" alt="Segundo ticket Mercadona"><figcaption>Mercadona 2</figcaption></figure>
  </div>
</details>

### Resumen por categoría

| Categoría | Importe |
|---|---:|
| Comida | 554.13 € |
| Bebida | 892.04 € |
| Menaje | 149.87 € |

### Ingresos previstos por cuotas

| Ingreso | Importe |
|---|---:|
| Cuotas 2 dias (55 EUR x 8) | 440.00 € |
| Cuotas 3 dias (65 EUR x 9) | 585.00 € |
| Cuotas todos los dias (75 EUR x 12) | 900.00 € |

### Situación del cierre

- **Bote esperado:** 1.925,00 €
- **Gasto provisional registrado:** 1.596,04 €
- **Saldo provisional:** +328,96 €
- **Cobrado de verdad hasta la fecha:** 65,00 € (solo Álvaro)
- **Pendiente de cobro:** 1.860,00 €
- **Pendientes de cerrar:** la carne de barbacoa y el cobro de las cuotas. Licoreo ya está cerrado: pago 834,00 € menos 24,00 € devueltos por transferencia = 810,00 € netos.

### Extras que no salen del bote

| Extra general | Importe |
|---|---:|
| Altavoces y montaje | 207.38 € |
| Regalo del dueño de la peña | 60.00 € |
| **Total** | **267.38 €** |

Eso deja un reparto adicional de **8,91 € por integrante** fuera de las cuotas de fiestas.

## 4) Cómo se está guardando la compra real

> **Regla clave del README de cuentas:** los tickets se mezclan, los datos no.

- Un ticket físico puede tener bebida, comida y menaje a la vez.
- La **foto se guarda una sola vez** en la carpeta de la categoría que más pesa.
- Las **líneas se reparten** entre `tickets-bebida.json`, `tickets-comida.json` y `tickets-menaje.json`.
- Así el resumen final puede sacar cuentas limpias por categoría aunque el ticket original viniera mezclado.

Este criterio es importante porque la página de resumen usa esos JSON normalizados y no las capturas o tablas viejas de HTML.

## 5) Notas internas y cosas aprendidas para 2027

Lo que ya ha quedado apuntado en `historico/2026/README.md`:

- Comprar **más mantel**: en 2026 se gastó un rollo y medio.
- En embutidos, pedir **media caña de chorizo y media de salchichón**.
- De las dos medias de lomo, **coger solo una**.
- Con ese ajuste de embutidos, las cuentas deberían cuadrar mejor.

<details class="recipe-card">
  <summary>Ver receta rápida de la caldereta</summary>
  <ul>
    <li>Carne</li>
    <li>Cebolla</li>
    <li>Pimiento verde</li>
    <li>Laurel</li>
    <li>Tomate triturado pasado por batidora</li>
    <li>Sal</li>
    <li>Media botella de Legend</li>
    <li>2 litros de vino blanco</li>
    <li>Cerveza opcional</li>
  </ul>
  <p><strong>Preparación resumida:</strong> sofreír la carne con sal, añadir el resto bien picado, dejar hacer al menos 3 horas a fuego medio y ajustar la sal al reposar.</p>
</details>

## 6) Fuentes usadas para este apartado

- `fiestas-2026-bebidas.json` → asistentes, asistencia y preferencias.
- `fiestas-2026-plan-bebida.md` → persona-días, reglas de compra y contexto de la reunión.
- `fiestas-2026-lista-compra.json` → lista de compra orientativa y prioridades.
- `Fiestas/2026/comprareal/` → tickets, facturas, albaranes y criterio para tickets mixtos.
- `historico/2026/gastos-2026.json` → cifras provisionales consolidadas de ingresos, gastos y saldo.
- `historico/2026/README.md` → notas internas y aprendizajes para el año siguiente.
