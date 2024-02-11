import { Table, Column, DataType, Model, HasMany, AutoIncrement, PrimaryKey } from "sequelize-typescript";
import { BaseModel } from "./BaseModel";
import {Weapon} from './Weapon'

@Table({
  timestamps: false,
  tableName: "wikiCategory",
  modelName:'WikiCategory',
})
export class WikiCategory extends BaseModel {

  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @Column({ type: DataType.STRING })
  public title!: string;

  @HasMany(() => Weapon)
  public weapon!: Weapon[];
}
