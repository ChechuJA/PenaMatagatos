# Convenciones operativas: Fiestas Peña Matagatos

Memoria de decisiones, criterios y aprendizajes para mantener consistencia en la planificación y gestión de fiestas año a año.

## Censo y magnitudes base

### Definiciones críticas (NO mezclar)
- **30 miembros oficiales**: base del censo, pagan derramas generales (altavoces, mesas, carpas, paelleras, mobiliario).
- **Asistentes efectivos**: los que van a las fiestas en cada año (2026: 29 personas).
- **Persona-días**: suma de días de asistencia (2026: 101 persona-días, NO significa 101 cuotas).
- **Derramas generales**: se reparten entre 30 miembros oficiales, no entre asistentes ni invitados.

### Cuotas de asistencia
- **2 días**: 55€
- **3 días**: 65€
- **Todos los días (4+)**: 75€

## Aprendizajes acumulados por año

### 2026 → 2027

#### ⚠️ Crítico: lo que faltó
1. **Coca-Cola Zero**: faltaron 2 botellas. OBLIGATORIO reforzar en 2027.
2. **Sprite**: faltó 1 botella. Revisar stock de 2026 y completar si es necesario.
3. **Mantel**: se gastó 1,5 rollos. Comprar 2 rollos para 2027.

#### 📊 Comida: ajustes de cantidad
- **Embutidos**: pedir media caña de chorizo + media de salchichón (no enteras).
- **Lomo**: usar solo una media (en 2026 se pidieron dos y sobró).
- **Resultado esperado**: mejor cuadratura de cuentas, menos sobrantes.

#### 📦 Stock disponible 2026 (revisar ANTES de comprar 2027)
**Acción**: usar como primer filtro antes de hacer compra nueva.

**Cerveza y refrescos** (92 u aprox):
- Mahou 0,0: 36 u (Leti se lleva 24)
- Agua con gas: 15
- Coca-Cola original: 8
- Estrella 0,0: 4
- Aquarius, La Casera, Schweppes, Fanta, Tinto de verano

**Alcohol** (18 botellas aprox):
- Ron Barceló: 6
- Seagrams: 5
- Cutty Sark, Larios 12, Puerto de Indias, Tanqueray, licores, vinos
- ⚠️ Revisar caducidades antes de usar

**Menaje** (700+ piezas):
- Platos: ~230 u (varios tamaños)
- Vasos de cubata: ~150
- Cucharas: ~175
- Cuchillos: ~100
- Tenedores: 15
- Bandejas aluminio: 48 u
- Bols (pequeños/medianos): 60 u

**Comida**:
- Embutidos variados: 2 blister
- Jamón: 2 blister
- Bacon: 3 paquetes
- Judías verdes: 2
- Café (cápsulas): 71 u (descafeinado, con leche, intenso)
- Sal: 1 paquete

#### 📈 Escenario de persona-días para 2027
- 2026 real: 101 persona-días
- 2027 conservador: 110–120
- 2027 realista: 120–130 ← **RECOMENDADO**
- 2027 máximo: 140–150

**Regla**: no comprar para "30 personas todos los días". Usar 120–130 como referencia base.

#### 🛒 Estimación de compra 2027 (base 120–130 persona-días)
- Cerveza normal: 160–200 u
- Cerveza 0,0: 35–45 u
- Coca-Cola Zero: 30–40 u (reforzar respecto a 2026)
- Coca-Cola original: 10–15 u
- Agua: 60–75 botellas
- Aquarius / refrescos varios: 20–30 u
- Mezcladores (limón, hielo): 20–30
- Ginebra y mezclas: 10–15 botellas
- Ron / whisky / licores: 8–12 botellas
- Hielo: 10–15 bolsas
- Menaje: revisar stock previo antes de comprar

#### 🎯 Puntos críticos para no quedarse corto
1. **Coca-Cola Zero y Sprite**: reforzar OBLIGATORIAMENTE.
2. **Cerveza (normal y 0,0)**: base del consumo.
3. **Agua**: comprar más de lo que parece necesario.
4. **Ginebra y mezcladores**: si se mueve mucho por la noche, puede agotarse.
5. **Mantel**: 2 rollos mínimo.

#### ✅ Checklist operativo 2027
1. Revisar tabla de sobrantes 2026 y comprobar caducidades.
2. Restar del presupuesto lo que ya hay.
3. Comprar OBLIGATORIAMENTE: Coca-Cola Zero, Sprite, mantel.
4. Ajustar embutidos y lomo según especificaciones.
5. Comprar lo que falte según escenario 120–130 persona-días.

## Estructura de datos y publicación

### Fuentes canónicas (siempre actualizar)
- JSON: `fiestas-YYYY-bebidas.json`, `historico/YYYY/gastos-YYYY.json`
- HTML público: `Fiestas/YYYY/plan-bebida.html` y `Fiestas/index.html`
- Markdown: `docs/fiestas-YYYY.md`, `historico/YYYY/sobras-YYYY.md`
- Evidencia: fotos y facturas en `Fiestas/YYYY/comprareal/`

### Regla de publicación
Cuando cambien cifras, actualizar SIEMPRE:
1. Fuente JSON estructurada.
2. Documento público (tablas con enlaces a evidencia).
3. Si hay conciliación (factura ≠ pago real), distinguir siempre: importe impreso, pago real, devoluciones, coste neto.
4. Validar JSON y ejecutar `mkdocs build --clean`.
5. **Nunca borrar** documentos originales (fotos, facturas = prueba).

## Configuración de agentes para coordinación

**Modelo por defecto**: Claude Haiku 4.5

**Agentes especializados**:
- `bebidas-matagatos`: análisis de consumo, cálculo de cantidades.
- `cuentas-cuotas`: bote, cuotas, balances por persona.
- `precios-proveedores`: comparativa de precios, coste total.
- `coordinador-fiestas`: enrutamiento de tareas, integración de resultados.

**Flujo típico de coordinación**:
1. `bebidas-matagatos` → cantidades
2. `precios-proveedores` → coste total
3. `cuentas-cuotas` → balance final
4. Integración y publicación

## Notas para mantenimiento

- **Revisar anualmente**: asistencia esperada, patrones de consumo por día, nuevas ofertas de proveedores.
- **Conservar memoria**: los criterios de embutidos, lomo, mantel, Coca-Cola Zero son resultado de prueba y error; no cambiar sin datos.
- **Sobrantes = ahorro**: usar stock previo es política explícita; revisar ANTES de comprar siempre.
- **Persona-días es clave**: es la mejor métrica para ajustar compras sin sobreestimar.
