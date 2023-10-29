//IMPORT BLOCKS
import Care from '../blocks/Block-Care/Care'
import Combination from '../blocks/Block-Combination/Combination'
import Comments from '../blocks/Block-Comments/Comments'
import Complex from '../blocks/Block-Complex/Complex'

import Design from '../blocks/Block-Design/Design'
import Gallery from '../blocks/Block-Gallery/Gallery'
import HighPlace from '../blocks/Block-HighPlace/HighPlace'
import Elements from '../blocks/Block-House-Elements/Elements'
import Instruction from '../blocks/Block-Instruction/Instruction'
import Magnetic from '../blocks/Block-Magnetic/Magnetic'
import Photos from '../blocks/Block-Photos/Photos'
import RunLine from '../blocks/Block-RunLine/RunLine'
import Safely from '../blocks/Block-Safely/Safely'
import Social from '../blocks/Block-Social/Social'
import Module from '../blocks/Block-module/Module'
import Footer from '../blocks/Footer/Footer'
import Header from '../blocks/Header/Header'
import Navigation from '../blocks/Navigation/Navigation'

//IMPORT STYLES
import '/src/assets/styles/main-style/main.scss'
const MainPage = () => {
	return (
		<main>
			<Navigation />
			<Header />
			<Design />
			<Combination />
			<Photos />
			<RunLine />
			<HighPlace />
			<Module />
			<Elements />
			<Magnetic />
			<Gallery />
			<Comments />
			<Care />
			<Instruction />
			<Safely />
			<Complex />
			<Social />
			<Footer />
		</main>
	)
}

export default MainPage
