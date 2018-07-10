class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { running: false };
		this.reset();
	}
	static defaultProps = {
		display: display
	}
	static propTypes = {
		display: React.PropTypes.object.isRequired
	}
	reset = () => {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds:0
		};
	}
	format = (times) => {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	start = () => {
		if (this.state != running) {
			this.setState({running: true});
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	step = () => {
		if (this.state != running) return;
		this.calculate();
		this.print();
	}
	calculate = () => {
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
	stop = () => {
		this.setState({running = false});
		clearInterval(this.watch);
	}
	resetTimes = () => {
		this.stop()
		this.recordTime();
		this.printRecordList();
		this.reset();
		this.print();
	}
	render () {
		return(
			<div className={"stopwatch"}>this.format(this.time)</div>
			)
	}
}

const stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.getElementById('stopwatch'));

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}