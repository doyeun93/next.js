
function sayHello (firstName: string){
    console.log('Hello' + firstName)
}

let firstName: string = 'Hana'
sayHello(firstName)

function calc(isSum: boolean){
    let a = 100
    if(isSum){
        let b = a+1
        return b
    }

    // 배열에 타입을 지정할 때는 그 배열을 구성하는 타입과 [] 표기 사용함. 예를 들어, number의 배열이라면 number[]라는 구문을 사용함
    const mixedArray = ['foo' , 1]
    const mixedArrayU : (string|number)[] = ['foo', 1] // Union타입
    const mixedArrayT : [string, number] = ['foo', 1] // 튜플

    // [객체 타입] : 객체 = 키와 값을 이용한 데이터 형식 인스턴스 {키:값} = 객체
    const user: {name: string; age: number} = {
        name: 'Hana',
        age: 36
    }

    console.log(user.name)
    console.log(user.age)
    
}
// 객체타입은 일부 또는 모든 속성을 ?를 사용해 옵셔널(선택가능) 속성으로 지정할 수 있다. 
// 옵셔널 속성으로 타입을 정의하면 해당 속성이 존재하지 않아도 문제없이 작동함
function printName(obj: {firstName: string; lastName?: string}){

}
printName({ firstName: 'Hana' })
printName({ firstName: 'Hana' , lastName: 'Kim' })


// [any ]: 이름 그대로 모든 타입을 허용하는 타입. 특정한 값에 대해 타입 체크 구조를 적용하고 싶지 않을 때 사용
// any를 사용하면 타입 체크 기능이 작동하지 않게됨. 따라서 타입스크립트를 사용하는 장점을 활용할 수 없음
let user: any = {firstName: 'Hana'}
user.hello()
user()
user.age = 100
user = 'hello'

const n: number = user


// [함수] : 인수와 반환값의 타입을 지정할 수 있다. 인수를 정의할 때 기본값을 지정할 수 있다. 
// 함수를 호출할 때 해당 인수를 지정하지 않으면 기본값이 설정된다.
function sayHi(name:string): string{
    return `Hello ${name}`
}
sayHi('Hana') // 함수의 인수와 반환값에 string을 정의한 예시

// 함수를 인수로 받는 함수의 타입 지정 예시 : 인수나 반환값의 타입에 다양한 타입을 지정할 수 있다
// 이름과 포맷 함수를 인수로 받아 포매팅할 뒤 콘솔에 출력하는 함수를 정의한다
function printName1(firstName : string, formatter: (name: string) => string){
    console.log(formatter(firstName))
}
// '씨'를 뒤에 붙이는 이름 포맷 함수를 정의한다
function formatName(name:string): string {
    return `${name}씨`
}
printName1('홍길동', formatName) 


// 화살표함수 = (인수명:인수_타입):반환값_타입 => 자바스크립트_식
let sayHello1 = (name: string): string => `Hello ${name}`


// [함수 타입] : 인수에도 함수를 사용할 수 있음. 인수명은 실제 함수의 인수명과 대응할 필요 없음
// (인수명:인수_타입) ==> 반환값_타입


// singBird는 인수가 문자열이고 반환값이 배열(문자열배열)인 함수를 인수로 받는다
 function genBirdsInfo(name: string): string[]{
    return name.split(',')
 }
 function singBirds(birdInfo: (x:string) => string[]): string{
    return birdInfo('오리, 비둘기')[0] + '꽥꽥'
 }
 console.log(singBirds(genBirdsInfo))
 // console.log(singBirds('참새')) => 타입이 맞지않으므로 에러


 // [타입 추론] : 명시적인 변수의 초기화를 수행하면 타입 추론을 통해 자동적으로 타입이 결정되는 기능이 있다
 // 타입 추론은 대입할 대상 변숫값의 타입이 결정되어 있을 때, 대입할 값과 타입이 일치하지 않는 경우 에러가 발생하는 추론 기능도 있다.
 const age = 10
 // console.log(age.length) => 에러 : age는 number 타입이므로 length 속성은 없다

function getUser(){
    return {
        name : 'Hana',
        age: 26
    }
}
const user1 = getUser()
// console.log(user1.age.length) -> 에러: age는 number 타입이므로 length 속성은 없다


// 배열의 값도 추론되므로, 명시적으로 string이라고 설정하지 않아도 다음 for 루프에서는 string타입으로 다뤄짐
const names = ['Hana', 'Wonjoon', 'Eunjeong']

names.forEach((name) => {
    console.log(name.toUpperCase())
})

// 자바스크립트를 실행할 때 표준으로 갖는 window 객체 함수 예시
// window.confirm 함수의 반환 타입은 boolean인 것을 타입스크립트가 알고 있으므로
// 대입하는 함수 타입이 일치하지 않으면 컴파일 에러가 된다
// window.confirm = () => {
    // boolean을 return하지 않는 한 에러가 된다
    // console.log('confirm 함수')
// }


// const myCanvas = document.getElementById('main_canvas')
// console.log(myCanvas.width) // myCanvas'은(는) 'null'일 수 있습니다. 'HTMLElement' 형식에 'width' 속성이 없습니다.
// document.getElementById()는 HTMLElement를 반환하며, HTMLCanvasElement를 반환하지 않으므로 타입이 일치하지않는다는 에러가 남

