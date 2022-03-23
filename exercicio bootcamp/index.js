const container = document.getElementById("app");

function Votacao(props) {

    // let contador = 0;
    const [contador, setContador] = React.useState(0);

    function votarMais() {
        setContador(contador+1);
        console.log(contador);    // console log apenas registra no log o valor da variavel
    }

    function votarMenos() {
        setContador(contador-1);
        console.log(contador);
    }

    return (
        <div>
            <h3>{props.titulo}</h3>
            Votos: {contador}  <br />
            <button onClick={votarMenos}>-</button>  
            <button onClick={votarMais}>+</button>  

        </div>
    );
}

function App() {
    return (

        <div>
            <Votacao titulo="Lua Nova" />
            <Votacao titulo="dois filhos de francisco" />
            <Votacao titulo="batman" />
            <Votacao titulo="gente grande" />
        </div>
        
    );
}

ReactDOM.render(App(),container);  // precisa passar pelo intermediario app
