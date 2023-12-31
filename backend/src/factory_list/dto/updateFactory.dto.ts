import { Type } from "class-transformer"
import {
	IsNotEmpty,
	IsString,
	IsNumber,
	IsBoolean,
	IsDate
} from "class-validator"

export class UpdateFactoryDto {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsDate()
	@Type(()=>Date)
	membership_start_date: Date

	@IsNotEmpty()
	@IsDate()
	@Type(()=>Date)
	membership_end_date: Date

	@IsNotEmpty()
	@IsNumber()
	employee_count: number

	@IsNotEmpty()
	@IsBoolean()
	free_membership: boolean
}
