const pegarPost = configuraState => {
        
    const _listaPost = [
        {
            "id": 1,
            "idCategoria": 1,
            "Titulo": "Harry Potter e o Cálice de Fogo",
            "imagem": "https://3.bp.blogspot.com/-HKtIyOnPRJ0/XuN7K-yzr5I/AAAAAAAA5_E/qKYOhrGwBe4WLHVBekv8sBQqshIcPYgMwCPcBGAsYHg/w500/en-674-post-0.jpg",
            "dataPostagem": "25/09/2020",
            "Sinopse": "Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.",
            "atoresPrincipais": "Daniel Radcliffe, Emma Watson, Robert Pattinson, Rupert Grint e etc.",
            "Diretor": "Mike Newell",
            "lançamento": "25/11/2005",
            "descricao": "Post 1",
            "Nota": "4"
        },
        {
            "id": 2,
            "idCategoria": 2,
            "Titulo": "Interestelar",
            "imagem": "https://images-na.ssl-images-amazon.com/images/I/A1JVqNMI7UL._AC_SY550_.jpg",
            "dataPostagem": "14/04/2021",
            "Sinopse": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
            "atoresPrincipais": " Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine e etc.",
            "Diretor":"Christopher Nolan",
            "lançamento": "06/11/2014",
            "descricao": "Post 2"
        },
        {
            "id": 3,
            "idCategoria": 3,
            "Titulo": "O Senhor dos Anéis: O Retorno do Rei",
            "imagem": "https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg",
            "dataPostagem": "20/12/2019",
            "Sinopse": "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
            "atoresPrincipais": "Ian McKellen, Elijah Wood, Viggo Mortensen, Sean Astin e etc.",
            "Diretor": "Peter Jackson",
            "lançamento": "25/12/2003",
            "descricao": "Post 3"
        },
        {
            "id": 4,
            "idCategoria": 4,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 4"
        },
        {
            "id": 5,
            "idCategoria": 5,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 5"
        },
        {
            "id": 6,
            "idCategoria": 6,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 6"
        },
        {
            "id": 7,
            "idCategoria": 7,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 7"
        },
        {
            "id": 7,
            "idCategoria": 2,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 8"
        },
        {
            "id": 7,
            "idCategoria": 1,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 9"
        },
        {
            "id": 7,
            "idCategoria": 2,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 10 "
        },
        {
            "id": 7,
            "idCategoria": 7,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 11"
        },
        {
            "id": 7,
            "idCategoria": 1,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 12"
        },
        {
            "id": 7,
            "idCategoria": 4,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 13"
        },
        {
            "id": 7,
            "idCategoria": 5,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 14"
        },
        {
            "id": 7,
            "idCategoria": 6,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 15"
        },
        {
            "id": 7,
            "idCategoria": 4,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 16"
        },
        {
            "id": 7,
            "idCategoria": 3,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 17"
        },
        {
            "id": 7,
            "idCategoria": 6,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 18"
        },
        {
            "id": 7,
            "idCategoria": 1,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 19"
        },
        {
            "id": 7,
            "idCategoria": 5,
            "Titulo": "abc",
            "dataPostagem": "xxx",
            "Sinopse": "dadwww",
            "atoresPrincipais": "kpowqkeop",
            "Diretor":"a",
            "lançamento": 12,
            "descricao": "Post 20"
        }
    ];
    configuraState(_listaPost); 

   
};

export default pegarPost;