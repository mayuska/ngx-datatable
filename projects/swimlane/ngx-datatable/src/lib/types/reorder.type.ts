import { CdkDragDrop } from '@angular/cdk/drag-drop';

/** Row */
export interface NgxRowReorder {
  current: any[],
  previous: any[],
  currentIndex: number,
  previousIndex: number,
  event: CdkDragDrop<any>
}
