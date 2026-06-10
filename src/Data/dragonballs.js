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

const dragonballs = {

    Vegeta:{
        id: 1,
        transformacao:"VegetaSSJ",
        imagem: vegetabaseImagem
    },
    VegetaSSJ :{
        id: 2,
        transformacao:"VegetaSSJ2",
        imagem: vegetassj1Imagem
    },
    VegetaSSJ2:{
        id: 3,
        transformacao:"VegetaSSJ3",
        imagem: vegetassj2Imagem
    },
    VegetaSSJ3:{
        id: 4,
        transformacao:"VegetaSSJBlue",
        imagem: vegetassj3Imagem
    },
    VegetaSSJBlue:{
        id: 5,
        transformacao:"VegetaSSJGod",
        imagem: vegetassjblueImagem
    },
    VegetaSSJGod:{
        id: 6,
        transformacao:"VegetaUltraEgo",
        imagem: vegetassjgodImagem
    },
    VegetaUltraEgo:{
        id: 7,
        transformacao: null,
        imagem: vegetaultraegoImagem
    },


    Gohan:{
        id: 8,
        transformacao:"GohanSSJ",
        imagem: gohanbaseImagem
    },
    GohanSSJ:{
        id: 9,
        transformacao:"GohanBeast",
        imagem: gohanssjImagem
    },
    GohanBeast:{
        id: 10,
        transformacao: null,
        imagem: gohanbeastImagem
    },


    GokuBlack:{
        id: 11,
        transformacao:"GokuBlackSSJRose",
        imagem: blackgokubaseImagem
    },
    GokuBlackSSJRose:{
        id: 12,
        transformacao: null,
        imagem: blackssjroseImagem
    },


    Broly:{
        id: 13,
        transformacao:"BrolySSJ",
        imagem: brolyImagem
    },
    BrolySSJ:{
        id: 14,
        transformacao:"BrolySSJL",
        imagem: brolyssjImagem
    },
    BrolySSJL:{
        id: 15,
        transformacao: null,
        imagem: aurabrolyssjlImagem
    },


    Freeza:{
        id: 16,
        transformacao:"GoldenFreeza",
        imagem: freezabaseImagem
    },
    GoldenFreeza:{
        id: 17,
        transformacao: "BlackFreeza",
        imagem: goldenfreezaImagem
    },
    BlackFreeza:{
        id: 18,
        transformacao: null,
        imagem: blackfreezaImagem
    }

};

export default dragonballs