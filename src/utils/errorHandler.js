/*
    Example of the kind of function we find in utils 
    An erro handler
*/

const logErrAndRedirectBack = (res, err) => {
    console.log(err);
    res.redirect('back')
}


module.exports = {
    logErrAndRedirectBack
}