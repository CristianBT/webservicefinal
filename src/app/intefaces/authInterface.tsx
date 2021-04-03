export interface i_auth_state {
    uid: string;
    check?: boolean;
}

export interface i_auth_action {
    type: string;
    payload?: i_auth_state;
}