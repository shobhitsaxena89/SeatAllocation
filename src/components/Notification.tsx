import * as React from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'

class Notification extends React.Component{

    public render() {
        return (
            <div id='Notification'>                
                        <div>
                            Work From :
                        <ButtonGroup size="lg">
                                <Button className = "button button-success btn-sm">Office 
                                <Badge variant="light">9</Badge>
                                    <span className="sr-only">Seats Left</span>
                                </Button>
                                <Button variant="outline-warning">Home</Button>
                                <Button variant="outline-danger">Leave</Button>
                            </ButtonGroup>
                        </div>                    
            </div>
        )
    }
};

export default Notification;