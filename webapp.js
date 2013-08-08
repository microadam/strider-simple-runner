/*
var Worker = require('./lib/worker')

// XXX should we switch to a different way of things?
module.exports = function (context, next, isTest) {
  console.log("!!! LOADING SIMPLEWORKER")
  console.trace()
  if (isTest) {
    throw new Error('test injection not supported')
  }
  var worker = new Worker({
    pty: context.enablePty,
    emitter: context.emitter,
    logger: context.logger
  })
  context.loader.initWorkerExtensions(
    context.extdir,
    worker.buildContext(context.config, context.extdir),
    function (err, initialized) {
      if (err) {
        context.logger.warn('Failed to initialize extensions', err.message, err.stack)
        return next(err)
      }
      worker.attach(context.emitter)
      context.logger.log('Simple Worker ready')
      next()
    })
}
module.exports.Worker = Worker
*/
