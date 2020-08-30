import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease'
import { Animate } from 'react-move'

export default class Stripes extends Component {
    state = {
        stripes: [
            {
                background: '98c5e9'
            },
            {
                background: '#ffffff'

            },
            {
                background: '98c5e9'

            }
        ]
    }
    showStripes = () => {
        this.state.stripes.map((stripe, i) => (
            <Animate
                key={i}
                show={true}
                start={{
                    background: '#ffffff'
                }}
                enter={{
                    background: [stripe.background]
                }}>
                {({ background }) => {
                    return (
                        <div className="stripe"
                            style={{ background }}></div>
                    )
                }}
            </Animate>
        ))
    }

    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}

            </div>
        )
    }
}
