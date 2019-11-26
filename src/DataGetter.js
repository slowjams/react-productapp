import React, { Component } from "react";
import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";

export const DataGetter = (dataType, WrappedComponent) => {

    return class extends Component {

        // constructor(props) {
        //     super(props);
        //     console.log("DataGetter constructor")

        // }

        render() {
            return <WrappedComponent {...this.props} />
        }

        componentDidMount() {
            //console.log("DataGetter componentDidMount ")
            this.props.getData(PRODUCTS);
            if (dataType === SUPPLIERS) {
                this.props.getData(SUPPLIERS);
            }
        }
    }
}