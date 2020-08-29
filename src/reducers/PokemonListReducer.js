const InitialState = {
  isLoading: true,
  data: [],
  errorMsg: "",
  // nameArr: [],
  count: 0,
};

const PokemonListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        // nameArr: action.names,
        errorMsg: '',
        count: action.payload.count,
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
