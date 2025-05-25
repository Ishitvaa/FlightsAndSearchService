'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
    {
      name : 'Indira Gandhi International Airport',
      address : 'Delhi',
      cityId : 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Mangalore International Airport',
      address : 'Mangalore',
      cityId : 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Chhatrapati Shivaji Maharaj International Airport',
      address : 'Mumbai',
      cityId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Devi Ahilya Bai Holkar Airport',
      address : 'Indore',
      cityId : 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name : 'Kempegowda International Airport',
      address : 'Bangalore',
      cityId : 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airports', null, {});
  }
};
