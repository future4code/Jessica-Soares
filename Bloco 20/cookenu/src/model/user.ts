export type user = {
   id: string
   email: string
   password: string
   name: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface GetUserInputDTO {
   token: string
}

export interface GetUserInput {
   id: string
}