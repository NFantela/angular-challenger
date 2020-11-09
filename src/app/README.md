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

# CHAPTER 3 - ANGULAR ROUTER