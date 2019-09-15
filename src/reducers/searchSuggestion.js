const searchSuggestion = (state = [], action) => {
    switch (action.type) {
        case 'SUGGESTION':
            return action.payload;
        default:
            return state;
    }
}

export default searchSuggestion;