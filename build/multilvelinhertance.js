"use strict";
class GrandFather {
    constructor(fn, ln, adharCard) {
        this.firstName = fn;
        this.lastName = ln;
        this.adharCard = adharCard;
    }
}
class Father extends GrandFather {
    constructor(fn, ln, adharCard) {
        super(fn, ln, adharCard);
    }
}
