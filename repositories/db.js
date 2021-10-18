import Sequelize from "sequelize";

const sequelize= new Sequelize(
     "postgres://mwfykyvm:lHs99dmPzy3_RJ2s5xNxqGQpIMCIhwni@fanny.db.elephantsql.com/mwfykyvm",

    
    {
        dialect: "postgress",
        define:{
            timestamps: false
        }
    }
)

export default sequelize;