import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Support {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    time: Date;

    @Column({ type: 'varchar', length: 50 })
    fullName: string;

    @Column({ type: 'varchar', length: 15 })
    phone: string;

    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column({ type: 'varchar', length: 250 })
    content: string;

    @Column({ default: false })
    isDone: boolean;
}