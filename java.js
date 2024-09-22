// Simuleret returdata
const returnData = [
    { produktNavn: 'T-shirt A', størrelse: 'M', returÅrsag: 'For lille', antalRetur: 15 },
    { produktNavn: 'T-shirt A', størrelse: 'L', returÅrsag: 'For stor', antalRetur: 5 },
    { produktNavn: 'Bukser B', størrelse: '32', returÅrsag: 'For lille', antalRetur: 8 },
    { produktNavn: 'Jakke C', størrelse: 'XL', returÅrsag: 'For stor', antalRetur: 10 }
  ];
  
  // Funktion til at generere anbefalinger baseret på returdata
  function genererAnbefalinger(data) {
    return data.map(item => {
      if (item.returÅrsag === 'For lille') {
        return `Bemærk: ${item.produktNavn} i størrelse ${item.størrelse} er generelt lille i størrelsen.`;
      } else if (item.returÅrsag === 'For stor') {
        return `Bemærk: ${item.produktNavn} i størrelse ${item.størrelse} er generelt stor i størrelsen.`;
      }
    }).filter(anbefaling => anbefaling !== undefined);
  }
  
  // Funktion til at vise returdata i en tabel
  function visReturData(data) {
    const tbody = document.querySelector("#returdata-tabel tbody");
    tbody.innerHTML = ''; // Tøm eksisterende data
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.produktNavn}</td>
        <td>${item.størrelse}</td>
        <td>${item.returÅrsag}</td>
        <td>${item.antalRetur}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Funktion til at vise størrelsesanbefalinger
  function visAnbefalinger(anbefalinger) {
    const liste = document.querySelector("#anbefalinger-liste");
    liste.innerHTML = ''; // Tøm eksisterende anbefalinger
    anbefalinger.forEach(anbefaling => {
      const listItem = document.createElement("li");
      listItem.textContent = anbefaling;
      liste.appendChild(listItem);
    });
  }
  
  // Simuleret opdatering af Shopify (her kun en alert)
  function opdaterShopify() {
    alert("Produktbeskrivelser opdateret baseret på AI-anbefalinger!");
  }
  
  // Initial visning af returdata og anbefalinger
  const anbefalinger = genererAnbefalinger(returnData);
  visReturData(returnData);
  visAnbefalinger(anbefalinger);
  