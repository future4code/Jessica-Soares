export class CustomError extends Error{
    constructor(
        statusCode: number, message: string
        ){
            super(message)
        }
}

// --------------- User -----------------------

export class invalidName extends CustomError {
    constructor(){
        super(400, "Nome Inválido!")
    }
}

export class invalidEmail extends CustomError {
    constructor(){
        super(400, "Email Inválido!")
    }
}

export class invalidPassword extends CustomError {
    constructor(){
        super(400, "Senha Inválido!")
    }
}

export class invalidUser extends CustomError {
    constructor(){
        super(401, "Não tem usuários cadastrados!")
    }
}

// -------------------- Movie --------------------------

export class invalidTitle extends CustomError {
    constructor(){
        super(400, "Precisa passar o title no body!")
    }
}

export class invalidDescription extends CustomError {
    constructor(){
        super(400, "Precisa passar o description no body!")
    }
}

export class invalidDurationInMinutes extends CustomError {
    constructor(){
        super(400, "Precisa passar o durationInMinutes no body!")
    }
}

export class invalidYearOfRelease extends CustomError {
    constructor(){
        super(400, "Precisa passar o yearOfRelease no body!")
    }
}