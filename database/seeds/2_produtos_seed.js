exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("produtos").del()
    .then(function () {
      // Inserts seed entries
      return knex("produtos").insert([

        

        {nome:"Mobil", 
        descricao:"Oleo para motores 4 tempos 20w50 API SL/JASO MA2 ", 
        imagem:"", 
        fornecedores_id:1,
        preco: 30.00

      },

      
        {nome:"Ipiranga", 
      descricao:"Oleo para motores 4 tempos 20w50 API SL/JASO MA2", 
      imagem:"", 
      fornecedores_id:2,
       preco: 25.00 
      },

    
     {nome:"Yamalube", 
      descricao:"Oleo para motores 4 tempos 20w50 API SL/JASO MA2", 
      imagem:"", 
      fornecedores_id:3,
      preco: 40.00 
    },

  
      {nome:"shell", 
       descricao:"Oleo para motores 4 tempos 20W50 API A X 5", 
      imagem:"", 
     fornecedores_id:4,
     preco: 25.00 
    },


  {nome:"Honda", 
     descricao:"Oleo para motores 4 tempos 10w30 API SL/JASO MA2", 
   imagem:"", 
     fornecedores_id:5,
   preco: 48.00
  },

      {nome:"Lubrax", 
    descricao:"Oleo para motores 4 tempos 20w50 API SL/JASO MA2", 
      imagem:"", 
      fornecedores_id:6,
    preco: 25.00
  },

    {nome:"Gulf", 
    descricao:"Oleo para motores 4 tempos 10w30 API SL/JASO MA2", 
    imagem:"", 
    fornecedores_id:7,
    preco: 25.00
  },
      


      ]);
    });
};
