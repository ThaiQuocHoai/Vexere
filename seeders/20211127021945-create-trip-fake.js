"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2021-11-26 08:40:12",
          price: 200000,
          createdAt: "2021-11-26 08:40:12",
          updatedAt: "2021-11-26 08:40:12"
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: "2021-11-26 08:40:12",
          price: 250000,
          createdAt: "2021-11-26 08:40:12",
          updatedAt: "2021-11-26 08:40:12"
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "2021-11-26 08:40:12",
          price: 500000,
          createdAt: "2021-11-26 08:40:12",
          updatedAt: "2021-11-26 08:40:12"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('trips', null, {});
  },
};
