import vegetabaseImagem from '../assets/vegetabase.png';
import vegetassj1Imagem from '../assets/vegetassj1.png';
import vegetassj2Imagem from '../assets/vegetassj2.png';
import vegetassj3Imagem from '../assets/vegetassj3.png';
import vegetassjblueImagem from '../assets/vegetassjblue.png';
import vegetassjgodImagem from '../assets/vegetassjgod.png';
import vegetaultraegoImagem from '../assets/vegetaultraego.png';

import gohanbaseImagem from '../assets/gohanbase.png';
import gohanssjImagem from '../assets/gohanssj.png';
import gohanbeastImagem from '../assets/gohanbeast.png';

import blackgokubaseImagem from '../assets/blackgokubase.png';
import blackssjroseImagem from '../assets/blackssjrose.png';

import brolyImagem from '../assets/broly.png';
import brolyssjImagem from '../assets/brolyssj.png';
import aurabrolyssjlImagem from '../assets/aurabrolyssjl.png';

import freezabaseImagem from '../assets/freezabase.png';
import goldenfreezaImagem from '../assets/goldenfreeza.png';
import blackfreezaImagem from '../assets/blackfreeza.png';

const dragonballs = [

    {
        
        nome: "Vegeta",
        transformacao:"Vegeta Super Saiyajin",
        id: 1,
        estagio:0,
        imagem: vegetabaseImagem
    },
    {
        
        nome: "Vegeta Super Saiyajin",
        transformacao:"Vegeta Super Saiyajin 2",
        id: 2,
        estagio: 1,
        imagem: vegetassj1Imagem
    },
    {
        id: 3,
        nome: "Vegeta Super Saiyajin 2",
        transformacao:"Vegeta Super Saiyajin 3",
        estagio: 2,
        imagem: vegetassj2Imagem
    },
   {
        id: 4,
        nome: "Vegeta Super Saiyajin 3",
        transformacao:"Vegeta Super Saiyajin Blue",
        estagio:3,
        imagem: vegetassj3Imagem
    },
    {
        id: 5,
        nome: "Vegeta Super Saiyajin Blue",
        transformacao:"Vegeta Super Saiyajin God",
        estagio:4,
        imagem: vegetassjblueImagem
    },
    {
        id: 6,
        nome: "Vegeta Super Saiyajin God",
        transformacao:"Vegeta Ultra Ego",
        estagio:5,
        imagem: vegetassjgodImagem
    },
    {
        id: 7,
        nome: "Vegeta Ultra Ego",
        transformacao: null,
        estagio:6,
        imagem: vegetaultraegoImagem
    },


    {
        id: 8,
        nome: "Gohan",
        transformacao:"Gohan Super Saiyajin",
        estagio:0,
        imagem: gohanbaseImagem
    },
    {
        id: 9,
        nome: "Gohan Super Saiyajin",
        transformacao:"Gohan Beast",
        estagio:1,
        imagem: gohanssjImagem
    },
    {
        id: 10,
        nome: "Gohan Beast",
        transformacao: null,
        estagio:2,
        imagem: gohanbeastImagem
    },


    {
        id: 11,
        nome: "Goku Black",
        transformacao:"Super Saiyajin Rose",
        estagio:0,
        imagem: blackgokubaseImagem
    },
    {
        id: 12,
        nome: "Super Saiyajin Rose",
        transformacao: null,
        estagio:1,
        imagem: blackssjroseImagem
    },


    {
        id: 13,
        nome: "Broly",
        transformacao:"Broly Super Saiyajin",
        estagio:0,
        imagem: brolyImagem
    },
    {
        id: 14,
        nome: "Broly Super Saiyajin",
        transformacao:"Lendário Super Saiyajin ",
        estagio:1,
        imagem: brolyssjImagem
    },
    {
        id: 15,
        nome: "Lendário Super Saiyajin ",
        transformacao: null,
        estagio:2,
        imagem: aurabrolyssjlImagem
    },


    {
        id: 16,
        nome: "Freeza",
        transformacao:"Golden Freeza",
        estagio:0,
        imagem: freezabaseImagem
    },
    {
        id: 17,
        nome: "Golden Freeza",
        transformacao: "Black Freeza",
        estagio:1,
        imagem: goldenfreezaImagem
    },
    {
        id: 18,
        nome: "Black Freeza",
        transformacao: null,
        estagio:2,
        imagem: blackfreezaImagem
    }

];

export default dragonballs