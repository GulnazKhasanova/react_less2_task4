
import styles from  './App.module.css';
import { useState } from 'react';

export const App = () => {


	const [result, setResult] = useState(0);
	const [state, setState]  = useState( '' );

	const buttons = [
		{id:0, name: '0'},
		{id:1, name: '1'},
		 {id:2, name: '2'},
		  {id:3, name: '3'},
		  {id:4, name: '4'},
		  {id:5, name: '5'},
		  {id:6, name: '6'},
		  {id:7, name: '7'},
		  {id:8, name: '8'},
		  {id:9, name: '9'},
		  {id:10, name: '+'},
		  {id:11, name: '-'},
		  {id:12, name: '*'},
		  {id:13, name: '/'},
		  {id:14, name: '='},
		  {id:15, name: 'c'}
	];

	const calc = (expression) => {
  		var func = new Function("return " + expression);
  		return func();
	}

	const updateResult = (action) => {
		 let q = calc(action);
		setState((result + q))
	}


	const inputOnChange = (num) => {
		let value = '';
		buttons.filter(({id,name}) => (id === num ) ? value = name : undefined)

			if (!isNaN(Number(value)))  {
				setState(state => state +''+Number(value))
			}
			if ( value === '/' || value === '*' || value === '+' || value === '-' ){

				setState(state => state +''+value)

			}
			if (value === '=' ){
				updateResult(state)
			}
			if (value === 'c' ) {
				setState('');
			}
		}

	return (
		<div className = {styles.interface}>
		 <label>RESULT</label>
		 <input value={state}
		 		className={styles.interfaceInput}
		 		readOnly
			/>
			<div className={styles.buttonContainer}>
		 		{buttons.map( ({ id, name }) => <button
				onClick={() => {inputOnChange(id)}}
				key={id}
				className={styles.button}>
				{name}
		 		</button>
		 			)}
			</div>
		 <span className={styles.span}>The calculator</span>
		</div>
	)
	}




