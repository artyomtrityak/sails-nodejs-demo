'use strict';

module.exports = function(sequelize, DataTypes) {
  var Play = sequelize.define('play', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  });

  return Play;  
};
