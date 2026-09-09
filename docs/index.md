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
    <p class="summary-value">1.718,71 €</p>
    <p class="summary-note">Compra real consolidada registrada hasta el 04/09/2026.</p>
  </article>
  <article class="summary-card">
    <p class="summary-label">Saldo del bote</p>
    <p class="summary-value">+206,29 €</p>
    <p class="summary-note">Pendiente de cerrar carne de barbacoa, Licoreo final y cobros.</p>
  </article>
</div>

<div class="summary-callout">
  <strong>Lectura rápida:</strong> este resumen unifica lo que ya estaba repartido entre los README, la lista de asistencia/bebida y los JSON de compra real. Para las cifras actuales mandan los datos consolidados de <code>historico/2026/gastos-2026.json</code>; algunas páginas HTML antiguas siguen mostrando un corte anterior.
</div>

## Lo importante en dos minutos

- **La peña son 30 integrantes**, pero la lista de asistencia actual tiene **29 personas con días asignados**.
- El plan de bebida trabaja con **101 persona-días** y una regla muy simple: comprar conservador, reutilizar solo lo que aguanta y dejar apenas un **~5% de sobrante**.
- El bote previsto por cuotas suma **1.925 €**, frente a un gasto provisional de **1.718,71 €**.
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
| Andreas | todos los días | gin-tonic |
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

- El plan humano (`fiestas-2026-plan-bebida.md`) añade un integrante más (**Lucía**) pendiente de confirmar, por eso aparece la discrepancia **29 asistentes registrados vs 30 integrantes de la peña**.
- La estimación operativa que se estaba usando para compra y cuotas es de **101 persona-días**.
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

El consolidado actual está en `historico/2026/gastos-2026.json`, alimentado por los JSON de tickets normalizados dentro de `historico/2026/cuentas/`.

| Concepto | Origen | Importe |
|---|---|---:|
| Merkocash (mixto) | Merkocash (La Ardosa S.L.) | 243.50 € |
| Alcampo (mixto) | Alcampo Cuenca | 47.04 € |
| Mercadona (mixto) | Mercadona Cuenca | 92.02 € |
| Diseno (bazar) | Gran Family Chen S.L. | 61.08 € |
| Amazon (Mahou 0,0) | Amazon.es | 15.96 € |
| Amazon (S.Pellegrino agua con gas 24x50cl) | Amazon.es | 25.20 € |
| Carnes Javi (embutidos) | Carnes Javi (Jamon a lo Grande SLU) | 153.85 € |
| Carnes Javi (queso sin lactosa) | Carnes Javi (Jamon a lo Grande SLU) | 8.04 € |
| Mercadona 2 (trenzas y reposteria) | Mercadona Cuenca | 115.95 € |
| Panaderia (pan encargado, 18 barras) | Panaderia | 23.40 € |
| Licoreo (pedido grueso de bebida, IVA incl.) | Distribuciones y Logistica Licoreo, S.L. | 932.67 € |

### Resumen por categoría

| Categoría | Importe |
|---|---:|
| Comida | 554.13 € |
| Bebida | 1014.71 € |
| Menaje | 149.87 € |

### Ingresos previstos por cuotas

| Ingreso | Importe |
|---|---:|
| Cuotas 2 dias (55 EUR x 8) | 440.00 € |
| Cuotas 3 dias (65 EUR x 9) | 585.00 € |
| Cuotas todos los dias (75 EUR x 12) | 900.00 € |

### Situación del cierre

- **Bote esperado:** 1.925,00 €
- **Gasto provisional registrado:** 1.718,71 €
- **Saldo provisional:** +206,29 €
- **Cobrado de verdad hasta la fecha:** 65,00 € (solo Álvaro)
- **Pendiente de cobro:** 1.860,00 €
- **Pendientes de cerrar:** la carne de barbacoa y el cuadrado final del pedido grueso de Licoreo

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
- `historico/2026/cuentas/README.md` → criterio para tickets mixtos y estructura de compra real.
- `historico/2026/gastos-2026.json` → cifras provisionales consolidadas de ingresos, gastos y saldo.
- `historico/2026/README.md` → notas internas y aprendizajes para el año siguiente.
