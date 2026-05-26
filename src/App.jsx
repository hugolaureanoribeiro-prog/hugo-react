import { useEffect, useState } from 'react';
import './App.css'
import DragonBallCard from './Components/DragonBallCard/DragonBallCard';
import DragonBallButton from './Components/DragonBallButton/DragonBallButton';


import dragonballs from "./Data/dragonballs";

function App() {

   const audioTransformacao = new Audio('/saiyan.mp3')
  
  const [listaDragonBalls, setListaDragonBalls] = useState([
    {nome: "Vegeta", estagio: 0, caminhoImagem: dragonballs['Vegeta'].imagem, transformado: false },
    {nome: "Gohan", estagio: 0, caminhoImagem: dragonballs['Gohan'].imagem, transformado: false },
    {nome: "GokuBlack", estagio: 0, caminhoImagem: dragonballs['GokuBlack'].imagem, transformado: false },
    {nome: "Broly", estagio: 0, caminhoImagem: dragonballs['Broly'].imagem, transformado: false },
    {nome: "Freeza", estagio: 0, caminhoImagem: dragonballs['Freeza'].imagem, transformado: false },
  ]);

  const[qtdTransformados, setQtdTransformados] = useState(0);


  useEffect(() => {
    console.log("Executa toda vez que o valor da dependencia é alterado")
    console.log(listaDragonBalls)

    let dragonballsTransformados = listaDragonBalls.filter(dragonball => dragonball.estagio > 0)

    console.log(dragonballsTransformados.length)

    setQtdTransformados(dragonballsTransformados.length)
    
  },[listaDragonBalls])

  function transformarDragonBall(nomeDragonBall){
    
    audioTransformacao.currentTime = 0
    audioTransformacao.volume = 0.2
    audioTransformacao.play()

    const novaLista = listaDragonBalls.map((dragonball) => {

      console.log(dragonball)

    
      if (dragonball.nome === nomeDragonBall){
        
        const proximaTransformacao = dragonballs[dragonball.nome].transformacao;

        console.log(proximaTransformacao)

        if(!proximaTransformacao){
          return dragonball;
        }
        
        return{
          nome: proximaTransformacao,
          estagio: dragonball.estagio + 1,
          caminhoImagem: dragonballs[proximaTransformacao].imagem,
          transformado: true
        }
      }
     return dragonball

     
    })
  
   setListaDragonBalls(novaLista)
  }
 
  return (
    <>
    <h1>Melhores personagens de Dragon Ball</h1>

    <h2>Quantidade de cards da página: {qtdTransformados}</h2>

    <section id="center">
      {listaDragonBalls.map((dragonball, index) => (
        <DragonBallCard
        key={index}
        nome={dragonball.nome}
        estagio={dragonball.estagio}
        caminhoImagem={dragonball.caminhoImagem}
        transformado={dragonball.transformado}
        transformarDragonBall={() => transformarDragonBall(dragonball.nome)}
        />
      ))}

       
        
 

    </section>





    </>
  )
}



export default App