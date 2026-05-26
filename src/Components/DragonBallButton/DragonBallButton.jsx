import './DragonBallButton.css'

function DragonBallButton({título='Button', cor='white', corDaLetra='black'}){
    return (
        <button 
        className="dragonballButton"
        style={{backgroundColor: cor, color: corDaLetra}}>
         {título}
        </button>
    )
}

export default DragonBallButton