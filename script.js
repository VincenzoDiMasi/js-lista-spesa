console.log('JS OK')

/*Data una lista della spesa (inventatela), stampare in pagina
 gli elementi della lista individualmente con un ciclo while.*/

 const list = ['sale', 'pepe', 'olio'];

 
 let i = 0;
 
 // Creo un ciclo while
 while (i < list.length) {

    
   // Recupero l'elemento dalla lista
   const listElements = list[i];
 
   // Creo un <li> con gli elementi nell'array
   const li = document.createElement('li');
   li.innerText = listElements;
 
   // Aggiungo <li> alla lista <ul> nell'HTML
   const ul = document.querySelector('ul');
   ul.appendChild(li);

   i++;
 
 }
 