import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";
import { Driver } from "./drivers";

@Entity("rides")
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "customer_id" })
  customerId: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column({ type: "double" })
  distance: Double;

  @Column()
  duration: string;

  @ManyToOne(() => Driver)
  @JoinColumn({ name: "driver_id" })
  driver_id: Driver;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}