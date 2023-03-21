import { NextApiHandler } from "next"
import users from "../../../data/users";

const handler:NextApiHandler = async(req,res)=>{
    if(req.method==='GET'){

        const userId = req.query.userId as string;
        console.log("user id", userId)
        const user = users.find((user) => user.id === parseInt(userId))
        if(!user){
            return res.status(404).json({error:'user not found'});
        }


        return res.status(200).json(user);

    }


    return res.status(405).json({error:'method not allowed'});
}

export default handler