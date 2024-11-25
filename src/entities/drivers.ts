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

  @Column({ type: "float" })
  rating: number;

  @Column()
  comment: string;

  @Column({ type: "float", name: "rate_per_km" })
  ratePerKm: number;

  @Column({ type: "float", name: "min_km" })
  minKm: number;
}