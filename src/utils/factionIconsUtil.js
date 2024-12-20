// Import all faction icons

const imperiumFactions = {

  'Adepta Sororitas': new URL('../assets/Faction Icons/Imperium/Adepta Sororitas.png', import.meta.url).href,
  'Adeptus Astartes': new URL('../assets/Faction Icons/Imperium/Adeptus Astartes.png', import.meta.url).href,
  'Adeptus Custodes': new URL('../assets/Faction Icons/Imperium/Adeptus Custodes.png', import.meta.url).href,
  'Adeptus Mechanicus': new URL('../assets/Faction Icons/Imperium/Adeptus Mechanicus.png', import.meta.url).href,
  'Astra Militarum': new URL('../assets/Faction Icons/Imperium/Astra Militarum.png', import.meta.url).href,
  'Black Templars': new URL('../assets/Faction Icons/Imperium/Black Templars.png', import.meta.url).href,
  'Blood Angels': new URL('../assets/Faction Icons/Imperium/Blood Angels.png', import.meta.url).href,
  'Dark Angels': new URL('../assets/Faction Icons/Imperium/Dark Angels.png', import.meta.url).href,
  'Leagues of Votann': new URL('../assets/Faction Icons/Imperium/Leagues of Votann.png', import.meta.url).href,
  'Space Wolves': new URL('../assets/Faction Icons/Imperium/Space Wolves.png', import.meta.url).href,
};



const chaosFactions = {

  'Alpha Legion': new URL('../assets/Faction Icons/Chaos/Alpha Legion.png', import.meta.url).href,
  'Chaos Daemons': new URL('../assets/Faction Icons/Chaos/Chaos Daemons.png', import.meta.url).href,
  'Death Guard': new URL('../assets/Faction Icons/Chaos/Death Guard.png', import.meta.url).href,
  'Khorne': new URL('../assets/Faction Icons/Chaos/Khorne.png', import.meta.url).href,
  'Nurgle': new URL('../assets/Faction Icons/Chaos/Nurgle.png', import.meta.url).href,
  'Slaanesh': new URL('../assets/Faction Icons/Chaos/Slaanesh.png', import.meta.url).href,
  'Thousand Sons': new URL('../assets/Faction Icons/Chaos/Thousand Sons.png', import.meta.url).href,
  'World Bearers': new URL('../assets/Faction Icons/Chaos/World Bearers.png', import.meta.url).href,
  'World Eaters': new URL('../assets/Faction Icons/Chaos/World Eaters.png', import.meta.url).href,
};



const xenosFactions = {

  'Aeldari': new URL('../assets/Faction Icons/Xenos/Aeldari.png', import.meta.url).href,
  'Drukhari': new URL('../assets/Faction Icons/Xenos/Drukhari.png', import.meta.url).href,
  'Genestealer Cults': new URL('../assets/Faction Icons/Xenos/Genestealer Cults.png', import.meta.url).href,
  'Necrons': new URL('../assets/Faction Icons/Xenos/Necrons.png', import.meta.url).href,
  'Orks': new URL('../assets/Faction Icons/Xenos/Orks.png', import.meta.url).href,
  'Tau': new URL('../assets/Faction Icons/Xenos/Tau.png', import.meta.url).href,
  'Tyranids': new URL('../assets/Faction Icons/Xenos/Tyranids.png', import.meta.url).href,
};



export const factionCategories = {

  'Imperium': imperiumFactions,
  'Chaos': chaosFactions,
  'Xenos': xenosFactions,

}; 
