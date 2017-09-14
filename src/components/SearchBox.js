import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ActionSearch from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField';

import { cyan500 } from 'material-ui/styles/colors';

@inject('store')
@observer
class SearchBox extends Component {

    constructor (props) {
        super(props);

        this.store = this.props.store;
    }
    
    filter (e) {
        this.store.setFilter(e.target.value);
    }

    render() {

        return (
            <div className="search-box">
                <div className="search-icon">
                    <ActionSearch color={cyan500} />
                </div>
                <div className="search-input">
                    <TextField
                        hintText="Ingrese el nombre a buscar.."
                        floatingLabelText="Busqueda de contacto"
                        fullWidth={true}
                        value={this.store.filter}
                        onChange={this.filter.bind(this)}
                        />
                </div>
            </div>
        );
    }
}

export default SearchBox;