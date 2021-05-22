const Reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [state.payload, ...state];
        default:
            return state;

    }

}
export default Reducer;