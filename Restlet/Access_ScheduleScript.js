/**
 * @NApiVersion 2.x
 * @NScriptType restlet
 */
define([ 'N/task' ], function(task) {
    return {
       get : function() {
          var mrTask = task.create({
             taskType : task.TaskType.SCHEDULED_SCRIPT
          });
          mrTask.scriptId = 488;
          mrTask.deploymentId = 'customdeploy_scheduledscript';
          mrTask.params = {
             custscriptcustom_data : 'data'
          };
          mrTask.submit();
          return "Scheduled script updated";
       }
    }
 });