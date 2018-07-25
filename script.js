class StopwatchContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			recordList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds:0
			}
		};
		this.reset();
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.resetTimes = this.resetTimes.bind(this);
		this.resetRecordList = this.resetRecordList.bind(this);
	}
	reset() {
		this.setState({times: {
			minutes: 0,
			seconds: 0,
			miliseconds:0
			}});
	}
	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
		if (!this.state.running) {
			this.setState({running: true});
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if (!this.state.running) return;
		this.setState({times: this.calculate()});
	}

	calculate () {
		let times = this.state.times;
		times.miliseconds += 1;
		if (times.miliseconds >= 100) {
				times.seconds += 1;
				times.miliseconds = 0;
		}
		if (times.seconds >= 60) {
				times.minutes += 1;
				times.seconds = 0;
		}
		return (times)
	}

	stop() {
		this.setState({ running: false });
		clearInterval(this.watch);
	}

	resetTimes() {
		this.stop()
		this.recordTime();
		this.reset();
	}

	recordTime() {
		let records = this.state.recordList;
		records.push(this.format(this.state.times));
		this.setState({recordList: records});
	}

	resetRecordList() {
		this.setState({recordList: []});
	}

	render() {
		return (
				<div>
					<Controls onStart={this.start} onStop={this.stop} onReset={this.resetTimes} />
					<Stopwatch times={this.format(this.state.times)} />
					<RecordList recordList={this.state.recordList} onResetRecordList={this.resetRecordList} />
				</div>
				)
	}
}

const Stopwatch = (props) => {
		return <div className={"stopwatch"}>{props.times}</div>
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const Controls = (props) => { 
		return (
			<nav className="controls">
				<a href="#" className="button" id="start" onClick={props.onStart}>Start</a>
				<a href="#" className="button" id="stop" onClick={props.onStop}>Stop</a>
				<a href="#" className="button" id="reset" onClick={props.onReset}>Reset</a>
			</nav>
			)
}

const RecordList = (props) => {
	const listItems = props.recordList.map((record, i) =>
		<li key={i}>{record}</li>
	);
	console.log(listItems.length)
	return(
		<div>
			<ul>{listItems}</ul>
			<div>{listItems.length !== 0 ?
				<a href="#" className="button" id="reset-record-list" onClick={props.onResetRecordList}>Reset records</a> : null }
			</div>
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<StopwatchContainer />
			</div>
			)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);