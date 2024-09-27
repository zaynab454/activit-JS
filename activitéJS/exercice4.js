let inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
  ];
  
  
  const pureInsert = (id, nom, filiere, position) => inscriptions.splice(position, 0, { id, nom, filiere });
  pureInsert(14, 'EL HASSAN', 'DEVOPS', 2);
  console.log(inscriptions);
  
  
  const pureDeleteByPosition = position => inscriptions.splice(position, 1);
  pureDeleteByPosition(1);
  console.log(inscriptions);
  
  
  const pureDeleteByID = id => inscriptions = inscriptions.filter(inscription => inscription.id !== id);
  pureDeleteByID(12);
  console.log(inscriptions);
  
  
  const pureUpdateByPosition = (id, nom, filiere, position) => inscriptions[position] = { id, nom, filiere };
  pureUpdateByPosition(15, 'HASSAN', 'CYBERSEC', 1);
  console.log(inscriptions);
  
  
  const pureUpdateByID = (id, nom, filiere) => inscriptions = inscriptions.map(inscription =>
    inscription.id === id ? { ...inscription, nom, filiere } : inscription
  );
  pureUpdateByID(13, 'IBRAHIMI', 'DATA SCIENCE');
  console.log(inscriptions);
  
  
 
  