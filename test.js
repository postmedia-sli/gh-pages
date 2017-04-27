/* 
Testing
 */
function onClick() {
  getAFT();
}

function getAFT() {
 var startTime = window.performance.now();

  window.performance.clearMarks('mark_above_the_folder');
  window.performance.mark('mark_above_the_folder');
  window.performance.measure('mark_above_the_folder', 'navigationStart', 'mark_above_the_folder');

  var endTime = window.performance.now();  
  var diff = (endTime - startTime) *1;

  //var measures = window.performance.getEntriesByType('measure');
  //var aft = measures[0].duration;
  
  label.textContent = "Above the folder Time (ms) = " + diff;

}
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

