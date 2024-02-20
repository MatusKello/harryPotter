export const houseSwitch = (house) => {
  switch (house) {
    case 'gryffindor':
      return {
        title: 'gryffindor',
        info: 'gryffindorInfo',
        backgroundColor: '#7F0909',
      };
    case 'hufflepuff':
      return {
        title: 'hufflepuff',
        info: 'hufflepuffInfo',
        backgroundColor: '#ecb939',
      };
    case 'ravenclaw':
      return {
        title: 'ravenclaw',
        info: 'ravenclawInfo',
        backgroundColor: '#000863',
      };
    case 'slytherin':
      return {
        title: 'slytherin',
        info: 'slytherinInfo',
        backgroundColor: '#2a6e29',
      };
    default:
      return { title: 'Unknown', info: '' };
  }
};

export const triviaOptionSwitch = (index) => {
  switch (index) {
    case 0:
      return 'A:';

    case 1:
      return 'B:';

    case 2:
      return 'C:';

    case 3:
      return 'D:';

    default:
      return '';
  }
};
