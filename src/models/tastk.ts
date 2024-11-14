import { DataTypes, Model } from "sequelize";
import sequelizeConnection from  '../database'

class Task extends Model {
    public id!: number;
    public name!: string;
    public dueDate!: Date;
    public status!: 'complete' | 'incomplete';
}



Task.init(
    {
       id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
       },
       name: {
        type: DataTypes.STRING,
        allowNull: false
       },
       dueDate: {
        type: DataTypes.DATE,
        allowNull: false
       },
       status: {
        type: DataTypes.ENUM('complete', 'incomplete'),
        defaultValue: 'incomplete'
       }
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'tasks'
    }
)

export default Task