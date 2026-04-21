const carrito = [];

function agregarAlCarrito(nombre, precio) {
  const existente = carrito.find(i => i.nombre === nombre);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  renderCarrito();
  mostrarToast(`¡${nombre} agregada al carrito! 🍔`);
  abrirCarrito();
}

function quitarDelCarrito(nombre) {
  const idx = carrito.findIndex(i => i.nombre === nombre);
  if (idx === -1) return;
  if (carrito[idx].cantidad > 1) {
    carrito[idx].cantidad--;
  } else {
    carrito.splice(idx, 1);
  }
  renderCarrito();
}

function renderCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalEl = document.getElementById('carrito-total');
  lista.innerHTML = '';

  let total = 0;
  carrito.forEach(item => {
    total += item.precio * item.cantidad;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.nombre} x${item.cantidad}</span>
      <span style="display:flex;align-items:center;gap:0.5rem">
        $${(item.precio * item.cantidad).toLocaleString()}
        <button onclick="quitarDelCarrito('${item.nombre}')" title="Quitar">✕</button>
      </span>`;
    lista.appendChild(li);
  });

  totalEl.textContent = `$${total.toLocaleString()}`;
}

function toggleCarrito() {
  const body = document.getElementById('carrito-body');
  const btn  = document.querySelector('.carrito-toggle');
  const oculto = body.style.display === 'none';
  body.style.display = oculto ? 'block' : 'none';
  btn.classList.toggle('collapsed', !oculto);
}

function abrirCarrito() {
  const body = document.getElementById('carrito-body');
  const btn  = document.querySelector('.carrito-toggle');
  body.style.display = 'block';
  btn.classList.remove('collapsed');
}

function confirmarPedido() {
  if (carrito.length === 0) {
    mostrarToast('Tu carrito está vacío 😅');
    return;
  }
  const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  mostrarToast(`¡Pedido confirmado! Total: $${total.toLocaleString()} ✅`);
  carrito.length = 0;
  renderCarrito();
}

function enviarFormulario(e) {
  e.preventDefault();
  mostrarToast('¡Mensaje enviado! Te contactamos pronto 📩');
  e.target.reset();
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.4)'
    : 'none';
});
