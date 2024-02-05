export const houseSwitch = (house) => {
  switch (house) {
    case 'gryffindor':
      return {
        title: 'gryffindor',
        info: 'gryffindorInfo',
        backgroundColor: 'red',
      };
    case 'hufflepuff':
      return {
        title: 'hufflepuff',
        info: 'hufflepuffInfo',
        backgroundColor: 'yellow',
      };
    case 'ravenclaw':
      return {
        title: 'ravenclaw',
        info: 'ravenclawInfo',
        backgroundColor: 'blue',
      };
    case 'slytherin':
      return {
        title: 'slytherin',
        info: 'slytherinInfo',
        backgroundColor: 'green',
      };
    default:
      return { title: 'Unknown', info: '' };
  }
};
