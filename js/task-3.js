const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    const { username } = this;
    username = newName;
  },

  updatePlayTime(hours) {
    const { playTime } = this;
    playTime += hours;
  },

  getInfo() {
    const { username, playTime } = this;
    return `${username} has ${playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
