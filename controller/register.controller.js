const usersDb = require('../model/users.model');
const register = async(req, res) => {
    if (!req.body.userEmail || !req.body.userName) {
        return res.status(400).send({ success: false, message: 'failed due to no email or name' });
    }

    try {
        //check if user exists
        const emailCheck = await usersDb.find({ userEmail: req.body.userEmail });
        if (emailCheck.length > 0) {
            return res.status(409).send({ success: false, message: 'user already exists' });
        } else {
            const user = new usersDb(req.body);
            await user.save();
            return res.status(200).send({ success: false, message: 'user created successfully' });
        }


    } catch (e) {
        return res.status(500).send({ success: false, message: 'error', error: e });
    }


}

module.exports = register;