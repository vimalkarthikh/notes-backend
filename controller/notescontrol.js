import { Notes } from "../models/notes.js";

export function getAllUserDocs(req){
    return Notes.find({user:req.user._id}).populate( "user","title document date");               

}

