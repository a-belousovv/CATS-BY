import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import ComplexItemPage from './pages/ComplexItemPage/ComplexItemPage'
import CartPage from './pages/CartPage/CartPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/:id/:itemId',
		element: <ComplexItemPage />,
	},
	{
		path: '/cart',
		element: <CartPage />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
