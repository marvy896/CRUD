import { connect } from 'mongoose';

const connectDB = async (url) => {
    return connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDB;