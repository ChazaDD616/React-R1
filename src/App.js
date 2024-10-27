import './App.css';
import HolaMundo from './components/componente1.js';
import TarjetaPresentacion from './components/componente2.js';
import Contador from './components/componente3.js';
import './styles.css';
import Formulario from './components/componente5.js'

function App() {
  return (
    	<div className="App">
		<body className='App-body'>
			<div className='componente'>
				<HolaMundo />
        	</div>
			<div className='componente'>
				<TarjetaPresentacion />
			</div>
			<div className='componente'>
				<Contador />
			</div>
			<div className='componente'>
				<Formulario />
			</div>
		</body>
    	</div>
  	);
}

export default App;
