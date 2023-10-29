import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
