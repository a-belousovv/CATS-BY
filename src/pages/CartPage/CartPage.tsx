import CartBottom from '../../components/blocks/Block-Cart/CartBottom'
import CartTop from '../../components/blocks/Block-Cart/CartTop'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation'

const CartPage = () => {
	return (
		<div className='cart'>
			<Navigation />
			<CartTop />
			<CartBottom />
			<Footer />
		</div>
	)
}

export default CartPage
