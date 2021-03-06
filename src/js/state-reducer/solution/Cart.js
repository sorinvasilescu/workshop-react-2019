import React from 'react';
import cartReducer, { increaseCartQuantity, decreaseCartQuantity } from './cartReducer';
import { dispatch as cartDispatch } from './Cart';

let dispatch = null;

export default class Cart extends React.Component {
    state = {products: [], currency: 'RON'};

    dispatch = (action, callback) => {
        this.setState(cartReducer(action), callback);
    };

    componentDidMount () {
        dispatch = this.dispatch;
    }

    render () {
        return <div style={{border: '1px solid black', padding: '5px'}}>
            <div>Shooping cart</div>
            <ul>
                {
                    this.state.products.map((entry) => {
                        return <li key={entry.product.id}>
                            <span>{entry.product.name} </span>
                            <span>(
                                <span>{entry.quantity} buc </span>
                                <a href={"javascript://"} onClick={()=>cartDispatch(increaseCartQuantity(entry.product))}>[+]</a> | <a href={"javascript://"} onClick={()=>cartDispatch(decreaseCartQuantity(entry.product))}>[-]</a>
                            ) </span>
                            <span>{entry.value}{this.state.currency}</span>
                        </li>;
                    })
                }
            </ul>
        </div>;
    }
}

export { dispatch };