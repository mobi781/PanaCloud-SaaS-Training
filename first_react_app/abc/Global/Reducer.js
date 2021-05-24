const Reducer = (state, action) => {
    switch (action.type) {
        // console.log('action.type :>> ', action.type);
        case "ADD":
            return {
                ...state,
                Transactions: [action.payload, ...state]
            }
        case "DELETE":

            return {
                ...state,
                Transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;

    }

}
export default Reducer;