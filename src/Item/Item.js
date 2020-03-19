import React, { Component } from 'react';
import slugify from 'slugify';

class Item extends Component {
    render() {
        return (
            <div>
                {this.props.features.map((name) =>
                <div key={slugify(JSON.stringify(name))} className="feature__item">
                <input
                    type="radio"
                    id={slugify(JSON.stringify(name))}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={name.name === this.props.selected[this.props.feature].name}
                    onChange={() => this.props.select(this.props.feature, name)}
                />
                <label htmlFor={slugify(JSON.stringify(name))} className="feature__label">
                    {name.name} ({this.props.currency.format(name.cost)})    
                </label>    
                </div>    
                )}
            </div>
        );
    }
}

export default Item;