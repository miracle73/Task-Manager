const notFound = (req,res) => {
    res.status(200).send("Page not Found")
}
module.exports = notFound