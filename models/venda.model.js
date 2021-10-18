import Sequelize from "sequelize";
import db from "../repositories/db.js";
import ClienteModel from "./cliente.model.js";
import LivroModel from "./livro.model.js";

const VendaModel=db.define("vendas", {
    vendaId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor:{
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    }
    
}, { underscored: true })

VendaModel.belongsTo(ClienteModel, { foreignKey: "clienteId" });
VendaModel.belongsTo(LivroModel, { foreignKey: "livroId" });

export default VendaModel;