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
import { WikiCategory } from "./WikiCategory";
import { Skin } from "./Skin";

@Table({
  timestamps: false,
  tableName: "weapon",
})
export class Weapon extends BaseModel {

  @Column({ type: DataType.STRING, allowNull: false })
  public title!: string;

  @Column({ type: DataType.STRING })
  public icon!: string;

  // @Column({ type: DataType.JSONB, allowNull: false })
  // public characteristics!: {
  //   reloadDuration: { name: string; value: string[]; units?: string };
  //   bodyDamage: { name: string; value: string[]; units?: string };
  //   headDamage: { name: string; value: string[]; units?: string };
  //   paymentForKill: { name: string; value: string[]; units?: string };
  //   bulletsBox: { name: string; value: string[]; units?: string };
  //   inGamePrice: { name: string; value: string[]; units?: string };
  //   accuracyRange: { name: string; value: string[]; units?: string };
  //   accuracyTemp: { name: string; value: string[]; units?: string };
  //   runSpeed: { name: string; value: string[]; units?: string };
  //   side: { name: string; value: string[]; units?: string };
  // };

  @Column({ type: DataType.TEXT })
  public description!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public spreadControl?: string;

  @HasMany(() => Skin)
  public skin!: Skin[];

  @ForeignKey(() => WikiCategory)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public wikiCategoryId!: number;

  @BelongsTo(() => WikiCategory)
  public category!: WikiCategory;
}
