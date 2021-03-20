import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";

export class GetClientDto {
  @IsNotEmpty()
  @IsString()
  licence: string;

  @IsArray()
  @ArrayMinSize(6)
  @IsString({ each: true })
  hashes: string[];
}
