export const FETCH_ARTICLES = "FETCH_ARTICLES"
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"


// export const fetchArticles = () => {
//     return {
//         type: FETCH_ARTICLES,
//         payload: {id: 1, title: 'SPorts News', description:'A sports page.'}
//     }
// }

//CONVERTS TO 
export const fetchArticles = () => {
    return async dispatch => {
        //logic to fetch data 
        console.log('process.env.REACT_APP_NEWSAPI_KEY::',process.env.REACT_APP_NEWSAPI_KEY)
        const result = await fetch('http://newsapi.org/v2/everything?q=tesla&from=2020-12-28&sortBy=publishedAt&apiKey=d0d92986ef7c4030b8f6b3746d3aae17')
        const resultData = await result.json();
        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
       
    }
}

export const toggleFavorites = url => {
    return {
        type:TOGGLE_FAVORITES,
        payload: url
    }
}