const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    {id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }

  ];
  
  const appendInscription = (newInscription) => {
    inscriptions.push(newInscription);
  };
  

  const newInscription = { id: 14, nom: 'Naciri', filiere: 'DEVOWFS' };
  appendInscription(newInscription);
  
  console.log(inscriptions); 
  