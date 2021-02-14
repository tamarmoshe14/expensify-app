import authReducer from '../../reducers/auth';

test("should add uid to state", ()=>{
    const action = {type: "LOGIN", uid:"bcd234"}
    const state = authReducer({}, action)
    expect(state).toEqual({uid:"bcd234"})
})

test("should delete uid from state", ()=>{
    const action = {type: "LOGOUT"}
    const state = authReducer({uid: "87989"}, action)
    expect(state).toEqual({})
})
