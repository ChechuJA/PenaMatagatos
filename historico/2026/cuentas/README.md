# Cuentas Fiestas 2026 — Peña Matagatos

Carpeta de cuentas del año en curso. Aquí guardamos **fotos de tickets**, el
**presupuesto/estimación** y los **datos normalizados** que usan los agentes.

## Estructura
```
cuentas/
├── estimacion/            Presupuestos y estimaciones previas (PDF, capturas).
│   └── MATAGATOS 2026.pdf
├── real_comprado/         Fotos de tickets reales, ordenadas por categoría:
│   ├── bebida/
│   ├── comida/
│   └── menaje/            Vasos, platos, servilletas, hielo, desechables, etc.
├── tickets-bebida.json    Datos normalizados de BEBIDA (reconciliados).
├── tickets-comida.json    Datos normalizados de COMIDA.
├── tickets-menaje.json    Datos normalizados de MENAJE.
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
