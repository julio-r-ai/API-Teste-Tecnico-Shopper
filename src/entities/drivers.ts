import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("drivers")
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  vehicle: string;

  @Column()
  comment: string;

  @Column()
  ratePerKm: string;

  @Column({ type: "double", name: "min_km" })
  minKm: number;
}