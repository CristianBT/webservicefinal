import types from '../types';
import { i_ui_action as i_action } from '../intefaces/uiInterface';

export const startLoading = ():i_action => {
    const { startLoading:type } = types;
    return {
        type
    }
}

export const stopLoading = () => {
    const { stopLoading:type } = types;
    return {
        type
    }
}