import mongoose from "mongoose";

const postAnnunciSchema = new mongoose.Schema({
    titolo: {
        type: String,
        required: true
    },
    azienda: {
        type: String,
        required: true
    },
    descrizione: {
        type: String,
        required: true
    },
    località:{
        type: String,
        required: true
    },
    dataPubbilicazione: {
        type: Date,
        default: Date.now}
});


const PostAnnunci = mongoose.model("postAnnunci", postAnnunciSchema);
export default PostAnnunci;