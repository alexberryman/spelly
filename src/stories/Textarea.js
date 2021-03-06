import React from 'react';
import Form from 'react-bootstrap/Form';

function Textarea({value}) {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} value={value} placeholder={'Enter your message to have it converted to emojis'}/>
            </Form.Group>
        </Form>
    );
}

export default Textarea;