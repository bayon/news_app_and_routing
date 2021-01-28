import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../actions/newsAction";

const initialState = {
  articles: [],
  favorites: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      // here is where the payload gets added to the state.
      console.log("action.payload:", action.payload);
      return {
        ...state,
        articles: action.payload,
      };
      break;
    case TOGGLE_FAVORITES:
      //add or remove favorites
      const index = state.favorites.findIndex(
        (article) => article.url === action.payload
      );
      if (index >= 0) {
        //exists
        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return {
          ...state,
          favorites,
        }
      } else {
        // not in favorites
        const article = state.articles.articles.find( article => article.url === action.payload);
        return {
            ...state,
            favorites: state.favorites.concat(article)
        }
      }
    default:
      break;
  }
  return state;
}

/*
News Resource:
https://newsapi.org/
password: forteworksNewsApi1!
SUBSCRIPTION REQUIRED FOR COMMERCIAL USE !
*/
