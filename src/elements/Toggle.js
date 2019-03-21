import React, { Component } from "react";
import Switch from "./Switch";

const ToggleContext = React.createContext();

function ToggleConsumer(props) {
	return (
		<ToggleContext.Consumer>
			{context => {
				if (!context) {
					throw new Error("Toggle compound components must be rendered inside of a Toggle component.");
				}
				return props.children(context);
			}}
		</ToggleContext.Consumer>
	);
}

class Toggle extends Component {
	static On = ({ children }) => <ToggleConsumer>{({ on }) => (on ? children : null)}</ToggleConsumer>;
	static Off = ({ children }) => <ToggleConsumer>{({ on }) => (on ? null : children)}</ToggleConsumer>;
	static Button = ({ props }) => <ToggleConsumer>{({ on, toggle }) => <Switch on={on} onClick={toggle} {...props} />}</ToggleConsumer>;
	toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on));
	state = { on: false, toggle: this.toggle };
	render() {
		return <ToggleContext.Provider value={this.state}>{this.props.children}</ToggleContext.Provider>;
	}
}

export default Toggle;
