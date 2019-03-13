var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }
  console.log(feedTheCat('hungry'));
  console.log(feedTheCat('efw'));