export class NumberExtension{

  public static randomInt(min:number = Number.MIN_SAFE_INTEGER, max:number = Number.MAX_SAFE_INTEGER){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
}
