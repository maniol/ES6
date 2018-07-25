"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopwatchContainer = function (_React$Component) {
	_inherits(StopwatchContainer, _React$Component);

	function StopwatchContainer(props) {
		_classCallCheck(this, StopwatchContainer);

		var _this = _possibleConstructorReturn(this, (StopwatchContainer.__proto__ || Object.getPrototypeOf(StopwatchContainer)).call(this, props));

		_this.state = {
			running: false,
			recordList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};
		_this.reset();
		_this.start = _this.start.bind(_this);
		_this.stop = _this.stop.bind(_this);
		_this.resetTimes = _this.resetTimes.bind(_this);
		_this.resetRecordList = _this.resetRecordList.bind(_this);
		return _this;
	}

	_createClass(StopwatchContainer, [{
		key: "reset",
		value: function reset() {
			this.setState({ times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				} });
		}
	}, {
		key: "format",
		value: function format(times) {
			return pad0(times.minutes) + ":" + pad0(times.seconds) + ":" + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			if (!this.state.running) {
				this.setState({ running: true });
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: "step",
		value: function step() {
			if (!this.state.running) return;
			this.setState({ times: this.calculate() });
		}
	}, {
		key: "calculate",
		value: function calculate() {
			var times = this.state.times;
			times.miliseconds += 1;
			if (times.miliseconds >= 100) {
				times.seconds += 1;
				times.miliseconds = 0;
			}
			if (times.seconds >= 60) {
				times.minutes += 1;
				times.seconds = 0;
			}
			return times;
		}
	}, {
		key: "stop",
		value: function stop() {
			this.setState({ running: false });
			clearInterval(this.watch);
		}
	}, {
		key: "resetTimes",
		value: function resetTimes() {
			this.stop();
			this.recordTime();
			this.reset();
		}
	}, {
		key: "recordTime",
		value: function recordTime() {
			var records = this.state.recordList;
			records.push(this.format(this.state.times));
			this.setState({ recordList: records });
		}
	}, {
		key: "resetRecordList",
		value: function resetRecordList() {
			this.setState({ recordList: [] });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Controls, { onStart: this.start, onStop: this.stop, onReset: this.resetTimes }),
				React.createElement(Stopwatch, { times: this.format(this.state.times) }),
				React.createElement(RecordList, { recordList: this.state.recordList, onResetRecordList: this.resetRecordList })
			);
		}
	}]);

	return StopwatchContainer;
}(React.Component);

var Stopwatch = function Stopwatch(props) {
	return React.createElement(
		"div",
		{ className: "stopwatch" },
		props.times
	);
};

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var Controls = function Controls(props) {
	return React.createElement(
		"nav",
		{ className: "controls" },
		React.createElement(
			"a",
			{ href: "#", className: "button", id: "start", onClick: props.onStart },
			"Start"
		),
		React.createElement(
			"a",
			{ href: "#", className: "button", id: "stop", onClick: props.onStop },
			"Stop"
		),
		React.createElement(
			"a",
			{ href: "#", className: "button", id: "reset", onClick: props.onReset },
			"Reset"
		)
	);
};

var RecordList = function RecordList(props) {
	var listItems = props.recordList.map(function (record, i) {
		return React.createElement(
			"li",
			{ key: i },
			record
		);
	});
	console.log(listItems.length);
	return React.createElement(
		"div",
		null,
		React.createElement(
			"ul",
			null,
			listItems
		),
		React.createElement(
			"div",
			null,
			listItems.length !== 0 ? React.createElement(
				"a",
				{ href: "#", className: "button", id: "reset-record-list", onClick: props.onResetRecordList },
				"Reset records"
			) : null
		)
	);
};

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(StopwatchContainer, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
