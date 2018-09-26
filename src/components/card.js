import {card,Button} from 'react-native-paper';

export const cardcomponent = ()=>{
    return(
        <Card>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
    )
}