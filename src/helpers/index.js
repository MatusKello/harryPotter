export const houseSwitch = (house) => {
  switch (house) {
    case 'gryffindor':
      return { title: 'gryffindor', info: 'gryffindorInfo' };
    case 'hufflepuff':
      return { title: 'hufflepuff', info: 'hufflepuffInfo' };
    case 'ravenclaw':
      return { title: 'ravenclaw', info: 'ravenclawInfo' };
    case 'slytherin':
      return { title: 'slytherin', info: 'slytherinInfo' };
    default:
      return { title: 'Unknown', info: '' };
  }
};
