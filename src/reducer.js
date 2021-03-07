import { BUG_added, BUG_removed, BUG_resolved } from "./actionTypes"

let lastId = 0

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_added:
            return [
                ...state,
                {
                    id: ++lastId,
                    describtion: action.payload.describtion,
                    resolved: false
                }
            ]
        case BUG_removed:
            return state.filter(bug => bug.id !== action.payload.id)
        case BUG_resolved:
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
        default: 
            return state
    }
}