class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Controls />
				<Stopwatch />
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
			<div className={"stopwatch"}>{this.format(this.times)}</div>
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

class Controls extends React.Component {
	constructor(props) {
		super();
	}
	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	stop() {
		this.running = false;
		clearInterval(this.watch);
	}
	resetTimes() {
		this.stop()
		this.recordTime();
		this.printRecordList();
		this.reset();
		this.print();
	}
	render () {
		return (
			<nav className="controls">
				<a href="#" className="button" id="start" onClick={this.start()}>Start</a>
				<a href="#" className="button" id="stop" onClick={this.stop()}>Stop</a>
				<a href="#" className="button" id="reset" onClick={this.reset()}>Reset</a>
			</nav>
			)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);