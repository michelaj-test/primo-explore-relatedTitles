/*
 * Adding listi of related titles on directive primOpacAfter
 *
 e il campo è : vm.parentCtrl.item.pnx.display.relation[0];
 * mjm2022
 */

app.controller('RelatedTitlesController', [function() {
  var vm = this;

  this.$onInit = function(){
    {
      vm.rel = [];
	  var related=[];
	  var url= "discovery/fulldisplay?vid=39UMI_INST%3AVU1&docid=alma";
      if('relation' in vm.parentCtrl.item.pnx.display) {
		    vm.parentCtrl.item.pnx.display.related.forEach(function(title, i, related) {
				part= title.split("$$");				
				vm.rel.push([ part[1], url+part[2].substr(1) ]);
			});
      }
    }
  };
}]);
app.component('prmOpacAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'RelatedTitlesController',
  template: `Opere in più volumi: <div ng-repeat="title in $ctrl.rel">
           {{title}}<br />
        </div>`
});