import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Index,
  OneToMany,
  getRepository,
  UpdateDateColumn,
} from 'typeorm'
import { AssetMeta } from './AssetMeta'
import { AssetType } from './AssetType'
import { SectorWeighting } from './SectorWeighting'

@Entity({
  name: 'assets',
})
export class Asset {
  @PrimaryGeneratedColumn()
  id!: number

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 10,
  })
  ticker!: string

  @Column({ length: 128 })
  name!: string

  @Column({
    type: 'varchar',
    length: 2048,
  })
  description!: string

  @Column({
    nullable: true,
  })
  sector!: string

  @Column({
    type: 'datetime',
    nullable: true,
  })
  ipo_date!: Date | null

  @Column({
    nullable: true,
  })
  image?: string // /logos/us_stock/TSLA.png

  @Column()
  is_etf!: boolean

  @OneToOne((type) => AssetMeta, (assetMeta) => assetMeta.asset)
  asset_meta!: AssetMeta

  @ManyToOne((type) => AssetType, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'asset_type_id',
  })
  asset_type!: AssetType

  @OneToMany(() => SectorWeighting, (sectorWeighting) => sectorWeighting.asset)
  sector_weightings!: SectorWeighting[]

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date

  static findByTicker(ticker: string, join: boolean = false) {
    const repo = getRepository(Asset)
    return repo.findOne({
      where: { ticker },
      relations: join ? ['asset_meta', 'sector_weightings'] : [],
    })
  }
}
