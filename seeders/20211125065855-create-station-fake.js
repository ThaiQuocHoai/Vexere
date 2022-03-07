"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
      
    */
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Bến xe Miền Tây",
          address: "395 Kinh Dương Vương, Bình Tân, TP. HCM",
          province: "TP. HCM",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
        },
        {
          name: "Bến xe Long Xuyên",
          address: "123 Long Xuyên, An Giang",
          province: "AG",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
        },
        {
          name: "Bến xe Cần Thơ",
          address: "Ninh Kiều, Cần Thơ",
          province: "TP. CT",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
        },
        {
          name: "Bến xe An Giang",
          address: "Long Xuyên, An Giang",
          province: "TP. CT",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14"
        },
        {
          name: "Bến xe An Sương",
          address: "Q12, TP. HCM",
          province: "TP. HCM",
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
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('stations', null, {});
  },
};
