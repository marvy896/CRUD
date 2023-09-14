import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://onyex896:<6xRl9LpBVXhDNezC>@cluster0.xvtr9pj.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDB;