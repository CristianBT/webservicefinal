export interface i_ui_state {
    loading?: boolean;
}

export interface i_ui_action {
    type: string;
    payload?: i_ui_state
}