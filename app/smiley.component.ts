import { Component, Directive, ElementRef, AfterViewInit, Input, Renderer, ContentChild, ViewChildren, ViewChild  } from '@angular/core';

@Component({
    selector: 'smiley',
    template: '<canvas #canvas></canvas>'
})
export class SmileyDirective {
    @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    @Input('size') size: number;
    @Input('color') color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        // console.log("SmileyDirective constructor: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

    ngOnInit() {
        // console.log("SmileyDirective ngOnInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

    ngAfterViewInit() {
        // console.log("SmileyDirective ngAfterViewInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = 5000;
        this.canvas.height = 4000;
        this.draw();
    }

    draw() {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext){
                var ctx = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        ctx.drawImage(imageObj, 69, 50);
      };
      imageObj.src = '../../biggrin.png';
  
            }
        }
    }
}