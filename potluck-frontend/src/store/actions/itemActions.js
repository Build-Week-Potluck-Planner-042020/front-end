import {axiosWithAuth} from '../../utils/axiosWithAuth'

export const FETCH_ITEM_START = 'FETCH_ITEM_START'
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS'
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE'

export const POST_ITEM_START = 'POST_ITEM_START'
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS'
export const POST_ITEM_FAIL = 'POST_ITEM_FAIL'

export const UPDATE_ITEM_START = 'UPDATE_ITEM_START'
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAIL = 'UPDATE_ITEM_FAIL'

export const ITEM_DELETE = 'ITEM_DELETE'

export const getItem = ()=>{
    console.log('Potluck fetching')
      return dispatch => {
        dispatch({ type: FETCH_ITEM_START });
        axiosWithAuth()
          .get('/get')
          .then(res => {
            console.log(res)
            dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data });
          })
          .catch(err => {
            dispatch({
              type: FETCH_ITEM_FAILURE,
              payload: `Error ${err.response.status}: ${err.response.data}`
            });
          });
      };
}
export const addItem = (item)=>{
    console.log('postSmurfs posting')
    console.log(item)
    return dispatch => {
        dispatch({ type: POST_ITEM_START });
        axiosWithAuth()
	      .post("/post", item)
	      .then(res => {
	        dispatch({ type: POST_ITEM_SUCCESS, payload: res.data });
	        console.log("success", res);
	      })
	      .catch(err => {
            dispatch({
            type: POST_ITEM_FAIL,
            payload: err.response.data
            })
          });
    }
}
export const putItem = (item)=>{
    return dispatch =>{
        dispatch({ type: UPDATE_ITEM_START });
        axiosWithAuth()
        .put(`/put`, item)
        .then(res=>{
            console.log(res)
            dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data });
        })
        .catch(err=>{
            console.log(err)
            dispatch({ type: UPDATE_ITEM_FAIL, payload: err.data });
        })}
}
export const deleteItem = (id)=>{
    return dispatch =>{
        axiosWithAuth()
        .delete(`/delete/${id}`)
        .then(res => {
            console.log(res)
                dispatch({ type: ITEM_DELETE, payload: res.data })
            }
        )
    }
}