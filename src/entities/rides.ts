import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";

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

  @Column({ type: "int" }) 
  driver_id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}