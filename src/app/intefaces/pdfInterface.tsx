
export interface i_pdf_state {
    urlString?: string;
    openModal: boolean;
}

export interface i_pdf_action {
    type: string;
    payload?:i_pdf_state;
}