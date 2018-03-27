/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*/
define(['N/record'], function(record){
         function saveRecord(context){
               var journalEntry = record.load({
                     id:6,
                     type: record.Type.JOURNAL_ENTRY,
                     isDynamic: true
               });
               journalEntry.selectNewLine({
                     sublistId: 'line'
               });
               journalEntry.setCurrentSublistValue({
                     sublistId: 'line',   
                     fieldId: 'account',
                     value: 1
               });
               journalEntry.setCurrentSublistValue({
                     sublistId: 'line',   
                     fieldId: 'debit',
                     value: 1
               });
               journalEntry.setCurrentSublistValue({
                      sublistId: 'line',
                      fieldId: 'memo',
                      value: "Debit 1"
               });
               journalEntry.commitLine({
                      sublistId: 'line'
               });
               journalEntry.selectNewLine({
                     sublistId: 'line'
               });
               journalEntry.setCurrentSublistValue({
                     sublistId: 'line',   
                     fieldId: 'account',
                     value: 1
               });
               journalEntry.setCurrentSublistValue({
                     sublistId: 'line',   
                     fieldId: 'credit',
                     value: 1
               });
               journalEntry.setCurrentSublistValue({
                      sublistId: 'line',
                      fieldId: 'memo',
                     value: "Credit 1"
               });
               journalEntry.commitLine({
                      sublistId: 'line'
               });

               var recordId = journalEntry.save();
               return true;
               }
            return {
               saveRecord : saveRecord
            };
         });