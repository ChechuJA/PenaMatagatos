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

Con la carne BBQ de Carnicería Loli ya registrada:

- Comida: `782,67 EUR`.
- Bebida: `901,04 EUR`.
- Menaje: `169,87 EUR`.
- Generales dentro del bote: regalo del dueño `60,00 EUR`.
- Ingreso extra del bote: devolución de sillas `50,00 EUR`, posteriormente gastada en compras de 2026.
- Gasto bruto del bote confirmado: `1.913,58 EUR`.
- Bote de fiestas: `1.940,00 EUR` (`1.860,00 EUR` de cuotas efectivas sin Álvaro + `30,00 EUR` de Laura + `50,00 EUR` devueltos de sillas). Dinero global recibido contando altavoces: `2.005,00 EUR`.
- Cuotas cobradas para el bote: `0,00 EUR`; los `65,00 EUR` de Álvaro se aplicaron a altavoces, no a su cuota.
- Saldo de caja actual: `-1.833,58 EUR` (`30,00 EUR` aportados por Laura - `1.863,58 EUR` gastados).
- Saldo teórico/final del bote de fiestas: `26,42 EUR`.
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
