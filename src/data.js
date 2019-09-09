window.worldBank = {
  //filtro país
  filterCountry: (data, buttonCountry) => {
    let countryName = [];
      for (let dataCountry in data) {
        if (buttonCountry === dataCountry) {
        countryName = (dataCountry, data[dataCountry].indicators)
        return countryName
      }
    }
  },
  
  //filtra los objetos filtrados por el tema  
  filter: (data) => {
    let filteredIndicators = [];
    data.forEach(element => {
      if (element.indicatorCode.includes('.FE.')) {
        filteredIndicators.push(element);
      }
    });
    return filteredIndicators;
 },

 
}