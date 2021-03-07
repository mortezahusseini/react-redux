import { BUG_added, BUG_removed, BUG_resolved } from "./actionTypes";

export const bugAdded = describtion => ({
    type: BUG_added,
    payload: {
        describtion,
    }
})

export const bugRemoved = id => ({
    type: BUG_removed,
    payload: {
        id,
    }
})

export const bugResolved = id => ({
    type: BUG_resolved,
    payload: {
        id,
    }
})