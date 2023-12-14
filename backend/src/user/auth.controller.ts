import { Controller, Put,Post, Body, } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "./dto/createUser.dto"
import { SignInUserDto } from "./dto/signInUser.dto"
import { sign } from "crypto"


@Controller("users")
export class AuthController {
  constructor(private readonly authService:AuthService) {}

  @Put("register")
  async registerUser(@Body() createUserDto:CreateUserDto) {
    const registeredUser = await this.authService.registerUser(createUserDto)
    return "User registered"
  }

  @Post("signin")
  async signInUser(@Body() signInUserDto: SignInUserDto) {
    const accessToken = await this.authService.signInUser(signInUserDto.email, signInUserDto.password)
    return "User signed in"
  }
}