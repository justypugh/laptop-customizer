import React, { Component } from 'react';
import SummaryItems from '../SummaryItems/SummaryItems';
import Total from '../Total/Total';

class Summary extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your Cart</h2>
                {Object.keys(this.props.selected).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const selectedOption = this.props.selected[feature];
                    return (
                        <SummaryItems 
                            key={featureHash}
                            selected={selectedOption}
                            currency={this.props.currency}
                            feature={feature}
                        />
                )})}
                        <Total 
                            selected={this.props.selected} 
                            currency={this.props.currency}
                        />
            </section>
        );
    }
}

export default Summary;