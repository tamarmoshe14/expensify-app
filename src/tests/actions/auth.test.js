import { login, logout } from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase';

test("should generate login action object", ()=>{
    const action = login("123abc")
    expect(action).toEqual({
        type: 'LOGIN',
        uid:"123abc"
    })
})

test("should generate logout action object", ()=>{
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT',
    })
})