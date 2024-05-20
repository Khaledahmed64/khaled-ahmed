var Quotes = [
    {'author': 'Oscar wilde' ,
       'Quote': 'Be yourself; everyone else is already taken.'
    },
    {'author' :'Frank Zappa' , 
    'Quote' : 'So many books, so little time.'
    },
    {'author' : 'Albert Einstein' , 
    'Quote': 'Two things are infinite: the universe and human stupidity ,  and I m not sure about the universe.'
    },
    {'author' :'Marcus Tullius Cicero' , 
    'Quote' : 'A room without books is like a body without a soul.'
    
    },
    {'author' :'Bernard M. Baruch' , 
    'Quote' : 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind'
    },
    {'author' :'Dr. Seuss' , 
    'Quote' : 'You know youre in love when you cant fall asleep because reality is finally better than your dreams.'
    },
    {
        'author': 'Mahatma Gandi' ,
        'Quote' : 'Be the change that you wish to see in the world.'
    }
   
];

 function newQuote(){
     var random = Number.parseInt(Math.random()*Quotes.length + 1);
     document.getElementById('quote').innerHTML = `${Quotes[random].Quote}`;
     document.getElementById('author').innerHTML = `${Quotes[random].author}`;
  
 }
