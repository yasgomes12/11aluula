// index.js
// Pega o container root do HTML
const container = document.getElementById('root');

// Cria uma raiz React para o container
const root = ReactDOM.createRoot(container);

// Renderiza nosso componente App dentro da raiz
// Nota: <App /> é como usamos nosso componente em JSX
root.render(<App />);