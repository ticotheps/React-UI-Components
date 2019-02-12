import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
	return (
		<div>
			<CalculatorDisplay />
			<div>
				<ActionButton action="clear"/>
				<div>
					<NumberButton text="7" />
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
				<ActionButton action="Zero"/>
			</div>
			<div> 
				<ActionButton action="Division"/>
				<ActionButton action="Multiplication"/>
				<ActionButton action="Subtraction"/>
				<ActionButton action="Addition"/>
				<ActionButton action="Equals"/>
			</div>
		</div>
  );
};

export default App;
