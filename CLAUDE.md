# BurgerHouse — Landing Page

## Descripción del proyecto
Página web estática de una hamburguesería ficticia llamada **BurgerHouse**. Es un proyecto universitario que simula el sitio de un restaurante con menú interactivo y carrito de compras.

## Tecnologías
- HTML5, CSS3 vanilla, JavaScript vanilla (sin frameworks ni librerías externas)
- Sin backend — todo corre en el navegador
- `package.json` presente pero sin dependencias reales

## Estructura de archivos
```
index.html    — estructura completa de la página (secciones: navbar, hero, features, menú, carrito, nosotros, contacto, footer)
styles.css    — estilos globales con variables CSS (colores, radios, sombras)
app.js        — lógica del carrito y formulario de contacto
package.json  — metadata del proyecto (sin dependencias)
```

## Paleta de colores (variables CSS)
| Variable         | Valor       | Uso                        |
|------------------|-------------|----------------------------|
| `--primary`      | `#e63946`   | Rojo principal (botones, precios, acentos) |
| `--primary-dark` | `#c1121f`   | Hover del primario         |
| `--dark`         | `#1a1a2e`   | Fondo oscuro principal     |
| `--dark2`        | `#16213e`   | Fondo oscuro secundario    |
| `--card-bg`      | `#1e2a3a`   | Fondo de tarjetas          |
| `--text`         | `#f0f0f0`   | Texto principal            |
| `--muted`        | `#aaa`      | Texto secundario/gris      |

## Secciones de la página
- **Navbar** — fija, con efecto de sombra al hacer scroll
- **Hero** — pantalla completa con CTA, emoji flotante animado
- **Features** — 4 características en grid (carne, entrega, ingredientes, calificación)
- **Menú** — 6 hamburguesas en tarjetas con botón "Agregar al carrito"
- **Carrito flotante** — widget fijo en esquina inferior derecha, colapsable
- **Nosotros** — historia del restaurante + estadísticas
- **Contacto** — formulario (nombre, teléfono, email, mensaje) + info del local
- **Footer** — enlaces de navegación

## Lógica principal (app.js)
- `agregarAlCarrito(nombre, precio)` — agrega ítem o incrementa cantidad
- `quitarDelCarrito(nombre)` — decrementa o elimina ítem
- `renderCarrito()` — re-renderiza la lista y el total
- `confirmarPedido()` — limpia el carrito y muestra toast de confirmación
- `enviarFormulario(e)` — previene submit real, muestra toast de éxito
- `mostrarToast(msg)` — notificación emergente temporal (3 segundos)

## Notas importantes
- [COMPLETAR] ¿Es un proyecto para una materia específica? ¿Cuál?
- [COMPLETAR] ¿Tiene requisitos de entrega o funcionalidades pendientes?
- [COMPLETAR] ¿Se planea agregar backend o base de datos?
- [COMPLETAR] ¿El nombre "BurgerHouse" y los datos del restaurante son definitivos o son placeholders?
