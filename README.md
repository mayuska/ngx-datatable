[ngx-datatable](https://www.npmjs.com/package/@swimlane/ngx-datatable) fork repo with customisation for horizontal scroll and resizing
(resizeStart)

## Requirement
- node: 18.13.0 or higher
- npm: 8.19.3 or higher

## Fork Updates(not included in original lib)
### Fixed
- https://github.com/swimlane/ngx-datatable/issues/1942
- https://github.com/swimlane/ngx-datatable/pull/1906

### Features
Added support for draggable rows via material [dragDrop](https://material.angular.io/cdk/drag-drop/overview).
- New input "reorderableRows" for enable/disable row reordering. False by default.
- New event and interface for emitted data: "rowsReorder" that emits data with "NgxRowReorder" interface.

usage example:
```angular2html
<ngx-datatable [reorderableRows]="true"
               (rowsReorder)="yourMethodForDetectingReorderChange($event)">
</ngx-datatable>
```
TS:
```ts
public yourMethodForDetectingReorderChange(reorderEvent: NgxRowReorder) {
 // your logic on rows reordering
}
```

## Publish

test: `npm run package` or `npm run prepublish:lib`

publish: `npm run publish:lib` (update version in package, package-lock, projects/swimlane/ngx-datatable/package.json)

## Installation

To use ngx-datatable in your project install it via [npm](https://www.npmjs.com/package/@swimlane/ngx-datatable):

```
npm i at-ngx-datatable --save
```

## Dependencies (31.01.2024)
```json
"dependencies": {
    "@angular/animations": "^17.1.1",
    "@angular/cdk": "^17.1.1",
    "@angular/common": "^17.1.1",
    "@angular/compiler": "^17.1.1",
    "@angular/core": "^17.1.1",
    "@angular/forms": "^17.1.1",
    "@angular/material": "^17.1.1",
    "@angular/platform-browser": "^17.1.1",
    "@angular/platform-browser-dynamic": "^17.1.1",
    "@angular/router": "^17.1.1",
    "rxjs": "^6.6.7",
    "tslib": "^2.3.1",
    "zone.js": "^0.14.3"
},
```


## Credits

`ngx-datatable` is a [Swimlane](http://swimlane.com) open-source project; we believe in giving back to the open-source community by sharing some of the projects we build for our application. Swimlane is an automated cyber security operations and incident response platform that enables cyber security teams to leverage threat intelligence, speed up incident response and automate security operations.

[SecOps Hub](http://secopshub.com) is an open, product-agnostic, online community for security professionals to share ideas, use cases, best practices, and incident response strategies.
