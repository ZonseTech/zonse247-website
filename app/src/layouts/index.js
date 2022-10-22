import Auth from './Auth'
import Guest from './Guest'
import App from './App'
import Exception from './Exception'

// eslint-disable-next-line
export default [
	...App,
	...Auth,
	...Guest,
	...Exception
]
