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
        transformacao:"VegetaSSJ",
        imagem: vegetabaseImagem
    },
    VegetaSSJ :{
        transformacao:"VegetaSSJ2",
        imagem: vegetassj1Imagem
    },
    VegetaSSJ2:{
        transformacao:"VegetaSSJ3",
        imagem: vegetassj2Imagem
    },
    VegetaSSJ3:{
        transformacao:"VegetaSSJBlue",
        imagem: vegetassj3Imagem
    },
    VegetaSSJBlue:{
        transformacao:"VegetaSSJGod",
        imagem: vegetassjblueImagem
    },
    VegetaSSJGod:{
        transformacao:"VegetaUltraEgo",
        imagem: vegetassjgodImagem
    },
    VegetaUltraEgo:{
        transformacao: null,
        imagem: vegetaultraegoImagem
    },


    Gohan:{
        transformacao:"GohanSSJ",
        imagem: gohanbaseImagem
    },
    GohanSSJ:{
        transformacao:"GohanBeast",
        imagem: gohanssjImagem
    },
    GohanBeast:{
        transformacao: null,
        imagem: gohanbeastImagem
    },


    GokuBlack:{
        transformacao:"GokuBlackSSJRose",
        imagem: blackgokubaseImagem
    },
    GokuBlackSSJRose:{
        transformacao: null,
        imagem: blackssjroseImagem
    },


    Broly:{
        transformacao:"BrolySSJ",
        imagem: brolyImagem
    },
    BrolySSJ:{
        transformacao:"BrolySSJL",
        imagem: brolyssjImagem
    },
    BrolySSJL:{
        transformacao: null,
        imagem: aurabrolyssjlImagem
    },


    Freeza:{
        transformacao:"GoldenFreeza",
        imagem: freezabaseImagem
    },
    GoldenFreeza:{
        transformacao: "BlackFreeza",
        imagem: goldenfreezaImagem
    },
    BlackFreeza:{
        transformacao: null,
        imagem: blackfreezaImagem
    }

};

export default dragonballs