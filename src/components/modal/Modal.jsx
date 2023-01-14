import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.hendelKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendelKeyDown);
    }

    hendelKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(<div className={css.overlay}>
            <div className={css.modal}>
                {this.props.children}
            </div>
        </div>, modalRoot);
    }
}

export default Modal;

