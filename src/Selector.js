import React, { Component } from "react";
import {
    BrowserRouter as Router, Link, Route, Switch,
    Redirect, NavLink, withRouter, Prompt
} from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";
import { RouteInfo } from "./routing/RouteInfo";
import { ToggleLink } from "./routing/ToggleLink";
import { CustomPrompt } from "./routing/CustomPrompt";
import { RoutedDisplay } from "./routing/RoutedDisplay";


//const RouteInfoHOC = withRouter(RouteInfo);

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

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showPrompt: false,
    //         message: "",
    //         callback: () => { }
    //     }
    // }

    // customGetUserConfirmation = (message, navCallback) => {
    //     this.setState({
    //         showPrompt: true, message: message,
    //         callback: (allow) => {
    //             navCallback(allow);
    //             this.setState({ showPrompt: false })
    //         }
    //     });
    // }

    //renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    render() {
        const routes = React.Children.map(this.props.children, child => ({
            component: child,
            name: child.props.name,
            url: `/${child.props.name.toLowerCase()}`,
            datatype: child.props.datatype
        }));

        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        {routes.map(r => <ToggleLink key={r.url} to={r.url}>
                            {r.name}
                        </ToggleLink>)}
                    </div>
                    <div className="col">
                        {/* <CustomPrompt show={this.state.showPrompt}
                            message={this.state.message}
                            callback={this.state.callback} />
                        <Prompt message={loc =>
                            `Hi, do you want to navigate to ${loc.pathname}?`} />
                        <Switch>
                            {routes.map(r => <Route key={r.url} path={r.url}
                                render={() => r.component} />)}
                            <Redirect to={routes[0].url} />                   
                        </Switch> */}
                        <Switch>
                            {routes.map(r =>
                                <Route key={r.url}
                                    path={`/:datatype(${r.datatype})/:mode?/:id?`}                                
                                    component={RoutedDisplay(r.datatype)} />
                            )}
                            <Redirect to={routes[0].url} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}