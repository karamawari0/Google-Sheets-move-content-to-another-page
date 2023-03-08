function move() {
  var NAME_OF_SOURCE_SHEET = "XXX";
  var NAME_OF_TARGET_SHEET = "YYY";
  var WORD_TO_SORT_BY = "NNN";
  
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NAME_OF_SOURCE_SHEET);
  var rows = sourceSheet.getDataRange().getValues();
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NAME_OF_TARGET_SHEET);
  var rowsToBeDeleted = [];
  var rowsDeleted = 0;
console.log(rows)

 for(var i=1; i<rows.length; i++){
    if(rows[i][0].includes(WORD_TO_SORT_BY)==false)
    {
     rowsToBeDeleted.push(i+1)
     targetSheet.appendRow(rows[i]);
    } 
 }

for (const element of rowsToBeDeleted) {
  sourceSheet.deleteRow(element-rowsDeleted);
  rowsDeleted=rowsDeleted+1;
}

targetSheet.sort(1);
sourceSheet.sort(1);
SpreadsheetApp.getActive().toast("Success!");
    }
