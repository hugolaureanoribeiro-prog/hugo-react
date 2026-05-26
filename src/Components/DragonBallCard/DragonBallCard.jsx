import './DragonBallCard.css'

function DragonBallCard({nome, caminhoImagem, estagio, transformado, transformarDragonBall}){
  
  function definirAura(){

  if(nome.includes("VegetaSSJBlue")){
    return "aura-blue"
  }

  if(nome.includes("VegetaSSJGod")){
    return "aura-god"
  }

  if(nome.includes("VegetaUltraEgo")){
    return "aura-ego"
  }

  if(nome.includes("GohanBeast")){
    return "aura-beast"
  }

  if(nome.includes("GokuBlackSSJRose")){
    return "aura-rose"
  }

  if(nome.includes("BrolySSJL")){
    return "aura-broly"
  }

  if(
  nome.includes("VegetaSSJ") ||
  nome.includes("VegetaSSJ2") ||
  nome.includes("VegetaSSJ3") ||
  nome.includes("GohanSSJ") ||
  nome.includes("BrolySSJ") ||
  nome.includes("GoldenFreeza")
){
  return "aura-gold"
}

  if(nome.includes("BlackFreeza")){
    return "aura-black"
  }

  return ""
}
  
  return ( 
         <div className='CardDragonBall'>
            
            <img 
            src={caminhoImagem} 
            alt={nome} title={nome}
            onClick={transformarDragonBall}
            className={`dragonballImagem ${definirAura()}`}
            />
            
            <div>
              <h2>{nome}</h2>
              <p>Estágio: {estagio}</p>
            </div>
            
          </div>
    )
}

export default DragonBallCard