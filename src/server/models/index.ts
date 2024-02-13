import { Sequelize } from "sequelize-typescript";
import { Weapon } from "./definitions/Weapon";
import "reflect-metadata";
import { wikiArr } from "@/components/Wiki/Wiki.config";
import { WikiCategory } from "./definitions/WikiCategory";
import { Skin } from "./definitions/Skin";

const sequelize = new Sequelize({
  database: "wiki",
  username: "admin",
  password: "0000",
  host: "localhost",
  dialect: "mysql",
});

sequelize.addModels([WikiCategory, Weapon, Skin]);

const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter:true  });
    console.log("Successful connection to the database");
    
    await WikiCategory.findOrCreate({
        where: { title: 'dkdkdk' },
        defaults: { title: 'dkdkdk' },
      });


    // for (const item of wikiArr) {
    //   await WikiCategory.findOrCreate({
    //     where: { title: item.categoryTitle },
    //     defaults: { title: item.categoryTitle },
    //   });
    // }
  } catch (error) {
    console.log("Error initializing database:", error);
  }
};

export { initDB, WikiCategory, Skin, Weapon };