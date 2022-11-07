const chooseStations = (stations) => {
  
  let appropriateVotingStations = [];

  for (const station of stations){
    const [name, capacity, venueType] = station;

    if (capacity >= 20 && (venueType === 'school' || venueType === 'community centre')) {
      appropriateVotingStations.push(name);
    }
  }

  return appropriateVotingStations;
}