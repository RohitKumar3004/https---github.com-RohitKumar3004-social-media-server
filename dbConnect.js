const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://rohitchauhan91482:vLGLK39SuSSiyhXU@cluster0.p95hv64.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected:) ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
