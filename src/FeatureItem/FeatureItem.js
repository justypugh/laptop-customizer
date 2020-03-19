import React, { Component } from 'react';
import Item from '../Item/Item';
import slugify from 'slugify';

class FeatureItem extends Component {
    render() {
        return (
            <fieldset key={this.props.featureHash} className="feature">
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                <Item 
                    name={slugify(this.props.feature)}
                    feature={this.props.feature}
                    features={this.props.features}
                    selected={this.props.selected}
                    select={this.props.select}
                    currency={this.props.currency}
                    onChange={() => this.props.select(this.props.feature, window.name)}
                />
            </fieldset>
        )
    }
}

export default FeatureItem;