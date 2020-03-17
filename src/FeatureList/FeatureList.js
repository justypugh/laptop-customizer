import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';

class FeatureList extends Component {
    render() {
        return(
            <div className="App">
                <h2>Customize Your Laptop</h2>
                {Object.keys(this.props.features).map((feature, index) =>
                    <FeatureItem
                        featureHash={feature + '-' + index}
                        selected={this.props.selected}
                        currency={this.props.currency}
                        key={index}
                        feature={feature}
                        features={this.props.features[feature]}
                        select={this.props.select}
                    />)}
            </div>
        );
    }                    
}

export default FeatureList;