// [타입 어서션] : 대상이 되는 타입보다 구체적이거나 범용적인 타입으로 변환하는 경우. 보수적인 규칙이라 복잡한 어서션을 수행할 때 표현하기 어려움.
// 이런 경우에는 먼저 any로 변환한 뒤 원하는 타입으로 변환하는 2단계 어서션으로 구현할 수 있다. 단, 실행시에 에러를 일으킬 가능성이 있으므로 주의해야함
// number 타입으로 타입변환(casting)하는 것을 가정한 예시 -> 컴파일 시 에러는 발생하지않지만, 실행시 에러가 발생함
const foo: any = 'test'
const bar: number = foo as number
console.log(bar.toFixed(2)) // 컴파일 시에는 number 타입으로서 다뤄져 에러가 발생하지않지만, 실행 시 사실은 string타입이 전달되므로 에러발생함

// [타입 앨리어스(alias)] : 타입 지정의 별명(alias)을 덧붙이는 기능. 
// 타입 정의에 이름을 붙일 수 있고, 그 이름을 참조해서 같은 타입을 여러 차례 재사용할 수 있다. type키워드를 사용해서 지정함
// type 타입명 = 값
// 원시 타입에 별명을 붙여서 사용할 수 있다. 타입명은 일반적으로 대문자로 시작함
// type Name = string

// string을 인수로 받고 string 타입을 반환하는, 주어진 문자열의 포맷을 반경하는 함수의 타입을 지정하는 예시
// -> 타입 앨리어스를 사용함으로써 코드 기술이 단순하게 되므로 가독성이 좋아짐
type Formatter = (a:string) => string
function printName2(firstName: string, formatter: Formatter){
    console.log(formatter(firstName))
}
// 또한 객체의 키 이름을 명시하지않고 타입 앨리어스를 정의할 수도 있음. 키 이름과 키 숫자가 미리 정해지지 않는 경우의 객체를 정의할 때 편리
// { [] : 타입명}
type Label = {
    [key: string] : string
} // key(객체의 키)에 문자열, 객체의 값에 문자열을 요청함



// [인터페이스] : 타입 앨리어스와 비슷한 기능이지만, 보다 확장성이 높은 열린 기능을 갖고있음. 클래스와 함께 많이 사용함
// 인터페이스로 객체 타입을 지정할 때 : interface 타입명 { 속성1:타입1; 속성2:타입2; ....}
// type과 비슷하지만, = 가 필요하지 않고, 반드시 {}로 타입 정의가 시작되어야 함
interface Point {
    x: number;
    y: number;
}
function printPoint(point: Point){
    console.log(`x좌표는 ${point.x}입니다`)
    console.log(`y좌표는 ${point.y}입니다`)
    console.log(`z좌표는 ${point.z}입니다`)
}
interface Point{
    z: number; // 인터페이스 확장(타입 앨리어스는 나중에 같은 이름으로 타입을 정의할 수 없음)
}
// printPoint({ x:100, y:100}) -> 에러 : 인수의 객체에 z가 존재하지 않으므로 컴파일 시 에러
printPoint({ x:100, y:100, z:200}) 

// 인터페이스에서는 클래스의 작동 타입을 정의하고, implements를 사용해 클래스에 구현을 위임할 수 있음
interface Point1{
    x: number;
    y: number;
    z: number;
}
// class MyPoint implements Point1{
//     x: number;
//     y: number;
// } ->  에러 : z가 존재하지 않으므로

// 인터페이스에서는 extends를 사용해 다른 인터페이스를 확장할 수 있음
interface Colorful{
    color : string;
}
interface Circle {
    radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}
// 여러 인터페이스를 상속해서 새로운 인터페이스를 정의할 수 있다
const cc: ColorfulCircle = {
    color: '빨강',
    radius: 10
}
// 객체 타입을 정의할 때 인터페이스와 타입 앨리어스 모두 사용할 수 있으며, 상속에 관한 세세한 기능의 큰 차이는 없이 거의 비슷한 기능을 갖는다.
// 단, 타입스크립트의 설계 사상을 고려했을 때 이 2가지 기능은 다소 다른점이 있다.
// 인터페이스는 클래스나 데이터의 한쪽 측면을 정의한 타입, 즉, 인터페이스에 매치하는 타입이라도 그 값 이외에 다른 필드나 메서드가 있음을 전제로 한 것.
// 한편, 타입 앨리어스는 객체의 타입 자체를 의미함.  
// 객체 그 자체가 아니라 클래스나 객체의 일부 속성이나 함수를 포함하는 일부 작동을 정의할 때는 인터페이스를 사용하는 것이 적합함



// [클래스]: 
class Point2{
    x:number;
    y:number;

    // 인수가 없는 경우의 초기값을 지정한다
    constructor(x: number = 0, y: number = 0){
        this.x = x
        this.y = y
    }

    // 반환값이 없는 함수를 정의할 때는 void를 지정한다
    moveX(n:number):void {
        this.x += n
    }
    moveY(n:number):void {
        this.y += n
    }
}
const point = new Point2()
point.moveX(10)
console.log(`${point.x}, ${point.y}`) // 10, 0