import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
	return (
		<div id="App">
			<CalculatorDisplay />
			<div>
				<ActionButton action="clear" />
				<div>
					<NumberButton buttonStyle="standardBtn" text="7" />
					<NumberButton buttonStyle="standardBtn" text="8" />
					<NumberButton buttonStyle="standardBtn" text="9" />
				</div>
				<div> 
					<NumberButton buttonStyle="standardBtn" text="4" />
					<NumberButton buttonStyle="standardBtn" text="5" />
					<NumberButton buttonStyle="standardBtn" text="6" />
				</div>
				<div>
					<NumberButton buttonStyle="standardBtn" text="1" />
					<NumberButton buttonStyle="standardBtn" text="2" />
					<NumberButton buttonStyle="standardBtn" text="3" />
				</div>
				<ActionButton action="0" />
			</div>
			<div> 
				<OperatorButton buttonStyle="standardBtn operatorBtn" fontAwesome="fas fa-divide"/>
				<OperatorButton buttonStyle="standardBtn operatorBtn" fontAwesome="fas fa-times"/>
				<OperatorButton buttonStyle="standardBtn operatorBtn" fontAwesome="fas fa-minus"/>
				<OperatorButton buttonStyle="standardBtn operatorBtn" fontAwesome="fas fa-plus"/>
				<OperatorButton buttonStyle="standardBtn operatorBtn" fontAwesome="fas fa-equals"/>
			</div>
		</div>
  );
};

export default App;
