angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/main/templates/mdDataTable.html","<md-content class=\"mdDataTable md-whiteframe-z1\" layout=\"column\">\n    <!-- table card -->\n    <md-data-table-card-header\n            ng-if=\"tableCard.visible\"\n            ng-hide=\"alternateHeaders && isAnyRowSelected()\">\n    </md-data-table-card-header>\n\n    <!-- alternate headers -->\n    <md-data-table-alternate-headers ng-if=\"alternateHeaders && isAnyRowSelected()\"></md-data-table-alternate-headers>\n    <!-- alternate headers end -->\n\n    <table cellpadding=\"0\" cellspacing=\"0\">\n        <thead></thead>\n        <tbody></tbody>\n    </table>\n\n    <!-- table card -->\n    <md-data-table-card-footer ng-if=\"tableCard.visible\"></md-data-table-card-footer>\n    <!-- table card end -->\n</md-content>");
$templateCache.put("/main/templates/mdDataTableAlternateHeaders.html","<div class=\"mdDataTable-header-alternate\" layout=\"row\" layout-align=\"start center\">\n    <span class=\"alternate-text\" flex>{{getNumberOfSelectedRows()}} item selected</span>\n    <md-button class=\"md-icon-button md-primary\" ng-click=\"deleteSelectedRows()\" aria-label=\"Delete selected rows\" style=\"width:24px;height:24px;\">\n        <ng-md-icon icon=\"delete\" size=\"24\"></ng-md-icon>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\" style=\"width:24px;height:24px;\">\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\n    </md-button>\n</div>");
$templateCache.put("/main/templates/mdDataTableCardFooter.html","<div class=\"mdDataTable-footer\" layout=\"row\"> </div>");
$templateCache.put("/main/templates/mdDataTableCardHeader.html","<div class=\"mdDataTable-header\" layout=\"row\" layout-align=\"start center\">\n    <span flex>{{tableCard.title}}</span>\n\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"Filter\" style=\"width:24px;height:24px;\">\n        <ng-md-icon icon=\"filter_list\" size=\"24\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\" style=\"width:24px;height:24px;\">\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\n    </md-button>\n</div>");
$templateCache.put("/main/templates/mdDataTableCell.html","<td class=\"column {{getColumnAlignClass}}\">\n    <span ng-if=\"htmlContent\"><ng-transclude></ng-transclude></span>\n    <span ng-if=\"!htmlContent\">{{getCellValue()}}</span>\n</td>");
$templateCache.put("/main/templates/mdDataTableColumn.html","<th class=\"column {{getColumnAlignClass}}\" ng-click=\"clickHandler()\">\n    <div layout=\"row\">\n        <span ng-if=\"isSortingEnabled() && alignRule == ColumnOptionProvider.ALIGN_RULE.ALIGN_RIGHT\">\n            <span class=\"hoverSortIcons\" ng-if=\"!isSorted()\">\n                <ng-md-icon ng-if=\"direction == 1\" icon=\"arrow_forward\" size=\"16\"></ng-md-icon>\n                <ng-md-icon ng-if=\"direction == -1\" icon=\"arrow_back\" size=\"16\"></ng-md-icon>\n            </span>\n\n            <span class=\"sortedColumn\" ng-if=\"isSorted()\">\n                <ng-md-icon ng-if=\"direction == -1\" icon=\"arrow_forward\" size=\"16\"></ng-md-icon>\n                <ng-md-icon ng-if=\"direction == 1\" icon=\"arrow_back\" size=\"16\"></ng-md-icon>\n            </span>\n        </span>\n\n        <span flex>\n            <ng-transclude></ng-transclude>\n        </span>\n\n        <span ng-if=\"isSortingEnabled() && alignRule == ColumnOptionProvider.ALIGN_RULE.ALIGN_LEFT\">\n            <span class=\"hoverSortIcons\" ng-if=\"!isSorted()\">\n                <ng-md-icon ng-if=\"direction == 1\" icon=\"arrow_forward\" size=\"16\"></ng-md-icon>\n                <ng-md-icon ng-if=\"direction == -1\" icon=\"arrow_back\" size=\"16\"></ng-md-icon>\n            </span>\n\n            <span class=\"sortedColumn\" ng-if=\"isSorted()\">\n                <ng-md-icon ng-if=\"direction == -1\" icon=\"arrow_forward\" size=\"16\"></ng-md-icon>\n                <ng-md-icon ng-if=\"direction == 1\" icon=\"arrow_back\" size=\"16\"></ng-md-icon>\n            </span>\n        </span>\n    </div>\n</th>");
$templateCache.put("/main/templates/mdDataTableHeaderRow.html","<tr class=\"theadTrRow\">\n    <th class=\"checkboxCell\" ng-show=\"isSelectableRows()\" >\n        <md-checkbox aria-label=\"select all\" ng-model=\"selectAllRows\"></md-checkbox>\n    </th>\n</tr>");
$templateCache.put("/main/templates/mdDataTableRow.html","<tr ng-class=\"{\'selectedRow\': getRowOptions().selected}\" ng-show=\"getRowOptions().deleted === false\">\n    <td class=\"checkboxCell\" ng-show=\"isSelectableRows()\">\n        <md-checkbox aria-label=\"select\" ng-model=\"getRowOptions().selected\"></md-checkbox>\n    </td>\n</tr>");}]);