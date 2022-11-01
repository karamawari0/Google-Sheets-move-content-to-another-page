function move() {
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Пакеты");
  var rows = sourceSheet.getDataRange().getValues();
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Курсы");
  var rowsToBeDeleted = [];
  var rowsDeleted = 0;
console.log(rows)

 for(var i=1; i<rows.length; i++){
    if(rows[i][0].includes("Пакет")==false)
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
SpreadsheetApp.getActive().toast("Выполнено!");
    }
