import React, { useRef } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { customStylespdf } from '../../helpers/modal';
import i_redux from '../../intefaces/reduxInterface';
import PDFObject from 'pdfobject';
import { clearPdf } from '../../actions/pdf';

const ModalPDF = () => {

    const refdiv = useRef<any>()

    const dispatch = useDispatch();

    const { openModal, urlString } = useSelector((info:i_redux) => info.pdf);

    const closeModal = () => {
        dispatch(clearPdf());
    }

    const afterOpenModal = () => {
        const input = refdiv.current as HTMLDivElement;
        urlString && PDFObject.embed(urlString,input, {
            width: "85vw",
            height: "85vh"
        })
    }

    return <>
        <Modal
            isOpen={ openModal }
            ariaHideApp={ false }
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStylespdf}
            contentLabel="Reporte pdf"
        >
            <div ref={refdiv}></div>
        </Modal>
    </>
}

export default ModalPDF;