import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('product')
export class ProductEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true })
    name: string
}