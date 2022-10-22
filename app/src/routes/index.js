import Auth from './Auth'
import Guest from './Guest'
import Expenses from './Expenses'
import App from './App'

// eslint-disable-next-line
export default [
	...App,
	...Auth,
	...Guest,
	...Expenses
]
