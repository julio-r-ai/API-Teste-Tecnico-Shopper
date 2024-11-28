import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";
import { Driver } from "./drivers";

@Entity("rides")
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column({ type: "double" })
  distance: number;

  @Column()
  duration: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @ManyToOne(() => Driver)
  @JoinColumn({ name: "driver_id" })
  driver_id: Driver;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}