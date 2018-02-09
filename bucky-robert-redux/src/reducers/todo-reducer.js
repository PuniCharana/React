import C from '../constants'

const initialState = [
    {
        id: Date.now(),
        todo: "Pay bill",
        completed: false
    },
    {
        id: Date.now()+9,
        todo: "Buy milk",
        completed: false
    }
];

export default function (previousState=initialState, action) {
    switch (action.type) {
        case C.ADD_TODO:
            return previousState.concat({
                id: Date.now(),
                todo: action.payload.text,
                completed: false
            })
        case C.DELETE_TODO:
            return previousState.filter((item)=>{ return item.id !== action.payload.id });
        default:
            return previousState;
    }
}