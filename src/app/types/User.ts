export type Users={
    name:String,
    email:String,
    password:String,
    role:Number,
    status:String
}

export type TypeLoginResponse = {
    accessToken: string,
    user: {
        name:String,
        email:String,
        password:String,
        role:Number,
        status:String
    }
  }