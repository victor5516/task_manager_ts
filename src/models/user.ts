import { DataType, DataTypes, Model } from "sequelize";
import sequelizeConnection from "../database";


class User extends Model {
    public id!: number;
    public email!: string
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'users'
    }
)

export default User;