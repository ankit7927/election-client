import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const Showbloks = () => {
    const [show, setShow] = useState(false);
    const showModel = () => {
        setShow(true)
    }


    return (
        <div>
            <Button class="btn btn-primary btn-lg" variant="primary" onClick={showModel}>
                See Blocks
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>All Blocks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>all blocks will displyed here</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Showbloks