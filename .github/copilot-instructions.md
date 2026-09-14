# Instrucciones compartidas Peña Matagatos

Estas reglas son la fuente operativa común para los agentes de Copilot que trabajan con las fiestas.

## Fuentes canónicas 2026

- Lista operativa de asistentes y bebidas: `fiestas-2026-bebidas.json`.
- Plan y persona-días: `fiestas-2026-plan-bebida.md`.
- Compra real, fotos, facturas, albaranes y tickets normalizados: `Fiestas/2026/comprareal/`.
- Cuentas consolidadas: `historico/2026/gastos-2026.json`.
- Resumen público: `docs/index.md`, publicado por MkDocs en `resumen-2026/`.
- Memoria de criterios: `/memories/repo/fiestas-conventions.md`.

## Censo y asistencia

No mezclar estas tres magnitudes:

- **30 miembros oficiales** de la peña. Pagan las derramas generales, vayan o no a las fiestas.
- **29 asistentes en 2026**: 28 miembros oficiales y Andreas como invitado extra.
- Juanvi y Lucía son miembros oficiales, pero no asistieron en 2026. Andreas no es miembro oficial.

Las derramas de altavoces, mesas, carpas, paelleras, mobiliario y otros bienes generales se dividen entre los 30 miembros oficiales, no entre asistentes ni invitados.

## Persona-días

`101 persona-días` es la suma de los días de asistencia de las 29 personas que acudieron. No significa 101 personas ni 101 cuotas. Sirve para estimar consumo de bebida; las cuotas se calculan por persona según el tramo de asistencia.

## Licoreo: conciliación real 2026

Usar siempre la conciliación guardada en el ticket `licoreo-bebida-2026-08-26` de `Fiestas/2026/comprareal/tickets-bebida.json`:

| Dato | Valor |
|---|---:|
| Total impreso en factura | 835,89 EUR |
| Pago final anotado a mano | 834,00 EUR |
| Devolución posterior por transferencia | 24,00 EUR |
| Coste neto real | 810,00 EUR |
| Cutty Sark pedido | 3 botellas de 70 cl |
| Cutty Sark recibido | 2 botellas de 1 litro |
| Estrella Galicia recibida | 12 cajas de 20 cl en vez de 25 cl |

El importe de `810,00 EUR` es el que entra en las cuentas reales. No usar como coste real los importes antiguos de `932,67 EUR`, `908,67 EUR` ni `830,00 EUR`. Los importes de presupuestos y comparativas pueden conservarse como referencia, pero deben etiquetarse como bruto/documento de referencia, no como coste neto pagado.

## Totales actuales

Con la carne BBQ de Carnicería Loli y la compra grande de hielo ya registradas:

- Comida: `782,67 EUR`.
- Bebida: `901,04 EUR`.
- Menaje: `230,37 EUR`.
- Generales dentro del bote: regalo del dueño `60,00 EUR`.
- Ingreso extra del bote: devolución de sillas `50,00 EUR`, posteriormente gastada en compras de 2026.
- Gasto bruto del bote confirmado: `1.974,08 EUR`.
- Bote de fiestas: `1.940,00 EUR` (`1.860,00 EUR` de cuotas efectivas sin Álvaro + `30,00 EUR` de Laura + `50,00 EUR` devueltos de sillas). Dinero global recibido contando altavoces: `2.005,00 EUR`.
- Cuotas cobradas para el bote: `0,00 EUR`; los `65,00 EUR` de Álvaro se aplicaron a altavoces, no a su cuota.
- Saldo de caja/final del bote: `-34,08 EUR` (`1.940,00 EUR` efectivos - `1.974,08 EUR` gastados).
- Saldo final del bote de fiestas: `-34,08 EUR`.
- Derramas generales fuera del bote: altavoces `207,38 EUR`, repartidas entre 30 miembros, `6,91 EUR` por miembro.
- Laura aporta `30,00 EUR` en dinero al bote de 2026; se registra como ingreso monetario cobrado y se utiliza para financiar compras nuevas, no como ingreso en especie.

## Publicación y cambios

Cuando se modifiquen cifras, actualizar la fuente estructurada y el resumen público, no solo una frase suelta:

1. Actualizar el JSON normalizado o `historico/2026/gastos-2026.json`.
2. Actualizar `docs/index.md` con tablas trazables y enlaces a evidencias.
3. Si cambia la interfaz pública, mantener enlaces relativos que funcionen bajo `https://matagatos.ddns.net/resumen-2026/`.
4. Validar los JSON y ejecutar `python -m mkdocs build --clean` usando `.venv` si está disponible.
5. No borrar documentos originales: las fotos y facturas de `Fiestas/2026/comprareal/` son la evidencia visual.

Las tablas públicas deben distinguir siempre importe impreso, pago real, devoluciones y coste neto cuando exista una conciliación.

## Fuentes canónicas 2027

- Plan de bebida: `Fiestas/2027/plan-bebida.html` (públicamente en web).
- Sobrantes 2026 a usar como primer filtro: `Fiestas/index.html#sobrantes-2026`.
- Aprendizajes de 2026: sección 7 de `Fiestas/2027/plan-bebida.html`.
- Archivo original de sobrantes 2026: `historico/2026/sobras-2026.md`.

## Aprendizajes clave 2026 → 2027

### Crítico: lo que faltó en 2026
- **Coca-Cola Zero:** faltaron 2 botellas. **Obligatorio reforzar en 2027.**
- **Sprite:** faltó 1 botella. **Revisar stock de 2026 y comprar si es necesario.**
- **Mantel:** se gastó 1,5 rollos. **Comprar 2 rollos para 2027.**

### Comida: ajustes de cantidad para 2027
- **Embutidos:** pedir media caña de chorizo + media de salchichón (no enteras).
- **Lomo:** de dos medias de 2026, coger solo una en 2027.
- Con estos ajustes, el gasto en comida cuadrará mejor.

### Stock disponible 2026 (revisar ANTES de comprar 2027)
Usar como primer filtro antes de hacer compra nueva:
- **Cerveza y refrescos:** Mahou 0,0 (36 u), agua con gas (15), Coca-Cola original (8), Estrella 0,0 (4), Aquarius, La Casera, Schweppes, Fanta, etc.
- **Alcohol:** Ron Barceló (6), Seagrams (5), Cutty Sark, Larios, licores y vinos (revisar caducidades).
- **Menaje:** ~230 platos, ~150 vasos de cubata, ~175 cucharas, ~100 cuchillos, 48 bandejas aluminio.
- **Comida:** embutidos variados, jamón, bacon (3 paquetes), judías verdes, 71 cápsulas de café, sal.

### Escenario base 2027: 120–130 persona-días
2026 fue 101 persona-días. Escenario realista para 2027 es 120–130. No comprar para "30 personas todos los días".

## Configuración de agentes

Modelo por defecto para los agentes coordinadores de fiestas: **Claude Haiku 4.5**

Los siguientes agentes usan Haiku 4.5 como modelo por defecto para coordinación rápida y eficiente:
- `bebidas-matagatos`: Análisis de consumo y cálculo de compra de bebidas.
- `cuentas-cuotas`: Cálculo de bote y balances por persona.
- `precios-proveedores`: Comparativa de precios entre proveedores.
- `coordinador-fiestas`: Coordinador central que integra resultados de agentes especializados.
