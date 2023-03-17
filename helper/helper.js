const catchAsync = function (fn) {
    /**
     * @fn function which is wrapperd by the catchAsync function to use the DRY method.
     * passdown the request, response and the next argumens into the innerfunction.
     */
 
    return (req, res, next) => {
       fn(req, res, next).catch((err) => {
          console.log(err);
       });
    };
 };

 module.exports = {
    catchAsync
 }