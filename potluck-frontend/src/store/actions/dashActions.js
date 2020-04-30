import {axiosWithAuth} from '../../utils/axiosWithAuth'

export const FETCH_POTLUCK_START = 'FETCH_POTLUCK_START'
export const FETCH_POTLUCK_SUCCESS = 'FETCH_POTLUCK_SUCCESS'
export const FETCH_POTLUCK_FAILURE = 'FETCH_POTLUCK_FAILURE'

export const FETCH_POTLUCK_BY_ID_START = 'FETCH_POTLUCK_BY_ID_START'
export const FETCH_POTLUCK_BY_ID_SUCCESS = 'FETCH_POTLUCK_BY_ID_SUCCESS'
export const FETCH_POTLUCK_BY_ID_FAILURE = 'FETCH_POTLUCK_BY_ID_FAILURE'

export const POST_POTLUCK_START = 'POST_POTLUCK_START'
export const POST_POTLUCK_SUCCESS = 'POST_POTLUCK_SUCCESS'
export const POST_POTLUCK_FAIL = 'POST_POTLUCK_FAIL'

export const UPDATE_POTLUCK_START = 'UPDATE_POTLUCK_START'
export const UPDATE_POTLUCK_SUCCESS = 'UPDATE_POTLUCK_SUCCESS'
export const UPDATE_POTLUCK_FAIL = 'UPDATE_POTLUCK_FAIL'

export const POTLUCK_DELETE = 'POTLUCK_DELETE'

export const getPotluck = ()=>{
    console.log('Potluck fetching')
      return dispatch => {
        dispatch({ type: FETCH_POTLUCK_START });
        axiosWithAuth()
          .get('/potlucks')//https://potluck-server.herokuapp.com/api
          .then(res => {
            console.log(res)
            dispatch({ type: FETCH_POTLUCK_SUCCESS, payload: res.data });
          })
          .catch(err => {
            dispatch({
              type: FETCH_POTLUCK_FAILURE,
              payload: `Error ${err}: ${err}`
            });
          });
      };
}
export const getPotluckById = (id)=>{
    console.log('PotluckById fetching')
      return dispatch => {
        dispatch({ type: FETCH_POTLUCK_BY_ID_START });
        axiosWithAuth()
          .get(`/potlucks/${id}`)//https://potluck-server.herokuapp.com/api
          .then(res => {
            console.log(res)
            dispatch({ type: FETCH_POTLUCK_BY_ID_SUCCESS, payload: res.data });
          })
          .catch(err => {
            dispatch({
              type: FETCH_POTLUCK_BY_ID_FAILURE,
              payload: `Error ${err.response.status}: ${err.response.data}`
            });
          });
      };
}
export const addPotluck = (item)=>{
    console.log('potluck posting')
    console.log(item)
    return dispatch => {
        dispatch({ type: POST_POTLUCK_START });
        axiosWithAuth()
	      .post("/potlucks", item)
	      .then(res => {
	        dispatch({ type: POST_POTLUCK_SUCCESS, payload: res.data });
	        console.log("success", res);
	      })
	      .catch(err => {
            dispatch({
            type: POST_POTLUCK_FAIL,
            payload: err.response.data
            })
          });
    }
}
export const putPotluck = (item)=>{
    return dispatch =>{
        dispatch({ type: UPDATE_POTLUCK_START });
        axiosWithAuth()
        .put(`/potlucks/${item.id}`, item)
        .then(res=>{
            console.log(res)
            dispatch({ type: UPDATE_POTLUCK_SUCCESS, payload: res.data });
        })
        .catch(err=>{
            console.log(err)
            dispatch({ type: UPDATE_POTLUCK_FAIL, payload: err.data });
        })}
}
export const deletePotluck = (id)=>{
    return dispatch =>{
        axiosWithAuth()
        .delete(`/potlucks/${id}`)
        .then(res => {
            console.log(res)
                dispatch({ type: POTLUCK_DELETE, payload: res.data })
            }
        )
    }
}