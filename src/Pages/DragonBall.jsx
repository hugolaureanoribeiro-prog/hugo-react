import {useParams} from 'react-router-dom';
import dragonballs from '../Data/dragonballs';

function DragonBall() {
    const {dragonballId} = useParams();

    const dragonball = dragonballs.find((dragonball) => dragonball.id === Number(dragonballId));
    
    if (!dragonball) {
        return <h1>Dragon Ball não encontrado</h1>;
    }
    
    return (
        <>
          <h1>{dragonball.nome}</h1>        
        </>
    )
}

export default DragonBall;