"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          password: "123456",
          numberPhone: "0123456789",
          type: "ADMIN",
          avatar: "https://picsum.photos/20/20",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
        },
        {
          name: "Hoai",
          email: "hoai@gmail.com",
          password: "123456",
          numberPhone: "0123456789",
          type: "ADMIN",
          avatar: "https://picsum.photos/20/20",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
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
     * 
     */
     await queryInterface.bulkDelete('users', null, {});
  },
};
