class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.recordList = [];
		this.reset();
		this.print(this.times);
	}
	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds:0
		};
	}
	print() {
		this.display.innerText = this.format(this.times);
	}
	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	start() {
		if (!this.running) {
			this.running =true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}
	calculate() {
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
	recordTime() {
		this.recordList.push(this.times);
	}
	resetRecordList() {
		this.recordList = [];
		this.printRecordList();
	}
	printRecordList() {
		let results = document.getElementById('results');
		let resultsListHTML = '';
		for(let i = 0; i < this.recordList.length; i++) {
			let j = i + 1; 
			resultsListHTML += `<li>${j}. ${this.format(this.recordList[i])}</li>`
		}
		results.innerHTML = resultsListHTML;
	}
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.resetTimes());
let resetRecordListButton = document.getElementById('reset-record-list');
resetRecordListButton.addEventListener('click', () => stopwatch.resetRecordList());

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}