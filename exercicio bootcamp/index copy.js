const container = document.getElementById("app");

/*
const titulo = document.createElement("h1");
// <h1></h1>

titulo.innerHTML = "Esse titulo foi criado com JS";

container.appendChild(titulo);

*/

function Titulo(props) {
    return (
        <div>
            <h1>{props.texto}</h1>
            <h2>Esse titulo foi criado com React2</h2>


        </div>
        
    );   
}

function Titulos() {
    return (

        <div>
            <Titulo texto="Eu sou o primeiro titulo"></Titulo>
            <Titulo texto="Eu sou o segundo titulo"></Titulo>


        </div>
        
    )
}

ReactDOM.render(Titulos(),container);

