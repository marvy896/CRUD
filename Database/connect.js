import { connect as _connect } from 'mongoose';

const connect = async (url) => {
  try {
    await _connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connect;