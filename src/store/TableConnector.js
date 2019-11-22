import { connect } from "react-redux";
import { startEditingProduct, startEditingSupplier } from "./stateActions";
import { deleteProduct, deleteSupplier } from "./modelActionCreators";
import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const TableConnector = (dataType, presentationComponent) => {

    // const mapStateToProps = (storeData) => ({
    //     products: storeData.modelData[PRODUCTS],
    //     suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
    //         ...supp,
    //         products: supp.products.map(id =>
    //             storeData.modelData[PRODUCTS].find(p => p.id === Number(id)) || id)
    //             .map(val => val.name || val)
    //     }))
    // })

    const mapStateToProps = (storeData, ownProps) => {
        console.log('State ***********')
        if (!ownProps.needSuppliers) {
            return { products: storeData.modelData[PRODUCTS] };
        } else {
            return {
                suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
                    ...supp,
                    products: supp.products.map(id =>
                        storeData.modelData[PRODUCTS]
                            .find(p => p.id === Number(id)) || id)
                        .map(val => val.name || val)
                }))
            }
        }
    }

    // const mapDispatchToProps = {
    //     editCallback: dataType === PRODUCTS
    //         ? startEditingProduct : startEditingSupplier,
    //     deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier
    // }

    const mapDispatchToProps = (dispatch, ownProps) => {
        console.log('Dispatch ***********')
        if (!ownProps.needSuppliers) {
            return {
                editCallback: (...args) => dispatch(startEditingProduct(...args)),
                deleteCallback: (...args) => dispatch(deleteProduct(...args))
            }
        } else {
            return {
                editCallback: (...args) => dispatch(startEditingSupplier(...args)),
                deleteCallback: (...args) => dispatch(deleteSupplier(...args))
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}