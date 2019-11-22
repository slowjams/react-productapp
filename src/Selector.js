import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

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
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active"
                            to="/" >Default URL</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active"
                            to="/products">Products</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active"
                            to="/suppliers">Suppliers</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active"
                            to="/old/data">Old Link</NavLink>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" component={ProductDisplay} />
                            <Route path="/suppliers" component={SupplierDisplay} />
                            <Redirect from="/old/data" to="/suppliers" />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}