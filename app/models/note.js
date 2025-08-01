import mongoose,{Schema} from "mongoose";

const noteSchema = new Schema(
    {
        title:String,
        note:String,
      
    }
);
const Notes = mongoose.models.Notes || mongoose.model("Notes",noteSchema);
export default Notes;