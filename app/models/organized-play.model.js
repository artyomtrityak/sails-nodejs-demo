'use strict';

module.exports = function(sequelize, DataTypes) {
  var OrganizedPlay = sequelize.define('organized_play', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  });

  return OrganizedPlay;  
};
