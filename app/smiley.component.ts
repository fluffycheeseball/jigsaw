import { Component, Directive, ElementRef, AfterViewInit, Input, Renderer, ContentChild, ViewChildren, ViewChild ,HostListener } from '@angular/core';

@Component({
    selector: 'smiley',
    template: '<canvas #canvas></canvas>'
})
export class SmileyDirective {
    @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    private left: number;
    private top: number;
    private dragon: boolean;
    private last: any;
    @Input('size') size: number;
    @Input('color') color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
         console.log("SmileyDirective constructor: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

     @HostListener('mousedown', ['$event'])
     mouseDown(event: MouseEvent) {
         this.dragon = true;
    //      var mousePos = this.getMousePos( event);
 //   this.draw(mousePos.x,mousePos.y)
  } 

       @HostListener('mouseup') mouseUp(event: MouseEvent) {
           this.dragon = false;
  //  console.log("mouse up");
  } 

       @HostListener('mousemove', ['$event']) 
       mouseMove(event: MouseEvent) {
           if(this.dragon) {
               this.last = this.getMousePos(event);
         // var mousePos = this.getMousePos( event);
    this.draw(this.last.x,this.last.y)
           }
  } 

    ngOnInit() {
         console.log("SmileyDirective ngOnInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

    ngAfterViewInit() {
         console.log("SmileyDirective ngAfterViewInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = 5000;
        this.canvas.height = 4000;
        this.draw(0,0);
    }

    getMousePos( evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    } 

    draw(left: number, top:number) {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext){
                var ctx = canvas.getContext('2d');
        var imageObj = new Image();

        imageObj.onload = function() {
            ctx.drawImage(imageObj, left, top);
        };
        imageObj.src = '../../biggrin.png';
        }
        }
    }
}