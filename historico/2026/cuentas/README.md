# Cuentas Fiestas 2026 — Peña Matagatos

Carpeta de cuentas del año en curso. Aquí guardamos **fotos de tickets** y los
**datos normalizados** que usan los agentes. Las estimaciones/presupuestos previos
ya se han retirado: manda la **compra REAL**.

## Estructura
```
cuentas/
├── real_comprado/         Fotos de tickets reales, ordenadas por categoría:
│   ├── bebida/
│   ├── comida/
│   └── menaje/            Vasos, platos, servilletas, hielo, desechables, etc.
├── tickets-bebida.json    Datos normalizados de BEBIDA (reconciliados).
├── tickets-comida.json    Datos normalizados de COMIDA.
├── tickets-menaje.json    Datos normalizados de MENAJE.
├── tickets-altavoces.json GASTO ALTAVOCES de la peña (lo paga TODA la peña, no el bote de fiestas).
└── README.md              Este archivo.
```
La carpeta `../otras_peñas/` guarda presupuestos/albaranes de otras peñas como referencia.

## Regla clave: los tickets se MEZCLAN, los datos NO
Un mismo ticket físico (p. ej. Alcampo) puede llevar bebida + comida + menaje.
- La **foto** se guarda una sola vez, en la carpeta de la categoría que más pese
  (o en `bebida/` por defecto), da igual el orden real del ticket.
- En los **JSON** cada línea se coloca en su categoría correcta, referenciando la
  foto de origen con `foto`. Así un ticket mixto aparece repartido entre varios JSON,
  cada uno con solo sus líneas.

## Cómo añadir un ticket
1. Haz la foto y guárdala en `real_comprado/<categoria>/` con nombre claro
   (ej. `alcampo-2026-08-20.jpg`).
2. Abre el/los JSON de las categorías que toque y añade un bloque de ticket con sus
   líneas (producto, cantidad, unidad, precio_unitario, importe) y `subtotal`.
3. Recalcula `total_categoria`. Los agentes `cuentas-cuotas` y `precios-proveedores`
   leen estos JSON para el balance y la comparación de precios.

## Al cerrar la temporada
Esta carpeta ya vive dentro de `historico/2026/`, así que al terminar las fiestas
queda como archivo del año, igual que `historico/2025/`.

## Estado compra real 2026 (actualizado 2026-09-04)
Cargados **10 tickets** (5 del 31/08, pedido Amazon agua, pan encargado y 3 del 03/09):

| Ticket | Proveedor | Total | Comida | Bebida | Menaje |
|---|---|---|---|---|---|
| Merkocash | La Ardosa S.L. | 243,50 | 144,08 | 13,05 | 86,37 |
| Alcampo | Alcampo Cuenca | 47,04 | 31,44 | 15,48 | 0,12 |
| Mercadona | Mercadona Cuenca | 92,02 | 77,37 | 12,35 | 2,30 |
| Diseño (bazar) | Gran Family Chen S.L. | 61,08 | — | — | 61,08 |
| Amazon | Amazon.es (Mahou 0,0) | 15,96 | — | 15,96 | — |
| Amazon | Amazon.es (S.Pellegrino agua con gas 24x50cl) | 25,20 | — | 25,20 | — |
| Carnes Javi (embutidos) | Jamon a lo Grande SLU | 153,85* | 153,85 | — | — |
| Carnes Javi (queso s/lactosa) | Jamon a lo Grande SLU | 8,04 | 8,04 | — | — |
| Mercadona 2 | Mercadona Cuenca | 115,95 | 115,95 | — | — |
| **Total** | | **786,04** | **554,13** | **82,04** | **149,87** |

*El ticket físico Carnes Javi Fra 062483 suma 213,85 €, pero incluye el **art 6 (60,00 € = regalo dueño de la peña)** que NO es gasto de fiestas: va a `tickets-generales.json`. Aquí solo se computan los 153,85 € de comida. (El pan encargado, 23,40 €, va en el total de comida sin fila propia.)

Notas:
- **Hielo Mercadona**: 1 sola bolsa (2 kg, 1,55 €) para mantener cosas frescas.
  NO forma parte del objetivo de los ~10 sacos de hielo que se compran por otro lado.
  Precio ajustado a 1,55 € para cuadrar el total del ticket (línea borrosa).
- Cerveza Estrella (Alcampo) y Mahou 0,0 (Amazon) registradas como "pack" (el ticket no detalla botellines).
- **Pan 2026**: 18 barras registradas a 1,30 € (2 jueves, 8 viernes, 8 sábado) = 23,40 €.

### Pendiente de meter (avisado 2026-09-01)
Faltan tickets de **carne** (barbacoa) y probablemente el **pedido grueso de bebida**
(cerveza/refrescos/destilados). Los **embutidos** (Carnes Javi) y las **trenzas/repostería**
(Mercadona 2) ya están metidos (03/09/2026).
Cuando lleguen las fotos restantes, añadirlas con el mismo criterio y recalcular `total_categoria`.

### Gasto altavoces 2026 (`tickets-altavoces.json`)
Gastos que paga **toda la peña** (vayan o no a las fiestas), **fuera del bote/cuotas**:

| Concepto | Proveedor | Importe |
|---|---|---|
| Altavoces Vonyx VPS082A (sonido activo 400W, 2x8", BT/USB/micro/soportes) | Mayor Electronics | 160,00 |
| Tacos y bridas (montaje altavoces) | Leroy Merlin | 10,00 |
| Instalación 3 enchufes + yeso + interruptor (mano de obra) | Hippy | 30,00 |
| Redes para colgar altavoces | Amazon | 7,38 |
| **Total altavoces** | | **207,38** |

### Otros extras generales 2026 (`tickets-generales.json`)
Extras que paga **toda la peña**, **fuera del bote/cuotas** (como los altavoces):

| Concepto | Proveedor | Importe |
|---|---|---|
| Regalo dueño de la peña (art 6 ticket Carnes Javi) | Carnes Javi | 60,00 |
| **Total otros extras** | | **60,00** |

Estos importes **no** cuentan para el balance del bote de fiestas; se reparten entre todos los componentes.
