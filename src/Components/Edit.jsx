import React, { useState } from 'react';
import Modal from 'react-modal';

const Edit = ({value,edited}) => {
    const [newadd, setNewadd] = useState(value.action);

    const handelSubmit=(e)=>{
        e.preventDefault();
        const editedInput ={
            id:value.id,action:newadd,isDone:value.isDone
        }
 edited(editedInput)
        }
   
    
    //  console.log(newadd);


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return <div>
        <button onClick={openModal}>Edit</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <form onSubmit={handelSubmit}>
                <input type="text"  value={newadd} onChange={(e) => setNewadd(e.target.value)} />
            </form>
        </Modal>

    </div>;
};

export default Edit;
