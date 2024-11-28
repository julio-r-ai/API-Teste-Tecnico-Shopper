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

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  ratePerKm: string;

  @Column({ type: "double", name: "min_km" })
  minKm: number;
}