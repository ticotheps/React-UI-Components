import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
	return (
		<div>
			<CalculatorDisplay />
			<div>
				<ActionButton action="clear" />
				<div>
					<NumberButton buttonStyle="largeBtn" text="7" />
					<NumberButton text="8" />
					<NumberButton text="9" />
				</div>
				<div> 
					<NumberButton text="4" />
					<NumberButton text="5" />
					<NumberButton text="6" />
				</div>
				<div>
					<NumberButton text="1" />
					<NumberButton text="2" />
					<NumberButton text="3" />
				</div>
				<ActionButton action="0" />
			</div>
			<div> 
				<OperatorButton fontAwesome="fas fa-divide"/>
				<OperatorButton fontAwesome="fas fa-times"/>
				<OperatorButton fontAwesome="fas fa-minus"/>
				<OperatorButton fontAwesome="fas fa-plus"/>
				<OperatorButton fontAwesome="fas fa-equals"/>
			</div>
		</div>
  );
};

export default App;
