// src/farm-info.js

// Example farm info data (replace with real MongoDB query later)
const farmData = {
  income: 50000,
  plots: [
    {
      landholding: 2,
      landType: "Agricultural",
      soilType: "Loamy",
      cropsGrown: ["Wheat", "Rice"],
      irrigationType: "Drip",
    },
    {
      landholding: 1.5,
      landType: "Orchard",
      soilType: "Sandy",
      cropsGrown: ["Mango"],
      irrigationType: "Sprinkler",
    },
  ],
};

export default farmData;
