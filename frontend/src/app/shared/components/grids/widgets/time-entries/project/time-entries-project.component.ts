import { Component, OnInit, Injector, ChangeDetectorRef } from "@angular/core";
import { WidgetTimeEntriesListComponent } from "core-app/shared/components/grids/widgets/time-entries/list/time-entries-list.component";
import { I18nService } from "core-app/core/i18n/i18n.service";
import { PathHelperService } from "core-app/core/path-helper/path-helper.service";
import { CurrentProjectService } from "core-app/core/current-project/current-project.service";
import { FilterOperator } from "core-app/shared/helpers/api-v3/api-v3-filter-builder";
import { TimezoneService } from "core-app/core/datetime/timezone.service";
import { ConfirmDialogService } from "core-app/shared/components/modals/confirm-dialog/confirm-dialog.service";

@Component({
  templateUrl: '../list/time-entries-list.component.html',
})
export class WidgetTimeEntriesProjectComponent extends WidgetTimeEntriesListComponent implements OnInit {
  constructor(readonly injector:Injector,
              readonly timezone:TimezoneService,
              readonly i18n:I18nService,
              readonly pathHelper:PathHelperService,
              readonly confirmDialog:ConfirmDialogService,
              protected readonly cdr:ChangeDetectorRef,
              protected readonly currentProject:CurrentProjectService) {
    super(injector, timezone, i18n, pathHelper, confirmDialog, cdr);
  }
  protected dmFilters():Array<[string, FilterOperator, [string]]> {
    return [['spentOn', '>t-', ['7']] as [string, FilterOperator, [string]],
            ['project_id', '=', [this.currentProject.id]] as [string, FilterOperator, [string]]];
  }
}
