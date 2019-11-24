import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";
import { RouteInfo } from "./routing/RouteInfo";
import { ToggleLink } from "./routing/ToggleLink";


export class Selector extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selection: React.Children.toArray(props.children)[0].props.name
    //     }
    // }

    // setSelection = (ev) => {
    //     ev.persist();
    //     this.setState({ selection: ev.target.name });
    // }

    // render() {
    //     return <div className="container-fluid">
    //         <div className="row">
    //             <div className="col-2">
    //                 {React.Children.map(this.props.children, c =>
    //                     <button
    //                         name={c.props.name}
    //                         onClick={this.setSelection}
    //                         className={`btn btn-block m-2 ${this.state.selection === c.props.name ? "btn-primary active" : "btn-secondary"}`}>
    //                         {c.props.name}
    //                     </button>
    //                 )}
    //             </div>
    //             <div className="col">
    //                 {
    //                     React.Children.toArray(this.props.children)
    //                         .filter(c => c.props.name === this.state.selection)
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // }

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <ToggleLink to="/products">Products</ToggleLink>
                        <ToggleLink to="/suppliers">Suppliers</ToggleLink>
                        <ToggleLink to="/info/match">Match</ToggleLink>
                        <ToggleLink to="/info/location">Location</ToggleLink>
                        <ToggleLink to="/info" exact={true}>All Info</ToggleLink>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" component={ProductDisplay} />
                            <Route path="/suppliers" component={SupplierDisplay} />
                            <Route path="/info/:datatype?" component={RouteInfo} />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}