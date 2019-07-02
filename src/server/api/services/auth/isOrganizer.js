module.exports = (req,res,next) => {
    let organizer = req.user.organizer;
    if(organizer) {
        next();
    }else {
        return res.status(403).json({
            success: false,
            message: "Oops, you don't have permission to do that."
          })
    }
}