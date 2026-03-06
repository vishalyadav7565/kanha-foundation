import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  content: String,
  image: String,
  category: {
    type: String,
    required: true,
  },
})


export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema)