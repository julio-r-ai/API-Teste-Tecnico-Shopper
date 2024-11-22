'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      origem_latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      origem_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      destination_latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      destination_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      distance: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      driver_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rides');
  }
};