ReactDOM.render(
	<App />,
	document.getElementById('root')
);

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Controls />
				<Stopwatch />
				<Results />
			</div>
			)
	}
}

class Stopwatch extends React.Component {
	constructor(props) {
		super();
		this.state = { running: false };
		this.reset();
	}
	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds:0
		};
	}
	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	step() {
		if (this.state != running) return;
		this.calculate();
		this.print();
	}
	calculate () {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
				this.times.seconds += 1;
				this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
				this.times.minutes += 1;
				this.times.seconds = 0;
		}
	}
	render() {
		return(
			<div className={"stopwatch"}>this.format(this.time)</div>
			)
	}
}
function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const display = document.getElementById('stopwatch');
const stopwatch = React.createElement(Stopwatch(display));
ReactDOM.render(stopwatch, document.getElementById('stopwatch'));
