// App.js (AGORA com JSX!)
function App() {
    const nome = "Otávio";
    // Isto parece HTML, mas é JSX!
    return (
      <div className="container">
        <h1>Olá {nome}, Bora Aprender com React e JSX!</h1>
        <p>Meu primeiro componente React.</p>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <Agiota/>
      </div>
    );

    function Agiota(){ return (
      <div className="container">
        <h1>Olá {nome}, Bora Pagar as Contas</h1>
        <p>Você tem 2 parcelas de:</p>
        <ul>
          <li>1- R$2000,00</li>
          <li>2- R$2000,00</li>
        </ul>
      </div>
    );}
    // Nota: usamos className em vez de class para CSS.
  }