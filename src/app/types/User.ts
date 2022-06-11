export type Users={
    name:String,
    email:String,
    password:String,
    role:Number,
    status:Boolean
}

export type TypeLoginResponse = {
    accessToken: string,
    user: {
        name:String,
        email:String,
        password:String,
        role:Number,
        status:Boolean
    }
  }