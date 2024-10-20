import { configureStore } from '@reduxjs/toolkit'
import { combineSlices } from '@reduxjs/toolkit'
import { SliceComment } from './Comment/SliceComment'

const Reducer = combineSlices(SliceComment)
export const Store = configureStore({
    reducer : Reducer
})