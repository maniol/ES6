'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.state = { running: false };
		_this.reset();
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'reset',
		value: function reset() {
			this.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: 'format',
		value: function format(times) {
			return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: 'step',
		value: function step() {
			console.log('magda');
			if (this.state != running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: 'calculate',
		value: function calculate() {
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
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Controls, { running: this.state.running }),
				React.createElement(
					'div',
					{ className: "stopwatch" },
					this.format(this.times)
				)
			);
		}
	}]);

	return Stopwatch;
}(React.Component);

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var Controls = function (_React$Component2) {
	_inherits(Controls, _React$Component2);

	function Controls(props) {
		_classCallCheck(this, Controls);

		return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this, props));
	}

	_createClass(Controls, [{
		key: 'start',
		value: function start() {
			var _this3 = this;

			console.log(this.props.running);
			if (!this.props.running) {
				this.props.running = true;
				this.watch = setInterval(function () {
					return _this3.step();
				}, 10);
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.props.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: 'resetTimes',
		value: function resetTimes() {
			this.stop();
			this.recordTime();
			this.printRecordList();
			this.reset();
			this.print();
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'nav',
				{ className: 'controls' },
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'start', onClick: this.start },
					'Start'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'stop', onClick: this.stop },
					'Stop'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'reset', onClick: this.reset },
					'Reset'
				)
			);
		}
	}]);

	return Controls;
}(React.Component);

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Stopwatch, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
