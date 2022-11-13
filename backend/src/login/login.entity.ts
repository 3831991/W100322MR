import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { compare, hash } from "bcrypt";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '50' })
    fullName: string;

    @Column({ type: 'varchar', length: '30' })
    email: string;

    @Column({ type: 'varchar' })
    @Exclude()
    password: string;

    @BeforeUpdate()
    @BeforeInsert()
    private async hash() {
        this.password = await hash(this.password, 10);
    }

    async comparePassword(userPassword: string) {
        return await compare(userPassword, this.password);
    }
}