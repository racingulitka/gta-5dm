import {
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  HasMany,
  BelongsTo,
} from "sequelize-typescript";
import { BaseModel } from "./BaseModel";
import { Weapon } from "./Weapon";

@Table({
  timestamps: false,
  tableName: "skin",
  modelName:'Skin',
})
export class Skin extends BaseModel {

  @Column({ type: DataType.STRING, allowNull: false })
  public title!: string;

  @Column({ type: DataType.STRING })
  public icon!: string;

  @Column({ type: DataType.JSONB, allowNull: false })
  public price!: string[];

  @Column({ type: DataType.JSONB })
  public info!: {title:string, description:string}[];

  @ForeignKey(() => Weapon)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public weaponId!: number;

  @BelongsTo(() => Weapon)
  async weaponGetter() {
    const weaponModule = await import("./Weapon");
    return weaponModule.Weapon;
  }
}
