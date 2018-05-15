import { Reducer } from 'redux';
import { ToggleProposedWorkItemsPaneAction, ToggleProposedWorkItemsPaneType } from './actions';
const reducer: Reducer<boolean> = (state: boolean = false, action: ToggleProposedWorkItemsPaneAction) => {
    switch (action.type) {
        case ToggleProposedWorkItemsPaneType:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;