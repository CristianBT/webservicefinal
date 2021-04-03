export interface i_error_state {
    err?: string;
}

export interface i_error_action {
    type: string;
    payload: i_error_state;
}