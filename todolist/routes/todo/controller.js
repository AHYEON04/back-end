const{ Todo } = require("../../models");

const write = async (req, res) => {
    const userId = req.decoded.id;
    const content = req.body.content;
    console.log(userId, content);
    try{
       await Todo.create({
           content,
           userId,
        });
        res.status(200).json({
            message: "투두 작성 성공",
        });
    }catch (e) {
        res.status(500).json({
            message: "투두 작성 실패",
        });
    }
};

module.exports = {
    write,
};
