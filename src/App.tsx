//IMPORT BLOCKS
import Combination from './blocks/Block-Combination/Combination'
import Design from './blocks/Block-Design/Design'
import Header from './blocks/Header/Header'
import Navigation from './blocks/Navigation/Navigation'

//IMPORT STYLES
import '/src/assets/styles/main-style/main.scss'
function App() {
	return (
		<main>
			<Navigation />
			<Header />
			<Design />
			<Combination />
		</main>
	)
}

export default App
