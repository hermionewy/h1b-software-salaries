
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Axis extends Component {
    constructor(props) {
        super();

        this.axis = d3.axisLeft()
                      .tickFormat((d) => "$"+d3.format(".2s")(d));

        this.update_d3(props);
    }

    componentWillReceiveProps(newProps) {
        this.update_d3(newProps);
    }

    update_d3(props) {
        this.axis
            .scale(props.scale)
            .ticks(props.data.length);

    }

    componentDidUpdate() { this.renderAxis(); }
    componentDidMount() { this.renderAxis(); }

    renderAxis() {
        let node = this.refs.anchor;

        d3.select(node).call(this.axis);
    }

    render() {
        let translate = `translate(${this.props.axisMargin-3}, 0)`;

        return (
            <g className="axis" transform={translate} ref="anchor">
            </g>
        );
    }
}

export default Axis;