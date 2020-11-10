# CHAPTER 1 - COMPONENTS and DIRECTIVES
-- directive that has same selector and @Output()
e.g.  [waPaymentError]   
    <button
        (waPaymentSubmit)="onPayment($event)"
        (waPaymentError)="onPaymentError($event)" >
        Buy
    </button>
-- CSS SELECTORS in directives e.g :not() example from blog - remember to mention
   that component can be attached to element same as directive <div but-i-am-component> ... </div>

# CHAPTER 2 - DEPENDENCY INJECTION
--- directive / component can access element ref in its own provider arr without injecting it in its constructor
boxExtractor({nativeEl}:Element){}

@Directive({
    selector: '[waResizeObserver]',
    providers: [
        ResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            deps: [ElementRef],
            useFactory: boxExtractor,
        },
    ],
})
-- also have default factory for RESIZE_OPTION_BOX and override here
# CHAPTER 3 - ANGULAR ROUTER