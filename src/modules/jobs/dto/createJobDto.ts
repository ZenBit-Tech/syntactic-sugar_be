import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

// Will be added after merging Freelancer and Employer entity

// import { Category } from 'src/database/entities/category.entity';
// import { Country } from 'src/database/entities/country.entity';
// import { Skill } from 'src/database/entities/skill.entity';
import {
  AvailableAmountOfHours,
  EmploymentType,
  HourRate,
  LevelEnglish,
  WorkExperience,
} from 'src/database/enums';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  // Will be added after merging Freelancer and Employer entity

  // @IsNotEmpty()
  // @IsArray()
  // @ArrayMinSize(5)
  // countries: Country[];

  // Will be added after merging Freelancer and Employer entity

  // @IsNotEmpty()
  // category: Category;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsEnum(EmploymentType)
  employmentType: EmploymentType;

  @IsNotEmpty()
  @IsEnum(HourRate)
  hourRate: HourRate;

  @IsNotEmpty()
  @IsEnum(AvailableAmountOfHours)
  availableAmountOfHours: AvailableAmountOfHours;

  @IsNotEmpty()
  @IsEnum(WorkExperience)
  workExperience: WorkExperience;

  // Will be added after merging Freelancer and Employer entity

  // @IsNotEmpty()
  // @IsArray()
  // @ArrayMinSize(3)
  // skills: Skill[];

  @IsNotEmpty()
  @IsEnum(LevelEnglish)
  levelEnglish: LevelEnglish;

  @IsNotEmpty()
  @IsString()
  otherRequirenments: string;
}